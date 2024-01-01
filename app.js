// ERROR MESSAGE

let errMsgValue = document.getElementById("errorMessage");

function showError(message) {
    errMsgValue.textContent = message;
    errMsgValue.style.display = "block";
}

function clearError() {
    errMsgValue.textContent = "";
    errMsgValue.style.display = "none";
}

// CALCULATION

let prices = [120, 80, 40];
let roomTypes = ["Sea View", "Second Sea View", "Garden View"];

function dateDiffInDays(a, b) {  //accept Date objects as parameters
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function getDateInput (elementId) {
    let dataValue = new Date (document.getElementById(elementId).value);
    return isNaN (dataValue) ? null : dataValue;
}

document.getElementById("dateOut").onchange = function() {
    updateDuration();
}

function updateDuration() {
    let dateInValue = getDateInput("dateIn");
    let dateOutValue = getDateInput("dateOut");

    let daysValue = dateDiffInDays(dateInValue, dateOutValue);

    if (daysValue <= 0) {
        showError("Please enter valid dates. Check-out date must be after check-in date.");
        document.getElementById("days").value = "";
        return;
    }

    document.getElementById("days").value = daysValue;
    clearError();
}

let bookBtnValue = document.getElementById("bookBtn");
bookBtnValue.onclick = function() {
    
    let customerNameValue = document.getElementById("customerName").value;
    let dateInValue = getDateInput("dateIn");
    let dateOutValue = getDateInput("dateOut");
    let daysValue = document.getElementById("days").value;
    let roomTypeValue = document.getElementById("roomType").value;
    let roomsValue = document.getElementById("rooms").value;
    
    if (!customerNameValue || !dateInValue || !dateOutValue || !roomTypeValue || !roomsValue) {
        showError("Please enter all the required information.");
        return;
    }
    if (!daysValue) {
        showError("Check-out date must be after check-in date.");
        return;
    }
    
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

    displayQuotation(
        customerNameValue, 
        dateInValue.toLocaleDateString(),
        dateOutValue.toLocaleDateString(), 
        daysValue, 
        roomTypes[roomTypeValue - 1], 
        roomsValue, 
        price
    );    
    
    resetValues();
}

function displayQuotation(name, dateIn, dateOut, days, type, rooms, price) {
    let quoteTable = document.getElementById("quoteTable");
    let row = quoteTable.insertRow(-1);

    let nameCell = row.insertCell(0);
    let dateInCell = row.insertCell(1);
    let dateOutCell = row.insertCell(2);
    let daysCell = row.insertCell(3);
    let typeCell = row.insertCell(4);
    let roomsCell = row.insertCell(5);
    let priceCell = row.insertCell(6);

    nameCell.textContent = name;
    dateInCell.textContent = dateIn;
    dateOutCell.textContent = dateOut;
    daysCell.textContent = days;
    typeCell.textContent = type;
    roomsCell.textContent = rooms;
    priceCell.textContent = "$" + price.toFixed(2);
}

function resetValues() {
    document.getElementById("customerName").value = "";
    document.getElementById("dateIn").value = "";
    document.getElementById("dateOut").value = "";
    document.getElementById("days").value = "";
    document.getElementById("roomType").value = "";
    document.getElementById("rooms").value = "";    
    clearError();
}