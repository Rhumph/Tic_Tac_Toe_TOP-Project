document.addEventListener('DOMContentLoaded', () => {
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
            return { p1Name, TileArray };
        }

        // Object two, Player 2

        const player2 = function (name) {
            const p2Name = name;
            // const p2x = o;
            const TileArray = []
            // const player2Choice = PH
            return { p2Name, TileArray };
        }

        // Object four, Game Logic

        const gameLogic = function (gb, p1, p2) {
            let playerTurn = p1;
            let aPlayerWon = false;

            // Set up event listeners for the buttons
            const buttons = document.querySelectorAll('.table-button');
            const winningPLayerName =
                buttons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        console.log('Pressed')
                        const selectedTileIndex = parseInt(e.target.parentElement.getAttribute('data-tile-index'));
                        if (gb.gameTiles[selectedTileIndex] === "" && !aPlayerWon) {
                            const playerInput = playerTurn === p1 ? "X" : "O";
                            gb.gameTiles[selectedTileIndex] = playerInput;
                            e.target.textContent = playerInput;
                            playerTurn.TileArray.push(selectedTileIndex);

                            checkForWin(p1, p2);

                            // Switch turn logic
                            playerTurn = playerTurn === p1 ? p2 : p1;
                        } else {
                            console.log('pick again');
                        }
                    });
                });

            // Logic to check if the players array of tiles has a winning combination
            const checkForWin = function (player1, player2) {
                const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

                const checkPlayerWin = (player) => {
                    for (const combo of winningCombos) {
                        if (combo.every(index => player.TileArray.includes(index))) {
                            aPlayerWon = true;
                            console.log(`${player.p1Name || player.p2Name} won!`);

                            const winnerDeclaration = document.createElement('h1')
                            winnerDeclaration.textContent = `${player.p1Name || player.p2Name} Has won`
                            const targetEle = document.getElementById('main-body')
                            targetEle.insertBefore(winnerDeclaration, targetEle.firstChild)
                            break;
                        }
                    }
                }

                checkPlayerWin(player1);
                checkPlayerWin(player2);
            }
        }

        return { gameBoard, player1, player2, gameLogic }
    }

    const preGameDetails = function () {

        const p1NameInput = document.getElementById('p1-name-input');
        const p2NameInput = document.getElementById('p2-name-input');

        p1NameInput.addEventListener('input', startGameIfReady);
        p2NameInput.addEventListener('input', startGameIfReady);

        function startGameIfReady() {
            const p1Name = p1NameInput.value.trim();
            const p2Name = p2NameInput.value.trim();

            if (p1Name !== '' && p2Name !== '') {
                let sGV = startGame();
                let GB = sGV.gameBoard();
                let p1 = sGV.player1(p1Name);
                let p2 = sGV.player2(p2Name);
                sGV.gameLogic(GB, p1, p2);
            }
        }
    }

    preGameDetails();

    const resetBtn = document.getElementById('game-reset-button');

    resetBtn.addEventListener('click', (e) => { 
        document.getElementById('p1-name-input').value = '';
        document.getElementById('p2-name-input').value = '';

        const buttons = document.querySelectorAll('.table-button');
        buttons.forEach(button => {
            button.textContent = '';
        });

        const winnerDeclaration = document.querySelector('#main-body h1');
        if (winnerDeclaration) {
            winnerDeclaration.remove();
        }

        preGameDetails();

        console.log('resetpressed')
    })
}

)