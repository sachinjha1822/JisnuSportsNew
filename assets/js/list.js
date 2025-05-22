// Sample XML data (replace with real XML data as required)
const xmlData = `
<donations>
<month name="May 2025">
    <donor><name>Hira</name><amount>50</amount><contact>9568035278</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-05-06</donation_date></donor>
    <donor><name>Saurav</name><amount>50</amount><contact>7943566278</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-05-06</donation_date></donor>
    <donor><name>Monu</name><amount>50</amount><contact>8945734563</contact><payment_method>UPI</payment_method><address>Rahika</address><donation_date>2025-05-07</donation_date></donor>
    <donor><name>Vishal</name><amount>50</amount><contact>9945678934</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-05-15</donation_date></donor>
    <donor><name>Sagar</name><amount>50</amount><contact>9856432345</contact><payment_method>UPI</payment_method><address>Giridiha</address><donation_date>2025-05-15</donation_date></donor>
    <donor><name>Balmukund</name><amount>50</amount><contact>9034562312</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-05-15</donation_date></donor>
    <donor><name>Rishi</name><amount>50</amount><contact>8856431209</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-05-15</donation_date></donor>
    <donor><name>Ajit</name><amount>100</amount><contact>7865245092</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-05-18</donation_date></donor>
</month>

<month name="April 2025">
    <donor><name>Prashant</name><amount>200</amount><contact>9568035278</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-04-06</donation_date></donor>
    <donor><name>Krishna</name><amount>100</amount><contact>7943566278</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-04-09</donation_date></donor>
    <donor><name>Sobhith</name><amount>50</amount><contact>9904567345</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-04-13</donation_date></donor>
    <donor><name>Pawan</name><amount>50</amount><contact>8943126789</contact><payment_method>UPI</payment_method><address>Delhi</address><donation_date>2025-04-13</donation_date></donor>
    <donor><name>Aman</name><amount>50</amount><contact>9934568901</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-04-13</donation_date></donor>
    <donor><name>Goldi</name><amount>100</amount><contact>9467345689</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-04-24</donation_date></donor>
    <donor><name>Shubham</name><amount>100</amount><contact>9123458256</contact><payment_method>UPI</payment_method><address>Delhi</address><donation_date>2025-04-24</donation_date></donor>
    <donor><name>Md Shivgatullah</name><amount>50</amount><contact>875610934</contact><payment_method>UPI</payment_method><address>Trimuhan</address><donation_date>2025-04-24</donation_date></donor>
    <donor><name>Sudhir</name><amount>50</amount><contact>9572325304</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-04-27</donation_date></donor>
    <donor><name>Abhishek</name><amount>50</amount><contact>9102187147</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-04-29</donation_date></donor>
    <donor><name>Anjan</name><amount>50</amount><contact>9475693403</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-04-29</donation_date></donor>
    <donor><name>Ayush</name><amount>100</amount><contact>9122912632</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-04-30</donation_date></donor>
    <donor><name>Sachin</name><amount>50</amount><contact>7033192746</contact><payment_method>UPI</payment_method><address>Shivnagar</address><donation_date>2025-04-30</donation_date></donor>
</month>

<month name="March 2025">
    <donor><name>Rahul</name><amount>500</amount><contact>8679675423</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-03-17</donation_date></donor>
    <donor><name>Vikki</name><amount>50</amount><contact>8755234512</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-18</donation_date></donor>
    <donor><name>Balmukund</name><amount>50</amount><contact>9076542381</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-20</donation_date></donor>
    <donor><name>Ajay</name><amount>50</amount><contact>9835462752</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-20</donation_date></donor>
    <donor><name>Vishal</name><amount>50</amount><contact>9956342312</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Saurabh</name><amount>50</amount><contact>9545221178</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Vikki</name><amount>50</amount><contact>8832109201</contact><payment_method>UPI</payment_method><address>Bengra</address><donation_date>2025-03-23</donation_date></donor>
    <donor><name>Shivam</name><amount>50</amount><contact>8744213023</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-23</donation_date></donor>
    <donor><name>Unknown</name><amount>200</amount><contact>7844210129</contact><payment_method>UPI</payment_method><address>N/A</address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Sagar</name><amount>50</amount><contact>7632118943</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-27</donation_date></donor>
    <donor><name>Sarthak</name><amount>50</amount><contact>9287562190</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-28</donation_date></donor>
    <donor><name>Gaurav</name><amount>50</amount><contact>9634012039</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-29</donation_date></donor>
    <donor><name>Sachin</name><amount>50</amount><contact>8834021245</contact><payment_method>UPI</payment_method><address>Shivnagar</address><donation_date>2025-03-30</donation_date></donor>
    <donor><name>Ayush</name><amount>50</amount><contact>7843923456</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-03-30</donation_date></donor>
  </month>
<month name="February 2025">
<donor>
    <name>Pratyush</name>
    <amount>50</amount>
    <contact>9354231491</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
  <donor>
    <name>Rahul</name>
    <amount>50</amount>
    <contact>7487231491</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
  <donor>
    <name>Ajay</name>
    <amount>50</amount>
    <contact>8102395350</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Saurav</name>
    <amount>50</amount>
    <contact>9608814088</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Monu</name>
    <amount>50</amount>
    <contact>7250814683</contact>
    <payment_method>UPI</payment_method>
    <address>Rahika</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Balmukund</name>
    <amount>50</amount>
    <contact>7635030162</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Shubham</name>
    <amount>50</amount>
    <contact>9354716138</contact>
    <payment_method>UPI</payment_method>
    <address>Delhi</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Sachin</name>
    <amount>50</amount>
    <contact>7061423688</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Hira</name>
    <amount>50</amount>
    <contact>6299805680</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Ricky</name>
    <amount>50</amount>
    <contact>8271872623</contact>
    <payment_method>UPI</payment_method>
    <address>Basaith</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Vishal</name>
    <amount>50</amount>
    <contact>9608887282</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Pawan</name>
    <amount>50</amount>
    <contact>9718304840</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Puchu</name>
    <amount>50</amount>
    <contact>9065934621</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Sagar</name>
    <amount>50</amount>
    <contact>7292838377</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Sudhir</name>
    <amount>50</amount>
    <contact>9934838377</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Krishi</name>
    <amount>50</amount>
    <contact>8986838377</contact>
    <payment_method>UPI</payment_method>
    <address>Giridih</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name> Shahibgtullah</name>
    <amount>50</amount>
    <contact>8845905612</contact>
    <payment_method>UPI</payment_method>
    <address> Trimuhan</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Satyam</name>
    <amount>50</amount>
    <contact>934567890</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Ajit</name>
    <amount>150</amount>
    <contact>9262220378</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Anil</name>
    <amount>50</amount>
    <contact>7295605612</contact>
    <payment_method>UPI</payment_method>
    <address>Basaith</address>
    <donation_date>2025-02-15</donation_date>
  </donor>
  <donor>
    <name>Abhishek</name>
    <amount>100</amount>
    <contact>9102187147</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-19</donation_date>
  </donor>
  <donor>
    <name>Chandan</name>
    <amount>150</amount>
    <contact>7352231491</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
  <donor>
    <name>Ayush</name>
    <amount>50</amount>
    <contact>8976453201</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-02-15</donation_date>
  </donor>
  <donor>
    <name>Sachin</name>
    <amount>50</amount>
    <contact>7033192746</contact>
    <payment_method>UPI</payment_method>
    <address>Shivnagar</address>
    <donation_date>2025-02-15</donation_date>
  </donor>
  <donor>
    <name>Shushant</name>
    <amount>50</amount>
    <contact>7295905612</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-25</donation_date>
  </donor>
  <donor>
    <name>Wikki</name>
    <amount>50</amount>
    <contact></contact>
    <payment_method>UPI</payment_method>
    <address>Giridihi</address>
    <donation_date>2025-02-26</donation_date>
  </donor>
  
</month>
<month name="January 2025">
  <donor>
    <name>Unknown</name>
    <amount>500</amount>
    <contact>N/A</contact>
    <payment_method>UPI</payment_method>
    <address>N/A</address>
    <donation_date>2025-01-15</donation_date>
  </donor>
  <donor>
    <name>Ayush</name>
    <amount>50</amount>
    <contact>9122912632</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-01-10</donation_date>
  </donor>
  <donor>
    <name>Sachin</name>
    <amount>50</amount>
    <contact>7033192746</contact>
    <payment_method>UPI</payment_method>
    <address>Shivnagar</address>
    <donation_date>2025-01-12</donation_date>
  </donor>
</month>
<month name="December 2024">
  <donor>
                <name>Vikram</name>
                <amount>50</amount>
                <contact>9065321485</contact>
                <payment_method>UPI</payment_method>
                <address>Giridih</address>
                <donation_date>2024-12-10</donation_date>
            </donor>
            <donor>
                <name>Puchu</name>
                <amount>50</amount>
                <contact>9065934621</contact>
                <payment_method>UPI</payment_method>
                <address>Giridih</address>
                <donation_date>2024-12-12</donation_date>
            </donor>
            <donor>
                <name>Sudhir</name>
                <amount>50</amount>
                <contact>9572325304</contact>
                <payment_method>UPI</payment_method>
                <address>Giridih</address>
                <donation_date>2024-12-14</donation_date>
            </donor>
            <donor>
                <name>Abhishek</name>
                <amount>50</amount>
                <contact>9102187147</contact>
                <payment_method>UPI</payment_method>
                <address>Giridih</address>
                <donation_date>2024-12-18</donation_date>
            </donor>
            <donor>
                <name>Bibhu</name>
                <amount>100</amount>
                <contact>7370007330</contact>
                <payment_method>UPI</payment_method>
                <address>Shahpur</address>
                <donation_date>2024-12-20</donation_date>
            </donor>
                <donor>
                    <name>Krishna</name>
                    <amount>50</amount>
                    <contact>9508405649</contact>
                    <payment_method>UPI</payment_method>
                    <address>Chanpura</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Gopal</name>
                    <amount>50</amount>
                    <contact>9693756343</contact>
                    <payment_method>UPI</payment_method>
                    <address>Chanpura</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Sarthak</name>
                    <amount>50</amount>
                    <contact>7061371120</contact>
                    <payment_method>UPI</payment_method>
                    <address>Giridih</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Ayush Kumar Chaudhary</name>
                    <amount>100</amount>
                    <contact>9122912632</contact>
                    <payment_method>UPI</payment_method>
                    <address>Chanpura</address>
                <donation_date>2025-01-31</donation_date>
                </donor>
                <donor>
                    <name>Sachin kumar Jha</name>
                    <amount>50</amount>
                    <contact>7033192746</contact>
                    <payment_method>UPI</payment_method>
                    <address>Shivnagar</address>
                <donation_date>204-12-02</donation_date>
                </donor>
</month>
</donations>
`;

