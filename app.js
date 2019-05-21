(() => {
    console.log("let's get it!");

    function init () {
        const DOM = {
          $currentPlayer: document.querySelector('.js-current-player'),
          $board: document.querySelector('.js-board'),
          $resetButton: document.querySelector('.js-reset'),
        };

        const SIZE = 3;
        function initialState() {
          return {
            boardModel: Array(SIZE).fill(null).map(_ => Array(SIZE).fill(null)),
            players: ['X', 'O'],
            currentPlayer: 0,
            gameEnded: false,
            turn: 0,
          };
        }
        // simple error fixed had variable set to var instead of let
        let state = initialState();
        function renderBoard() {
          DOM.$currentPlayer.textContent = state.players[state.currentPlayer];
          // Assuming SIZE > 0.
          DOM.$board.innerHTML = '';

          for (let i = 0; i < SIZE; i++) {
            const $row = document.createElement('div');
            $row.classList.add('board-row');

for (let j = 0; j < SIZE; j++) {
              const $cell = document.createElement('div');
              $cell.classList.add('board-cell');
              $cell.setAttribute('data-i', i);
              $cell.setAttribute('data-j', j);
              const $content  = document.createElement('span');
              $content.classList.add('content');
              $content.textContent = state.boardModel[i][j];
              $cell.appendChild($content);
              $row.appendChild($cell);
            }
            DOM.$board.appendChild($row);
          }
        }

        function checkWinning(board, player) {
            // Check horizontal.
            for (let i = 0; i < SIZE; i++) {
              if (board[i].every(cell => cell === player)) {
                return true;
              }
            }
  
            for (let j = 0; j < SIZE; j++) {
                let verticalAllPlayer = true;
                for (let i = 0; i < SIZE; i++) {
                  if (board[i][j] !== player) {
                    verticalAllPlayer = false;
                    break;
                  }
                }

                if (verticalAllPlayer) {
                    return verticalAllPlayer;
                  }
                }

                let diagonalAllPlayer = true;
                for (let i = 0; i < SIZE; i++) {
                  if (board[i][i] !== player) {
                    diagonalAllPlayer = false;
                    break;
                  }
                }

























})();