const startGame = function () {

    // Object one, Game Board

    const gameBoard = function () {
        let gameTiles = ["", "", "", "", "", "", "", "", ""];
        return { gameTiles };
    }

    // Object two, Player 1

    const player1 = function (name) {
        const p1Name = name;
        // const p1x = x;
        const TileArray = [];
        // const player1Choice = ph;
        return { p1Name, TileArray};
    }

    // Object two, Player 2

    const player2 = function (name) {
        const p2Name = name;
        // const p2x = o;
        const TileArray = []
        // const player2Choice = PH
        return { p2Name, TileArray};
    }

    // Object four, Game Logic

    const gameLogic = function (gb, p1, p2) {

        // Logic to define a turn, and whos turn it is.
        let playerTurn = p1;

        // Start game in a Non-Won state condition
        let aPlayerWon = false

        while (aPlayerWon != true) {
            let playerInput;
            if (playerTurn == player1) {
                playerInput = "X";
            } else { playerInput = "O"; };

            // Logic to get a players selection (Don't know if this should be in player object)
            // let playerTileChoice = parseInt(prompt("Pick a tile"))

            // Logic to check if a game tile is empty, or otherwise 'pick again'
            if (gb.gameTiles[playerTileChoice] === "") {
                
                // Put a players mark on it if it is
                gb.gameTiles[playerTileChoice] = playerInput.toString();

                // Logic to push players new tile to their array of tiles
                playerTurn.TileArray.push(playerTileChoice);
            } else {
                console.log('pick again')
            }

            // Logic to check if the players array of tiles has a winnign combination
            let checkForWin = function (player1, player2) {
                const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
                winningCombos.forEach(combo => {
                    let set1 = new Set(combo)
                    let set2 = new Set(p1.TileArray)
                    let winScore = 0;

                    for (let item of set1) {
                        
                        if (set2.has(item)) {
                            winScore++;
                            // console.log(set2)
                            // console.log(winScore)
                        }
                        if (winScore === 3){ 
                            console.log('player 1 won')
                            aPlayerWon = true;
                            break;
                        }
                        
                    }
                });

                winningCombos.forEach(combo => {    
                    let set1 = new Set(combo)
                    let set2 = new Set(p2.TileArray)
                    let winScore = 0;

                    for (let item of set1) {
                        
                        if (set2.has(item)) {
                            winScore++;                            
                            // console.log(set2)
                        }
                        if (winScore === 3){ 
                            console.log('player 2 won')
                            aPlayerWon = true;
                            break;
                        }                       
                    }
                });
            }

            checkForWin();

            // Switch turn logic
            playerTurn = playerTurn === p1 ? p2 : p1;

            console.log(p1.TileArray)
            console.log(p2.TileArray)
        }
    }

return {gameBoard, player1, player2, gameLogic}
}

let sGV = startGame();
let GB = sGV.gameBoard();
let p1 = sGV.player1('Suzie');
let p2 = sGV.player2('Mae');
let playGame = sGV.gameLogic(GB, p1, p2);