// Function to display current month donations
function displayCurrentMonthDonations(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const months = xmlDoc.getElementsByTagName("month");
  
  if (months.length === 0) return;
  
  const currentMonth = months[0]; // Assuming first month is current
  const donors = currentMonth.getElementsByTagName("donor");
  let output = '';
  
  for (let i = 0; i < donors.length; i++) {
    const donor = donors[i];
    const name = donor.getElementsByTagName("name")[0].textContent;
    const amount = donor.getElementsByTagName("amount")[0].textContent;
    const contactNode = donor.getElementsByTagName("contact")[0];
    const contact = contactNode && contactNode.textContent.trim() !== "" ? contactNode.textContent : "N/A";
    const paymentMethod = donor.getElementsByTagName("payment_method")[0].textContent;
    const address = donor.getElementsByTagName("address")[0].textContent;
    const donationDate = donor.getElementsByTagName("donation_date")[0].textContent;

    output += `
      <tr class="donor-row">
        <td class="donor-name">${name}</td>
        <td>₹${amount}</td>
        <td class="mobile-number">${contact}</td>
        <td>${paymentMethod}</td>
        <td>${address}</td>
        <td>${donationDate}</td>
      </tr>
    `;
  }
  
  document.getElementById("currentMonthDonations").innerHTML = output;
}

