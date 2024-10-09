function showMessage() {
    let UserName = document.getElementById("NameInput").value;
    let UserAge = parseInt(document.getElementById("AgeInput").value);
    let UserCity = document.getElementById("CityInput").value;

    if (UserName === "" || isNaN(UserAge) || UserCity === "") {
        document.getElementById("message").innerText = "Не, тут надо заполнить все поля, иначе никак : )";
        return;
    }

    let message = `Привет, это ${UserName}, мне ${UserAge} лет(годиков)! Я из г. ${UserCity}. `;

    if (UserAge < 18) {
        message = "У нас тут 18+ контент намечается, так нельзя.";
    } else if (UserAge >= 18 && UserAge <= 30) {
        message += "Вам больше 18, круто!";
    } else {
        message += "Вы слишком старый(ая)!";
    }

    if (UserName === "Фео" || UserName === "Феодосия") {
        message += " О, дорогая, привет! :) Люблю, целую, не грусти там, пон?";
    }
    document.getElementById("message").innerText = message;
}
