import {addPlayer} from "./functions.mjs";
import {introPlayer as introducePlayer} from "./functions.mjs";
import teamDalida from "./functions.mjs";


teamDalida["budget"] = teamDalida.isBeaten ? 3000 : 10000;

console.log(teamDalida);

delete teamDalida.isBeaten;

console.log(teamDalida);

let teamName;

teamDalida.name = teamName ?? "FC Dalida";

const playerOne = {
    name: "Mason Mount",
    age: 23,
    weight_kg: 70,
    height_m: 1.75,
};

const playerTwo = {
    name: "Trent Alexander-Arnold",
    age: 24,
    weight_kg: 71,
    height_m: 1.73,
    rating: 99
};

const playerThree = {
    name: "Jude Bellingham",
    age: 18,
    weight_kg: 72,
    height_m: 1.82,
    rating: 99
};

const playerFour = {
    name: "Bukayo Saka",
    age: 21,
    weight_kg: 73,
    height_m: 1.70,
    rating: 83
};

const playerFive = {
    name: "Jamal Musiala",
    age: 19,
    weight_kg: 65,
    height_m: 1.78,
};


addPlayer(playerOne, playerTwo, playerThree, playerFour, playerFive);

console.log(teamDalida.players);

const {name, age, rating} = playerOne;

teamDalida.upgradePlayers = function () {
    teamDalida.players.map((player) => { 
        if (player.rating<98) {
            player.rating++;
        }
    });
};

teamDalida.upgradePlayers();
console.log(teamDalida);

const imbaPlayers = teamDalida.players.filter((player) => player.rating >= 99);
console.log(imbaPlayers);

teamDalida.players.forEach(introducePlayer);