function showPersonInfo() {
    let person = {
        name: "Владимир",
        age: "21",
        city: "Москва",
        hobby: "Игры"
    };

    let personText = `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}, Хобби: ${person.hobby}`;
    document.getElementById("personInfo").innerText = personText;
};
function showPeopleList() {
    let people = [
        {name: "Владимир", age: 21, city: "Москва", prof: "Бизнес-аналитик", hobby: "Игры" },
        {name: "Анна", age: 25, city: "Санкт-Петербург", prof: "Музыкант", hobby: "Музыка, Творчество" },
        {name: "Иван", age: 30, city: "Казань", prof: "Таксист", hobby: "Кондитер" },
        {name: "Феодосия", age: 20, city: "Москва", prof: "Веб-дизайнер", hobby: "Творчество" }
    ];

    let listElement = document.getElementById("peopleList");
    listElement.innerHTML = "";

    for (let i = 0; i < people.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = `Имя: ${people[i].name}, Возраст: ${people[i].age}, Город: ${people[i].city}, Профессия: ${people[i].prof}, Хобби: ${people[i].hobby}`;
        listElement.appendChild(listItem);
    }
}

let NewPeople = [];

function addNewPeopleList() {
    let PeopleName = document.getElementById("PeopleName").value;
    let PeopleAge = parseInt(document.getElementById("PeopleAge").value);
    let PeopleCity = document.getElementById("PeopleCity").value;
    let PeopleProf = document.getElementById("PeopleProf").value;
    let PeopleHobby = document.getElementById("PeopleHobby").value;

    NewPeople.push({
        name: PeopleName, 
        age: PeopleAge, 
        city: PeopleCity,
        prof: PeopleProf, 
        hobby: PeopleHobby
    });
};

function ShowNewPeopleList() {
    let listElement = document.getElementById("NewPeopleList")
    listElement.innerHTML = "";

    for (i = 0; i < NewPeople.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = `Имя: ${NewPeople[i].name}, Возраст: ${NewPeople[i].age}, Город: ${NewPeople[i].city}, Профессия: ${NewPeople[i].prof}, Хобби: ${NewPeople[i].hobby}.` ;
        listElement.appendChild(listItem);
    }
};
function HelloPeople() {
    let listElement = document.getElementById("HelloPeopleText");
    listElement.innerHTML = "";

    let helloPeople = NewPeople.map(person => `Салам, ${person.name}`);
    
    for (i = 0; i < helloPeople.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = helloPeople[i];
        listElement.appendChild(listItem);
        }
};
function FilterPeople() {
    let listElement = document.getElementById("FilterPeopleText");
    listElement.innerHTML = "";

    let filterPeople = NewPeople.filter(search => search.city === "Москва");

    for (i = 0; i < filterPeople.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = `${filterPeople[i].name} - москвич(ка)`;
        listElement.appendChild(listItem);
    }
};
function SumAges() {
    let listElement = document.getElementById("SumAgesText");
    listElement.innerHTML = "";

    let SumAges = NewPeople.reduce((sum, totalAges) => sum + totalAges.age, 0);

    listElement.innerText = SumAges;
};
