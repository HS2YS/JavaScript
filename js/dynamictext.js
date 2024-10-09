function changeText(newText) {
    document.getElementById("dynamicText").innerText = newText;
}

let hoverButton = document.getElementById("hoverButton");
hoverButton.addEventListener("mouseover",function() {
    document.getElementById("hoverText").innerText = "Ты навел на кнопку, удивительно!";
});

hoverButton.addEventListener("mouseout", function(){
    document.getElementById("hoverText").innerText = "";
});

let doubleClick = document.getElementById("doubleClick");
doubleClick.addEventListener("dblclick", function() {
    document.getElementById("DoubleText").innerText = "Шо ты тычишь?";
});
let focusHolder = document.getElementById("focusholder");
focusHolder.addEventListener("focus", function() {
    document.getElementById("focusText").innerText = "Ооо да, заполни меня всю!";
});
focusHolder.addEventListener("change", function() {
    document.getElementById("focusText").innerText = "Нет, не изменяй меня!";
});
function Calculator(){
    let a = parseInt(document.getElementById("CalcNum1").value);
    let b = parseInt(document.getElementById("CalcNum2").value);
    let sum = a + b;
    let CalcText = `Сумма чисел равна ${sum}`;

    document.getElementById("CalcText").innerText = CalcText;  
}

