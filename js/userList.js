let UserStorage = [];

function ShowMeUser() {
    let PeopleName = document.getElementById("NameInput").value;
    let PeopleAge = parseInt(document.getElementById("AgeInput").value);
    let PeopleCity = document.getElementById("CityInput").value;

    UserStorage.push({
        name: PeopleName,
        age: PeopleAge,
        city: PeopleCity
    });

    let listElement = document.getElementById("showmeuser");
    listElement.innerHTML = "";

    for (i = 0; i < UserStorage.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = `Имя: ${UserStorage[i].name}, Возраст: ${UserStorage[i].age}, Город: ${UserStorage[i].city}`
        listElement.appendChild(listItem);

    }; 
}