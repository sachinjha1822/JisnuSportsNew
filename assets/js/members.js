const members = {
      "JS-2506-0001": {
        name: "Sachin Jha",
        status: "Active",
        photo: "./asstes/images/members/member-1.jpg",
        joinDate: "12-Dec-2024",
        cardFront: "images/cards/Sachin-front.png",
        cardBack: "images/cards/Sachin-back.png"
      },
      "JS-2506-0002": {
        name: "Ayush Chaudhary",
        status: "Active",
        photo: "./asstes/images/members/member-2.jpg",
        joinDate: "02-Dec-2024",
        cardFront: "images/cards/ayush-front.png",
        cardBack: "images/cards/ayush-back.png"
      },
      "JS-2506-0003": {
        name: "Sudhir Kumar Rana",
        status: "Active",
        photo: "./asstes/images/members/member-3.jpg",
        joinDate: "31-Dec-2024",
        cardFront: "images/cards/sudhir-front.png",
        cardBack: "images/cards/sudhir-back.png"
      }
    };

    function verifyMember() {
      const input = document.getElementById("memberId").value.trim();
      const resultDiv = document.getElementById("result");

      if (members[input]) {
        const { name, status, photo, joinDate, cardFront, cardBack } = members[input];
        const statusColor = status === "Active" ? "green" : "red";

        resultDiv.innerHTML = `
          <div class="flex flex-col md:flex-row gap-6 items-start justify-center">

            <!-- Member Info -->
            <div class="flex gap-4 items-center md:w-1/2">
              <img src="${photo}" class="w-24 h-24 rounded-full border shadow" />
              <div>
                <p class="text-lg font-bold">${name}</p>
                <p class="text-sm text-gray-600">Member ID: ${input}</p>
                <p class="text-sm">Joined: ${joinDate}</p>
                <span class="inline-block mt-2 px-3 py-1 rounded-full text-white bg-${statusColor}-600 font-semibold text-xs">${status}</span>
              </div>
            </div>

            <!-- Flip Card -->
            <div class="card-flip" onclick="this.classList.toggle('flipped')" title="Click to flip">
              <div class="card-inner">
                <div class="card-front">
                  <img src="${cardFront}" alt="Card Front"/>
                </div>
                <div class="card-back">
                  <img src="${cardBack}" alt="Card Back"/>
                </div>
              </div>
            </div>

          </div>
        `;

        resultDiv.classList.remove("hidden");
      } else {
        resultDiv.innerHTML = `<p class="text-red-600 font-semibold">❌Member ID not found. Please try again.</p>`;
        resultDiv.classList.remove("hidden");
      }
    }
