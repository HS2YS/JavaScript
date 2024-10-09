function showList() {
    let items = ["принтер","барабан","гитара","скрипка","фитнес"];
    let ListElement = document.getElementById("ItemList");
    ListElement.innerHTML = "";
    
    for (let i = 0; i < items.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = items[i];
        ListElement.appendChild(listItem);
    }
}
function showNumbers() {
    let numberList = "";
    let i = 1;
    while (i <= 20) {
        if (i % 2 === 0) {
        numberList += i + " ";
        i++;
        }
        else {
            numberList += "";
            i++;
        }
    }
    document.getElementById("NumberList").innerText = numberList;
}
function CreateTable() {
    let thead = ["устройства","инструменты","инструменты","инструменты","услуги"]
    let items = ["принтер","барабан","гитара","скрипка","фитнес"];
    let ListElement = document.getElementById("TableList");
    ListElement.innerHTML = "";

    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");

    let headerRow = document.createElement("tr");
    for (let i = 0; i < thead.length; i++) {
        let theadList = document.createElement("th");
        theadList.innerText = thead[i];
        headerRow.appendChild(theadList);
    }
    tableHead.appendChild(headerRow);

    for (let i = 0; i < items.length; i++) {
        let bodyRow = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = items[i];
        bodyRow.appendChild(td);
        tableBody.appendChild(bodyRow);
    }
    ListElement.appendChild(tableHead);
    ListElement.appendChild(tableBody);
}
