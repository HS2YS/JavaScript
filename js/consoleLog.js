function increaseAges() {
    let ages = [21, 25, 30, 20];
    let newAges = ages.map(age => age + 1);

    console.log(newAges);
}
increaseAges();

function filterOlderPeople(){
    let people = [
        {name: "Владимир", age: "21"},
        {name: "Анна", age: "25"},
        {name: "Иван", age: "30"},
        {name: "Феодосия", age: "20"}
    ];

    let olderPeople = people.filter(person => person.age >= 25);

    console.log(olderPeople);
};
filterOlderPeople();

function sumAge() {
    let ages = [21, 25, 30, 20];
    let totalAge = ages.reduce((sum, age) => sum + age, 0);

    console.log(totalAge);
};

sumAge();