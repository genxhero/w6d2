class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
   const $square = $("li");
    $square.click( (event) => {
      let pos;
      switch(event.target.id) {
        case "box0": 
          pos = [0,0];
        break;  
        case "box1": 
          pos = [0,1];
        break;   
        case "box2": 
          pos = [0,2];
        break;
        case "box3": 
          pos = [1,0];
        break;  
        case "box4": 
          pos = [1,1];
        break;   
        case "box5": 
          pos = [1,2];
        break;
        case "box6": 
          pos = [2,0];
        break;  
        case "box7": 
          pos = [2,1];
        break;   
        case "box8": 
          pos = [2,2];
        break;
      }
      console.log(event.target);
      
      if (this.game.board.isEmptyPos(pos) && !this.game.isOver() ) {
        this.game.playMove(pos);
        $(event.target).css({'background': 'white'});
        $(event.target).text(this.game.currentPlayer);
        if (this.game.isOver()) {
        //  alert(`A Winner is you, ${this.game.currentPlayer}`);
          //css changes
          $("body").append(`<h1>A Winner is you, ${this.game.currentPlayer}</h1>`);
          this.$square.off('click');
        }
      } else {
        
        alert('not a valid move');
      }
      
      
    });
  }


  setupBoard() {
    const $grid = $('.ttt').html('<ul>');
    const $gridUl = $('ul');
    for (let i = 0; i < 9; i++) {
      $gridUl.append(`<li id="box${i}" class='grid-box'></li>`);
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
    //    $gridLi.data({clicked: false, pos: [i, j]});
      }
    }
  }
}

module.exports = View;
