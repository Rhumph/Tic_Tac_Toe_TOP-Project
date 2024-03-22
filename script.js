const playGame = function () {

    const gameTiles = [];

    const createPlayer = function (name, inputVariable) {

        return { name, inputVariable }
    };

    const mae = createPlayer("mae", "E");

    const createGameTile = function () {

        // Game tiles will take a players inputVariable
        // Game tiles will need logic to know if it's 3 in a row

        const tileVariable = function () {

            let currentTilevariable = "";

            const setTileVariable = function (inputVariable) {
                currentTilevariable = inputVariable;
            };

            const getTileVariable  = function (){ 
                return (currentTilevariable)
            };

            return {currentTilevariable, setTileVariable, getTileVariable};

        }

    };

    const createGameTiles = function (numberOfTiles) { 
        for (let index = 0; index < numberOfTiles; index++) {
            gameTiles.push(createGameTile);
            
        }
    }

    const startGame = createGameTiles(9);

    console.log(gameTiles.length)
}();