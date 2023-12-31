let prices = [120, 80, 40];
let roomTypes = ["Sea View", "Second Sea View", "Garden View"];
let bookBtnValue = document.getElementById("bookBtn");

bookBtnValue.onclick = function() {
    let customerNameValue = document.getElementById("customerName").value;
    let dateInValue = document.getElementById("dateIn").value;
    let dateOutValue = document.getElementById("dateOut").value;
    let daysValue = document.getElementById("days").value;
    let roomTypeValue = document.getElementById("roomType").value;
    let roomType = roomTypes[roomTypeValue - 1];
    let roomsValue = document.getElementById("rooms").value;
    
    let price = 0;

    if (roomTypeValue == 1) {
        price = prices[0] * daysValue * roomsValue;
    }
    else if (roomTypeValue == 2) {
        price = prices[1] * daysValue * roomsValue;
    }
    else if (roomTypeValue == 3) {
        price = prices[2] * daysValue * roomsValue;
    }

    displayQuotation(customerNameValue, dateInValue, dateOutValue, roomType, roomsValue, price);
}

function displayQuotation(name, dateIn, dateOut, type, room, price) {
    let quoteTable = document.getElementById("quoteTable");
    let row = quoteTable.insertRow(-1);

    let nameCell = row.insertCell(0);
    let dateInCell = row.insertCell(1);
    let dateOutCell = row.insertCell(2);
    let typeCell = row.insertCell(3);
    let roomCell = row.insertCell(4);
    let priceCell = row.insertCell(5);

    nameCell.textContent = name;
    dateInCell.textContent = dateIn;
    dateOutCell.textContent = dateOut;
    typeCell.textContent = type;
    roomCell.textContent = room;
    priceCell.textContent = "$" + price.toFixed(2);
}