// Function to display previous month donations (modified to skip April)
function displayPreviousMonthDonations(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const months = xmlDoc.getElementsByTagName("month");

  let output = '';
  // Start from index 1 to skip the first month (April)
  for (let i = 1; i < months.length; i++) {
    const monthName = months[i].getAttribute("name");
    output += `<tr class="month-header"><td colspan="6" style="text-align:center; background-color:#f8f9fa; font-weight:bold;">${monthName}</td></tr>`;

    const donors = months[i].getElementsByTagName("donor");
    for (let j = 0; j < donors.length; j++) {
      const donor = donors[j];
      const name = donor.getElementsByTagName("name")[0].textContent;
      const amount = donor.getElementsByTagName("amount")[0].textContent;
      const contactNode = donor.getElementsByTagName("contact")[0];
      const contact = contactNode && contactNode.textContent.trim() !== "" ? contactNode.textContent : "N/A";
      const paymentMethod = donor.getElementsByTagName("payment_method")[0].textContent;
      const address = donor.getElementsByTagName("address")[0].textContent;
      const donationDate = donor.getElementsByTagName("donation_date")[0].textContent;

      output += `
        <tr class="donor-row">
          <td class="donor-name">${name}</td>
          <td>₹${amount}</td>
          <td class="mobile-number">${contact}</td>
          <td>${paymentMethod}</td>
          <td>${address}</td>
          <td>${donationDate}</td>
        </tr>
      `;
    }
  }

  document.getElementById("previousMonthDonations").innerHTML = output;
}
// Function to search donors
function searchDonor() {
  const input = document.getElementById("search").value.toLowerCase();
  const rows = document.querySelectorAll("#previousMonthDonations .donor-row");
  const monthHeaders = document.querySelectorAll("#previousMonthDonations .month-header");

  let anyMatch = false;
  
  // First hide all rows
  rows.forEach(row => {
    row.style.display = "none";
  });
  
  // Then show matching rows and their month headers
  rows.forEach(row => {
    const name = row.querySelector(".donor-name").textContent.toLowerCase();
    if (name.includes(input)) {
      row.style.display = "";
      anyMatch = true;
      // Show the month header for this row
      let prev = row.previousElementSibling;
      while (prev && prev.classList.contains("month-header")) {
        prev.style.display = "";
        prev = prev.previousElementSibling;
      }
    }
  });
  
  // If no matches, show all month headers
  if (!anyMatch) {
    monthHeaders.forEach(header => {
      header.style.display = "";
    });
  }
}

// Function to mask mobile numbers
function maskMobileNumbers() {
  const mobileCells = document.querySelectorAll(".mobile-number");
  
  mobileCells.forEach(cell => {
    const text = cell.textContent.trim();
    if (/^\d{10}$/.test(text)) {
      const visible = text.slice(0, 4);
      const masked = text.slice(4).replace(/\d/g, "•");
      cell.textContent = `${visible}${masked}`;
      cell.title = "Click to reveal full number";
      cell.style.cursor = "pointer";
      
      cell.addEventListener("click", function() {
        if (this.textContent.includes("•")) {
          this.textContent = text;
        } else {
          this.textContent = `${visible}${masked}`;
        }
      });
    }
  });
}

// Load data when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  displayCurrentMonthDonations(xmlData);
  displayPreviousMonthDonations(xmlData);
  maskMobileNumbers();
});