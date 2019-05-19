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


























})();