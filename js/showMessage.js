function showMessage() {
    let UserName = document.getElementById("NameInput").value;
    let UserAge = parseInt(document.getElementById("AgeInput").value);
    let UserCity = document.getElementById("CityInput").value;

    if (UserName.trim() === "" || !/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(UserName)) {
        document.getElementById("message").innerText = "Введите корректное имя пользователя, вы вводите свое имя, а не никнейм : )";
        return;
    };
    if (UserCity.trim() === "" || !/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(UserCity)) {
        document.getElementById("message").innerText = "Город должен содержать буквы";
        return;
    };
    if (isNaN(UserAge) || UserAge <= 0) {
        document.getElementById("message").innerText = "Не п%;№е, Ваш возраст не может быть меньше или равен 0."
        return;
    };
    if (UserCity.trim() === "") {
        document.getElementById("message").innerText = "Вы что, не нигде не живете?"
        return;
    };

    let message = `Привет, это ${UserName}, мне ${UserAge}! Я из г. ${UserCity}. `;

    if (UserAge < 18) {
        message = "У нас тут 18+ контент намечается, поменяйте его на 18+, чтобы мы сняли с себя ответственность.";
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
