let teamDalida = {
    players: [],
    isBeaten: false
};

const addPlayer = (...players) => {
    for (let i = 0; i < players.length; i++) {
        if (!players[i].rating) {
            players[i].rating = 80;
        }
        teamDalida.players.push(players[i]);
    }
};

const iP = function (player) {
    console.log(`Here is ${player.name} with ${player.rating} rating!`);
}

export {addPlayer};
export {iP as introPlayer};
export default teamDalida;
