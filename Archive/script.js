const playGame = function () {


    const gameBoard = function () {
        let gameTiles = ['', '', '', '', '', '', '', '', '', 'yoi'];
        return gameTiles
    }

    // const gameBoard = function () {
    //     // ALternate way of doing array with no other functions let gameTiles = ['', '', '', '', '', '', '', '', ''];
    //     let gameTiles = [];

    //     const getGameTiles = function () {

    //         return gameTiles;
    //     };

    //     const createGameTiles = function (numberOfTiles) {
    //         for (let index = 0; index < numberOfTiles; index++) {
    //             const newTile = createGameTile();
    //             newTile.setTileIndex(index);
    //             gameTiles.push(newTile);
    //         }
    //         return
    //     };

    //     const createGameTile = function () {

    //         let currentTilevariable = "";
    //         let tileIndex = 0;

    //         const setTileVariable = function (inputVariable) {
    //             currentTilevariable = inputVariable;
    //         };

    //         const getTileVariable = function () {
    //             return currentTilevariable;
    //         };

    //         const setTileIndex = function (index) {
    //             tileIndex = index;
    //         };

    //         const getTileIndex = function () {
    //             return tileIndex;
    //         };

    //         const alterGameTile = function () { };

    //         return {
    //             currentTilevariable,
    //             setTileVariable,
    //             getTileVariable,
    //             setTileIndex,
    //             getTileIndex,
    //             createGameTile,
    //             createGameTiles,
    //             alterGameTile
    //         };
    //     }
    //     return { getGameTiles, createGameTiles, createGameTile };
    // };

    const player = function () {

        const createPlayer = function (name, inputVariable, playerNo) {
            return { name, inputVariable, playerNo };
        };

        return { createPlayer }
    };

    const game = function (player1, player2) {

        let winStateReached = false;

        while (winStateReached != true){

        let currentPlayerTurn = player1;
        let clickedOnTile = parseInt(prompt("enter tile number"))
        console.log(clickedOnTile);
        let player1Victory = false;
        let player2Victory = false;
        let gameTable = gameBoard.gameTiles;
        let player1Array = [];
        // console.log(player1Array);
        let player2Array = [];
        // console.log(player2Array);
        const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        function playerTurn(){


            // Clicklistener adding player mark to tile
            if (currentPlayerTurn == player2) {
                if (clickedOnTile == gameTiles[i]) {

                    if(gameTiles[i] == ''){
                        // This needs to be changed to add the tiles index in the array to the player array
                    player2Array.push(clickedOnTile[i]);

                    gameTiles[i] = player2.inputVariable
                    } 
                    else{ 
                        console.log('error')
                    }                   
                }
            }
            else {
                if (currentPlayerTurn == player1) {
                    if (clickedOnTile == gameTiles[i]) {

                        if(gameTiles[i] == ''){
                            // This needs to be changed to add the tiles index in the array to the player array
                        player1Array.push(clickedOnTile[i]);
    
                        gameTiles[i] = player1.inputVariable
                        }  
                        else{ 
                            console.log('error')
                        }                   
                    }

                }
            }

            // Check player win state


            currentPlayerTurn = currentPlayerTurn === player1 ? player2 : player1;
            console.log(currentPlayerTurn + currentPlayerTurn.selectedTileArr)
            return currentPlayerTurn
        }
    }

        function checkWinState() { }

        return { playerTurn }
    }




    // const mae = player().createPlayer("Mae", "M");
    // const yennifer = player().createPlayer("Yennifer", "Y");

    let currentGame = gameBoard()

    // currentGame.createGameTiles(9);

    // const gameTiles = currentGame.getGameTiles();

    const playerTurn = game(mae, yennifer);

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()

    // playerTurn.switchTurn();

    // playerTurn.setPlayerSelectedArr()


    // gameTiles.forEach((tile) => {
    //     console.log(tile.getTileIndex());
    // });
};

let gameO = playGame();
gameO.createPlayer("Mae", "M", 1);
gameO.createPlayer("Yennifer", "Y", 2)
