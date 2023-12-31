let bookBtn = document.getElementById("bookBtn");
let resetBtn = document.getElementById("resetBtn");
//v0 // let result = document.getElementById("result");

let prices = [120, 80, 40];
let roomTypes = ["Sea View", "Second Sea View", "Garden View"];

resetBtn.onclick = function() {
    customerName.value = "";
    fromDate.value = "";
    toDate.value = "";
    roomType.value = "";
    totalRoom.value = "";
}

bookBtn.onclick = function() {
    let name = document.getElementById("customerName").value;
    let fDate = document.getElementById("fromDate").value;
    let tDate = document.getElementById("toDate").value;
    let typeIndex = document.getElementById("roomType").value;
    let type = roomTypes[typeIndex - 1];
    let room = document.getElementById("totalRoom").value;
 
    let price = 0;

    if (typeIndex == 1) {
        price = prices[0] * room;
    }
    else if (typeIndex == 2) {
        price = prices[1] * room;
    }
    else if (typeIndex == 3) {
        price = prices[2] * room;
    }

    //v0 // result.innerHTML = name + " " + type + " " + room + " " + price;
    displayQuotation(name, fDate, tDate, type, room, price);
}

function displayQuotation(name, fdate, tdate, type, room, price) {
    let quoteTable = document.getElementById("quoteTable");
    let row = quoteTable.insertRow(-1);

    let nameCell = row.insertCell(0);
    let fDateCell = row.insertCell(1);
    let tDateCell = row.insertCell(2);
    let typeCell = row.insertCell(3);
    let roomCell = row.insertCell(4);
    let priceCell = row.insertCell(5);

    nameCell.textContent = name;
    fDateCell.textContent = fdate;
    tDateCell.textContent = tdate;
    typeCell.textContent = type;
    roomCell.textContent = room;
    priceCell.textContent = "$" + price.toFixed(2);
}

// durationInMilliseconds = toDate - fromDate;
// durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24)
    // 1000milliseconds/second × 60seconds/minute × 60minutes/hour × 24hours/day