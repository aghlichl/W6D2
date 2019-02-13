const View = require('./ttt-view');
const Game = require('./game');

  $(() => {
    // Your code here
    const game = new Game();
    const $figure = $('figure');
    const view = new View(game, $figure);
    
  });
