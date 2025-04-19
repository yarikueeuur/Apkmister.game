// Пример данных игр и взломанных игр
const games = [
    { name: "Игра 1", link: "https://example.com/game1" },
    { name: "Игра 2", link: "https://example.com/game2" },
    { name: "Игра 3", link: "https://example.com/game3" },
    // Добавь больше игр до 250
];

const hackedGames = [
    { name: "Взлом 1", link: "https://example.com/hacked_game1" },
    { name: "Взлом 2", link: "https://example.com/hacked_game2" },
    { name: "Взлом 3", link: "https://example.com/hacked_game3" },
    // Добавь больше взломов до 250
];

// Функция для отображения списка игр
function displayGames() {
    const gamesList = document.getElementById("gamesList");
    const hackedGamesList = document.getElementById("hackedGamesList");

    games.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `<a href="${game.link}" target="_blank">${game.name}</a>`;
        gamesList.appendChild(gameItem);
    });

    hackedGames.forEach(hackedGame => {
        const hackedGameItem = document.createElement("div");
        hackedGameItem.classList.add("game-item");
        hackedGameItem.innerHTML = `<a href="${hackedGame.link}" target="_blank">${hackedGame.name}</a>`;
        hackedGamesList.appendChild(hackedGameItem);
    });
}

// Функция для поиска игр
function searchGames() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
    const filteredHackedGames = hackedGames.filter(game => game.name.toLowerCase().includes(query));

    const gamesList = document.getElementById("gamesList");
    const hackedGamesList = document.getElementById("hackedGamesList");

    gamesList.innerHTML = '';
    hackedGamesList.innerHTML = '';

    filteredGames.forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `<a href="${game.link}" target="_blank">${game.name}</a>`;
        gamesList.appendChild(gameItem);
    });

    filteredHackedGames.forEach(hackedGame => {
        const hackedGameItem = document.createElement("div");
        hackedGameItem.classList.add("game-item");
        hackedGameItem.innerHTML = `<a href="${hackedGame.link}" target="_blank">${hackedGame.name}</a>`;
        hackedGamesList.appendChild(hackedGameItem);
    });
}

// Загружаем все игры при загрузке страницы
window.onload = displayGames;
