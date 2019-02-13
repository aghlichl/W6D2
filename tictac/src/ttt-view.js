class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    console.log(this);
  }

  bindEvents() { }

  makeMove($square) { }

  setupBoard() {
    let $ul = $('<ul class="grid">')
    for (let li = 0; li < 9; li++) {
      let $li = $(`<li class="box" id=${li}>`)

      $ul.append($li);
    }
    $ul.on('click', "li", (e) => this.bindEvents(e.currentTarget));
    this.$el.append($ul);

  }

  bindEvents(currentTarget) {
    console.log(currentTarget.id)
    if (this.game.isOver()){
      return;
    }
    let currentClass = $(currentTarget).className;
    console.log(currentClass);
    try {
      this.game.playMove(currentTarget.id);
      if (this.game.currentPlayer === "x") {
        $(currentTarget).addClass('x');
        $(currentTarget).append('<i class="fa fa-times" aria-hidden="true">');
      }
      else {
        $(currentTarget).append('<i class="fas fa-circle"></i>');
        $(currentTarget).addClass('o');
      }
    }
    catch (err) {
      alert(err.msg);
    }
    if(this.game.isOver()){
      let $header = $('h1');
      if(this.game.currentPlayer === "o"){
        $header.append(`<h1> <i class="fas fa-circle"></i> WINS! </h1>`)
      }
      else{
        $header.append(`<h1> <i class="fa fa-times" aria-hidden="true"> WINS! </h1>`)
      }
    }
  }
}


module.exports = View;
