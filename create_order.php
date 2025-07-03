<?php
header('Content-Type: application/json');
require __DIR__.'/vendor/autoload.php'; // Include RazorPay library

use Razorpay\Api\Api;

// Database connection
$db = new mysqli('localhost', 'username', 'password', 'jisnusports_donations');
if ($db->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (empty($data['amount']) || $data['amount'] < 1000) {
    die(json_encode(['error' => 'Amount must be at least ₹10']));
}

if (empty($data['cause_id']) || empty($data['email']) || empty($data['first_name'])) {
    die(json_encode(['error' => 'Required fields are missing']));
}

// Get cause details
$stmt = $db->prepare("SELECT name, description FROM causes WHERE id = ?");
$stmt->bind_param("i", $data['cause_id']);
$stmt->execute();
$cause = $stmt->get_result()->fetch_assoc();
$stmt->close();

if (!$cause) {
    die(json_encode(['error' => 'Invalid cause selected']));
}

// Initialize RazorPay
$api = new Api('YOUR_RAZORPAY_KEY_ID', 'YOUR_RAZORPAY_KEY_SECRET');

try {
    // Create order
    $order = $api->order->create([
        'amount' => $data['amount'],
        'currency' => 'INR',
        'receipt' => 'DON_' . time(),
        'payment_capture' => 1,
        'notes' => [
            'cause_id' => $data['cause_id'],
            'donor_email' => $data['email']
        ]
    ]);
    
    // Return order details
    echo json_encode([
        'id' => $order->id,
        'amount' => $data['amount'],
        'currency' => 'INR',
        'description' => 'Donation for ' . $cause['name'],
        'cause_name' => $cause['name'],
        'cause_id' => $data['cause_id']
    ]);
    
} catch (Exception $e) {
    die(json_encode(['error' => 'Failed to create payment order: ' . $e->getMessage()]));
}
?>