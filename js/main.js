// dialog

function userDialog() {
    let userName = prompt("Введіть ваше ім'я:");

    if (userName) {
        alert(`Привіт, ${userName}! Як справи?`);

        let response;
        do {
            response = prompt("Як ви себе почуваєте?");
            if (response === "добре") {
                alert("Це чудово! Продовжуйте так!");
            } else if (response === "погано") {
                alert("Не переймайтесь, усе налагодиться!");
            } else {
                alert("Вибачте, я не зрозумів вашу відповідь. Спробуйте ще раз.");
            }
        } while (response !== "добре" && response !== "погано");
    } else {
        alert("Будь ласка, введіть ваше ім'я для початку діалогу.");
    }
}

// developerInfo
function showDeveloperInfo(firstName, lastName, position = "Web developer") {
    alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}


//порівняння двох рядків
function compare(){
    let a, b;

    do {
        a = prompt("Введіть перше число для порівняння:");
        // Перевіряємо, чи введено число, і чи не є введення пустим рядком чи не числом
    } while(a === null || a.trim() === "" || isNaN(a));

    do {
        b = prompt("Введіть друге число для порівняння:");
    } while(b === null || b.trim() === "" || isNaN(b));
    if(a > b) {
        alert(a);
    } else if(a < b) {
        alert(b);
    } else {
        alert("Числа рівні.");
    }}

// task 2.1
function changeBackground(color){
    document.body.style.backgroundColor = color; // Змініть колір, якщо потрібно

    setTimeout(function() {
        document.body.style.backgroundColor = ""; // Повернення фону за замовчуванням
    }, 30000); // 30000 мілісекунд = 30 секунд
}

// task 2.2
function redirectEpic() {
    setTimeout(function() {
        location.href = "https://store.epicgames.com/en-US/";
    }, 1000);
}

// task 2.3
function redirectSteam() {
    let redirectLink = document.getElementById("steamLink")
    redirectLink.href = "https://store.steampowered.com"
}

// task 2.4
function HNselect(){
    let gameContainers = document.querySelectorAll('.HN');
    // Проходимо по кожному знайденому елементу і змінюємо його текст
    gameContainers.forEach(function(HN) {
        HN.textContent = "HOME"
    });
}

// task 2.5
function changeHTML() {
    let prediction = document.getElementById('prediction');

    // innerHTML: заміна вмісту елементу
    prediction.innerHTML = '<p>Ти <strong>сильний</strong> і все зможеш.</p>';

    // outerHTML: заміна елементу цілком
    prediction.outerHTML = '<div id="newPrediction"><p>Проведи час з друзями в улюбленій грі.</p></div>';

    // nodeValue / data: працює для текстових вузлів
    let textNode = document.createTextNode('У тебе все налагодиться!');
    console.log(textNode.nodeValue);

    // textContent: заміна текстового вмісту елементу
    let paragraph = document.querySelector('#newPrediction p');
    paragraph.textContent = 'Завтра на тебе чекає приємний сюрприз';
}
// task 2.6
function newRealise() {
    // Додавання заголовка
    var newHeading = document.createElement("h2");
    var headingText = document.createTextNode("Нові релізи");
    newHeading.appendChild(headingText);
    var contentDiv = document.getElementById("newTrends");
    contentDiv.prepend(newHeading);
}
function newGame() {
    // Додавання нової гри до списку
    var newGame = document.createElement("li");
    var gameText = document.createTextNode("Minecraft");
    newGame.appendChild(gameText);
    var gamesList = document.getElementById("gamesList");
    gamesList.append(newGame);
}
function deleteGame() {
    // Видалення гри зі списку
    var fortniteGame = gamesList.getElementsByTagName("li")[0];
    fortniteGame.remove();
}
function changeGame() {
    // Заміна назви гри
    var lolGame = gamesList.getElementsByTagName("li")[0];
    var newGameName = document.createTextNode("Dota 2");
    lolGame.replaceWith(newGameName);
}
function addLink() {
    // Додавання посилання після списку ігор
    var steamLink = document.createElement("a");
    steamLink.href = "https://store.steampowered.com/";
    steamLink.textContent = "Перейти на Steam";
    gamesList.after(steamLink);
}

//LAB 7
function firstClick() {
    let gameContainers = document.querySelectorAll('.HN');
    // Проходимо по кожному знайденому елементу і змінюємо його текст
    gameContainers.forEach(function(HN) {
        HN.textContent = "FIRST"
    })
}

function secondClick(event) {
    let gameContainers = document.querySelectorAll('.HN');
    // Проходимо по кожному знайденому елементу і змінюємо його текст
    setTimeout(function() {
    gameContainers.forEach(function(HN) {
        HN.textContent = "SECOND"
    })},3000);
}
function handleEvent(event) {
    alert("Елемент на якому спрацював EventListener: " + event.currentTarget)
    redirectEpic();
}

function menuHandler(event) {
    if (event.target.tagName === "BUTTON") {
        let action = event.target.dataset.action;

        // Викликаємо відповідний метод в залежності від значення data-action
        switch (action) {
            case "gameOfWeek":
                game()
                break;
            case "greatPrice":
                greatPrice();
                break;
            case "changeBackground":
                changeBackground('plum');
                break;
            default:
                alert("Невідома дія");
        }
    }
}

function game() {
    alert("Гра тижня: Content Warning")
}

function greatPrice() {
    alert("Phasmophobia\nБільше знижок: https://store.steampowered.com/specials#tab=TopSellers")
}
