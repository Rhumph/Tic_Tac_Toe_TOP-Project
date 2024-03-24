const playGame = function () {

    const gameBoard = function () {
        let gameTiles = [];

        const getGameTiles = function () {
            
            return gameTiles;
        };

        const createGameTiles = function (numberOfTiles) {
            for (let index = 0; index < numberOfTiles; index++) {
                const newTile = createGameTile();
                newTile.setTileIndex(index);
                gameTiles.push(newTile);
            }
            return
        };

        const createGameTile = function () {

            let currentTilevariable = "";
            let tileIndex = 0;

            const setTileVariable = function (inputVariable) {
                currentTilevariable = inputVariable;
            };

            const getTileVariable = function () {
                return currentTilevariable;
            };

            const setTileIndex = function (index) {
                tileIndex = index;
            };

            const getTileIndex = function () {
                return tileIndex;
            };

            const alterGameTile = function () { };

            return {
                currentTilevariable,
                setTileVariable,
                getTileVariable,
                setTileIndex,
                getTileIndex,
                createGameTile,
                createGameTiles,
                alterGameTile
            };
        }
        return { getGameTiles, createGameTiles, createGameTile };
    };

    const player = function () {

        const createPlayer = function (name, inputVariable) {
            return { name, inputVariable };
        };

        return { createPlayer }
    };

    const game = function (player1, player2) {

        let currentPlayerTurn = player1;

        function switchTurn() {
            currentPlayerTurn = currentPlayerTurn === player1 ? player2 : player1;
            return currentPlayerTurn
        }

        function getPlayerTurn () { 
            return currentPlayerTurn;
        }

        // Need to make something that checks for a win state at the end of each turn
        

        // Need to make soemthing that defines a win state

        // Need to make something that takes the player's click and put's the players variable on the tile  

        return {switchTurn, getPlayerTurn}
    }




    const mae = player().createPlayer("Mae", "M");
    const yennifer = player().createPlayer("Yennifer", "Y");

    let currentGame = gameBoard()

    currentGame.createGameTiles(9);

    const gameTiles = currentGame.getGameTiles();

    const playerTurn = game(mae, yennifer);

    playerTurn.switchTurn();

    // gameTiles.forEach((tile) => {
    //     console.log(tile.getTileIndex());
    // });
};

playGame();
