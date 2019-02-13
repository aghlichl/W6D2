class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    console.log(this);
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard(){
    let $ul = $('<ul class="grid">')
    for(let li=0; li<9; li++){
      let $li = $(`<li class="box" id=${li}>`)
      
      $ul.append($li);
    }
    $ul.on('click', "li", (e) => this.bindEvents(e.currentTarget) ) ; 
    this.$el.append($ul);

  }

  bindEvents(currentTarget){
    console.log(currentTarget.id)

    let currentClass = $(currentTarget).className;
    console.log(currentClass);
    try{
    this.game.playMove(currentTarget.id);
    if (this.game.currentPlayer === "x"){
      $(currentTarget).addClass('x');
      $(currentTarget).append('<i class="fa fa-times" aria-hidden="true">');
    }
    else{
      $(currentTarget).append('<i class="fas fa-circle"></i>');
      $(currentTarget).addClass('o');
    }
    }
    catch(err){
      alert(err.msg); 
    }

    
    console.log(currentClass);
    
  }

}


module.exports = View;
