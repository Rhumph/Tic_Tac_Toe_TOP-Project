const playGame = function () {

    const gameBoard = function () {
        let gameTiles = [];

        const getGameTiles = function () {
            console.log("hit it")
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
        
        return {createPlayer}
    };

    const game = function () { 
        
    }




    const mae = player().createPlayer("mae", "E");

    console.log(mae)

    let currentGame = gameBoard()

    currentGame.createGameTiles(9);

    console.log(currentGame)

    const gameTiles = currentGame.getGameTiles();

    gameTiles.forEach((tile) => {
        console.log(tile.getTileIndex());
    });
};

playGame();
