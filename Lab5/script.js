const elementNames = ["name", "birth", "address", "email", "telegram"];
const regexDictionary = {};
regexDictionary["name"] = /^[А-ЯІЄЇ][а-яієї]+ [А-ЯІЄЇ]\.[А-ЯІЄЇ]\.$/;
regexDictionary["birth"] = /^\d{2}.\d{2}.\d{4}$/;
regexDictionary["address"] = /^м. \d{6}$/;
regexDictionary["email"] = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
regexDictionary["telegram"] = /^@\w+$/;

window.onload = function() {
    const container = document.getElementById("table-container");
    console.log("Table created");
    const table = document.createElement("table");
    table.className = "second-task-table";
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr"); // Create a table row

        for (let col = 0; col < 6; col++) {
            const td = document.createElement("td"); // Create a table cell
            td.className = "second-task-td";
            if(col === 5){
                td.classList.add("td-rect");
            }
            const cellNumber = row * 6 + col + 1;
            if(cellNumber === 6){
                td.id = "variant-td";
                td.addEventListener("mouseenter", function () {
                    td.style.backgroundColor = getRandomColor();
                });
                td.addEventListener('click', function() {
                    openColorPicker();
                });
                td.addEventListener("dblclick", function () {
                    changeColorInRectElements();
                });
            }
            td.textContent = `${cellNumber}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    container.appendChild(table);
}

function changeColorInRectElements(){
    const elements = document.getElementsByClassName("td-rect");
    const color = getRandomColor();
    for (const element of elements){
        element.style.backgroundColor = color;
    }
}

function openColorPicker() {
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.click();
}

function applyBackgroundColor(colorInput) {
    const color = colorInput.value;
    const tdElement = document.getElementById("variant-td");
    tdElement.style.backgroundColor = color;
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function chooseColor(element){

}

function validateAndShowInfo(){
    const validDictionary = {};
    const valueDictionary = {};
    elementNames.forEach(function (item){
        const inputEl = document.getElementById(item);
        const elValue = inputEl.value;
        const regEx = regexDictionary[item];
        validDictionary[item] = regEx.test(elValue);
        valueDictionary[item] = elValue;
    });
    const allValuesAreTrue = Object.values(validDictionary).every(value => value === true);
    if(allValuesAreTrue){
        elementNames.forEach(function (item){
            const dataEl = document.getElementById(item + "Field");
            dataEl.textContent = valueDictionary[item];
        });
    }
    else {
        elementNames.forEach(function (item){
            const isValid = validDictionary[item];
            if(isValid === false){
                const inputElement = document.getElementById(item);
                inputElement.setCustomValidity("Invalid input!");
                inputElement.classList.add("invalid");
            }
        });
    }
}

function clearInvalidClass(inputElement) {
    inputElement.classList.remove("invalid");
}