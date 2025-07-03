<?php
header('Content-Type: application/json');
require __DIR__.'/vendor/autoload.php';

use Razorpay\Api\Api;

// Database connection
$db = new mysqli('localhost', 'username', 'password', 'jisnusports_donations');
if ($db->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Verify required fields
$required = ['razorpay_payment_id', 'razorpay_order_id', 'razorpay_signature', 'donation_data'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        die(json_encode(['success' => false, 'message' => "$field is missing"]));
    }
}

// Verify payment signature
$api = new Api('YOUR_RAZORPAY_KEY_ID', 'YOUR_RAZORPAY_KEY_SECRET');

$attributes = [
    'razorpay_order_id' => $data['razorpay_order_id'],
    'razorpay_payment_id' => $data['razorpay_payment_id'],
    'razorpay_signature' => $data['razorpay_signature']
];

try {
    $api->utility->verifyPaymentSignature($attributes);
    
    // Signature verified - process donation
    
    // Check if donor exists
    $stmt = $db->prepare("SELECT id FROM donors WHERE email = ?");
    $stmt->bind_param("s", $data['donation_data']['email']);
    $stmt->execute();
    $donor = $stmt->get_result()->fetch_assoc();
    $stmt->close();
    
    // Create donor if doesn't exist
    if (!$donor) {
        $stmt = $db->prepare("INSERT INTO donors (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", 
            $data['donation_data']['first_name'],
            $data['donation_data']['last_name'],
            $data['donation_data']['email'],
            $data['donation_data']['phone']
        );
        $stmt->execute();
        $donor_id = $stmt->insert_id;
        $stmt->close();
    } else {
        $donor_id = $donor['id'];
    }
    
    // Record donation
    $amount = $data['donation_data']['amount'] / 100; // Convert back to rupees
    $stmt = $db->prepare("INSERT INTO donations (
        donor_id, cause_id, amount, razorpay_payment_id, razorpay_order_id, 
        razorpay_signature, status, note
    ) VALUES (?, ?, ?, ?, ?, ?, 'completed', ?)");
    
    $stmt->bind_param("iidssss", 
        $donor_id,
        $data['donation_data']['cause_id'],
        $amount,
        $data['razorpay_payment_id'],
        $data['razorpay_order_id'],
        $data['razorpay_signature'],
        $data['donation_data']['note']
    );
    
    $success = $stmt->execute();
    $donation_id = $stmt->insert_id;
    $stmt->close();
    
    if ($success) {
        // Update cause current amount
        $update = $db->prepare("UPDATE causes SET current_amount = current_amount + ? WHERE id = ?");
        $update->bind_param("di", $amount, $data['donation_data']['cause_id']);
        $update->execute();
        $update->close();
        
        // TODO: Send confirmation email
        // TODO: Generate PDF receipt
        
        echo json_encode([
            'success' => true,
            'donation_id' => $donation_id,
            'message' => 'Donation recorded successfully'
        ]);
    } else {
        throw new Exception('Failed to record donation');
    }
    
} catch (Exception $e) {
    // Log error
    error_log("Payment verification failed: " . $e->getMessage());
    
    echo json_encode([
        'success' => false,
        'message' => 'Payment verification failed: ' . $e->getMessage()
    ]);
}
?>