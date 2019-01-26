let board = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
];

let p1Counter = 1;
let p2Counter = 1;

class Player {
  constructor() {
    this.isTurn = false;
    this.win = false;
  }
}

class Space {
  constructor(id) {
    this.played = false;
    this.id = id;
  }

  addSymbolX(space) {
    $(space).append("<div class='x'>X</div>");
  }
  
  addSymbolO(space) {
    $(space).append("<div class='o'>O</div>");
  }
}

//create players
const player1 = new Player();
const player2 = new Player();

//create spaces
const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

//switch turns
function switchTurns(one, two) {
  one.isTurn = true;
  two.isTurn = false;
}

//gameplay
player1.isTurn = true;

$('.grid').on('click', (e) => {
  if(player1.win !== true && player2.win !== true) {
    if(e.target.id === space1.id && space1.played === false) {
       if(player1.isTurn) {
         space1.addSymbolX(e.target);
         let index = board[0].indexOf(1);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space1.played = true;
       } else {
           space1.addSymbolO(e.target);
           let index = board[0].indexOf(1);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space1.played = true;
       }
    } 

    else if (e.target.id === space2.id && space2.played === false) {
       if(player1.isTurn) {
         space2.addSymbolX(e.target); 
         let index = board[0].indexOf(2);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space2.played = true;
       } else {
           space2.addSymbolO(e.target);
           let index = board[0].indexOf(2);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space2.played = true;
       } 
    }

    else if (e.target.id === space3.id && space3.played === false) {
       if(player1.isTurn) {
         space3.addSymbolX(e.target);   
         let index = board[0].indexOf(3);
         if(index !== -1) {
           board[0][index] = 'x';
         }
         switchTurns(player2, player1);
         space3.played = true;
       } else {
           space3.addSymbolO(e.target); 
           let index = board[0].indexOf(3);
           if(index !== -1) {
             board[0][index] = 'o';
           }
           switchTurns(player1, player2);
           space3.played = true;
       }   
    }

   else if (e.target.id === space4.id && space4.played === false) {
       if(player1.isTurn) {
         space4.addSymbolX(e.target);  
         let index = board[1].indexOf(4);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space4.played = true;
       } else {
           space4.addSymbolO(e.target);
           let index = board[1].indexOf(4);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space4.played = true;
       } 
    }

    else if (e.target.id === space5.id && space5.played === false) {
       if(player1.isTurn) {
         space5.addSymbolX(e.target); 
         let index = board[1].indexOf(5);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space5.played = true;
       } else {
           space5.addSymbolO(e.target); 
           let index = board[1].indexOf(5);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space5.played = true;
       }   
    }  

    else if (e.target.id === space6.id && space6.played === false) {
       if(player1.isTurn) {
         space6.addSymbolX(e.target);
         let index = board[1].indexOf(6);
         if(index !== -1) {
           board[1][index] = 'x';
         }
         switchTurns(player2, player1);
         space6.played = true;
       } else {
           space6.addSymbolO(e.target);
           let index = board[1].indexOf(6);
           if(index !== -1) {
             board[1][index] = 'o';
           }
           switchTurns(player1, player2);
           space6.played = true;
       } 
    }

    else if (e.target.id === space7.id && space7.played === false) {
       if(player1.isTurn) {
         space7.addSymbolX(e.target);
         let index = board[2].indexOf(7);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space7.played = true;
       } else {
           space7.addSymbolO(e.target); 
           let index = board[2].indexOf(7);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space7.played = true;
       }   
    }

   else if (e.target.id === space8.id && space8.played === false) {
       if(player1.isTurn) {
         space8.addSymbolX(e.target);
         let index = board[2].indexOf(8);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space8.played = true;
       } else {
           space8.addSymbolO(e.target);
           let index = board[2].indexOf(8);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space8.played = true;
       } 
    }

    else if (e.target.id === space9.id && space9.played === false) {
       if(player1.isTurn) {
         space9.addSymbolX(e.target);
         let index = board[2].indexOf(9);
         if(index !== -1) {
           board[2][index] = 'x';
         }
         switchTurns(player2, player1);
         space9.played = true;
       } else {
           space9.addSymbolO(e.target); 
           let index = board[2].indexOf(9);
           if(index !== -1) {
             board[2][index] = 'o';
           }
           switchTurns(player1, player2);
           space9.played = true;
       }   
    }

    //check if playerX wins
    // top row
    if(board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") {
      $('.header').text('Player One Wins!');
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: '+ p1Counter);
      p1Counter += 1;
      player1.win = true;
    }  
    // middle row 
    else if (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") {
      $('.header').text('Player One Wins!');
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1:' + p1counter);
      p1Counter += 1;
      player1.win = true;
    }
    // bottom row
    else if (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") {
      $('.header').text('Player One Wins!'); 
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    }
    // first column
    else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
      $('.header').text('Player One Wins!'); 
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    }
    // second column
    else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
      $('.header').text('Player One Wins!'); 
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    }
    // third column
    else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
      $('.header').text('Player One Wins!'); 
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    }
    // diaganol right
    else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
      $('.header').text('Player One Wins!');  
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    }
    // diaganol left
    else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
      $('.header').text('Player One Wins!'); 
      $('.header').css('color', 'tomato');
      $('.p1').text ('Player 1: ' + p1Counter);
      p1Counter += 1;
      player1.win = true;
    } 

    // check if player 2 wins

    //top row
    if(board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o") {
      $('.header').text('Player Two Wins!');
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }  
    // middle row 
    else if (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o") {
      $('.header').text('Player Two Wins!');  
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // bottom row
    else if (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o") {
      $('.header').text('Player Two Wins!');   
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // first column
    else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
      $('.header').text('Player Two Wins!'); 
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // second column
    else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
      $('.header').text('Player Two Wins!');  
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // third column
    else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
      $('.header').text('Player Two Wins!');  
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // diaganol right
    else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
      $('.header').text('Player Two Wins!');  
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
    // diaganol left
    else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
      $('.header').text('Player Two Wins!');    
      $('.header').css('color', '#33DBFF');
      $('.p2').text ('Player 2: ' + p2Counter);
      p2Counter += 1;
      player2.win = true;
    }
  }
});


$('.reset').on('click', () => {
  player1.isTurn = true;
  player2.isTurn = false;
  player1.win = false;
  player2.win = false;
  $('.x').remove();
  $('.o').remove();
  $('.header').text('Tic Tac Toe');
  board = [[1,2,3],[4,5,6],[7,8,9]];
  space1.played = false;
  space2.played = false;
  space3.played = false;
  space4.played = false;
  space5.played = false;
  space6.played = false;
  space7.played = false;
  space8.played = false;
  space9.played = false;  
});



// Mario Game 
var LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          x!x           ",
   "                                                                   !        xx  ",
   "  xx                                      oooo                     !         x  ",
   "  x                     o                                          !          x  ",
   "  x                                      xxxxx                     !        o x  ",
   "  x          xxxx       o                                          !          x  ",
   "  x  @    !!  x  x                                             xxxxxo @       x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx  xxxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x    !  !  !                       xxxxxxxxxxxxxxx!!x",
   "                                                 x!x         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx           xx           !xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx                                    ",
   "                                                               xxxx!!!!!xxxx                                     ",
   "                                               x     xx            xxxxxxx        xxx         xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x        x xx                    ",
   "                                               x     x     !ooooo!   x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x     !     !   x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x           x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx   !   xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   ooooo  x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx !      ! x                                                       ",
   "                                      x   x           x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    !      x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                  o   ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x        xxxx      xxxx      xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx   oooooooooooooooo x o       x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x! o !x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "           @                                                                                                  ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                                     x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x            !          !             x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];


function Vector(x, y) {
  this.x = x; this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function(scale) {
  return new Vector(this.x * scale, this.y * scale);
};

// Note: uppercase words are used that means constructor are values
var actorchars =  {
  "@": Player,
  "o": Coin,
  "=": Lava,
  "|": Lava,
  "v": Lava
};

function Player(pos) {
  this.pos = pos.plus(new Vector(0, -.5));
  this.size = new Vector(.5, 1);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";

function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  if (ch === "=")
    this.speed = new Vector(2, 0);
  else if (ch === '|')
    this.speed = new Vector(0, 2);
  else if (ch === 'v'){
    this.speed = new Vector(0, 3);       
    this.repeatPos = pos;
  }
}
Lava.prototype.type = "Lava";

function Coin(pos) {
  this.basePos = this.pos = pos;
  this.size = new Vector(.6, .6);
  // take a look back
  this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";

Level.prototype.isFinished = function() {
  return this.status != null && this.finishDelay < 0;
};

function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];
  
  for (var y = 0; y < this.height; y++) {
    var line = plan[y],  gridLine = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x], fieldType = null;
      var Actor = actorchars[ch];
      if (Actor)
        this.actors.push(new Actor(new Vector(x, y), ch));
      else if (ch === "x")
        fieldType = "wall";
      else if (ch === "!")
        fieldType = "lava";
      else if (ch === "|")
        fieldType = "lava";
      else if (ch === "=")
        fieldType = "lava";
      else if (ch === "v"){
        fieldType = "lava";
        console.log(fieldType);
      }
      gridLine.push(fieldType)
    }
    this.grid.push(gridLine);
  }
  this.player = this.actors.filter(function(actor) {
    return actor.type === "player"
  })[0];  
  this.status = this.finishDelay = null;
}

function element(name, className) {
  var elem = document.createElement(name);
  if(className) elem.className = className;
  return elem;
}

function DOMDisplay(parent, level) {
  this.wrap = parent.appendChild(element("div", "game"));
  this.level = level;
  
  this.wrap.appendChild(this.drawBackground());
  this.actorLayer = null;
  this.drawFrame();
}


var scale = 15;


DOMDisplay.prototype.drawBackground = function() {
  var table = element("table", "background");
  table.style.width = this.level.width * scale + "px";
  table.style.height = this.level.height * scale + "px";
  this.level.grid.forEach(function(row) {
  var rowElement = table.appendChild(element("tr"));
    rowElement.style.height = scale + "px";
    row.forEach(function(type) {
      rowElement.appendChild(element("td", type));
    });
  });
  return table;
};

DOMDisplay.prototype.drawActors = function() {
  var wrap = element("div");
  this.level.actors.forEach(function(actor) {
    var rect = wrap.appendChild(element("div", "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
}

DOMDisplay.prototype.drawFrame = function() {
  if (this.actorLayer)
    this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());
  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};


// clear it later
DOMDisplay.prototype.scrollPlayerIntoView = function() {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;
  var margin = width / 3;

  // The viewport
  var left = this.wrap.scrollLeft, right = left + width;
  var top = this.wrap.scrollTop, bottom = top + height;

  var player = this.level.player;
  var center = player.pos.plus(player.size.times(0.5))
                 .times(scale);

  if (center.x < left + margin)
    this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin)
    this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};

DOMDisplay.prototype.clear = function() {
  this.wrap.parentNode.removeChild(this.wrap);
};

Level.prototype.obstacleAt = function(pos, size) {
  var xStart = Math.floor(pos.x);
  var xEnd = Math.ceil(pos.x + size.x);
  var yStart = Math.floor(pos.y);
  var yEnd = Math.ceil(pos.y + size.y);

  if (xStart < 0 || xEnd > this.width || yStart < 0)
    return "wall";
  if (yEnd > this.height)
    return "lava";
  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) return fieldType;
    }
  }
};

Level.prototype.actorAt = function(actor) {
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
    if (other != actor &&
        actor.pos.x + actor.size.x > other.pos.x &&
        actor.pos.x < other.pos.x + other.size.x &&
        actor.pos.y + actor.size.y > other.pos.y &&
        actor.pos.y < other.pos.y + other.size.y)
      return other;
  }
};

var maxStep = 0.05;

Level.prototype.animate = function(step, keys) {
  if (this.status != null)
    this.finishDelay -= step;

  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function(actor) {
      actor.act(thisStep, this, keys);
    }, this);
    step -= thisStep;
  }
};


Lava.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size))
    this.pos = newPos;
  else if (this.repeatPos)
    this.pos = this.repeatPos;
  else
    this.speed = this.speed.times(-1);
};

var wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.act = function(step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};


var playerXSpeed = 10;

Player.prototype.moveX = function(step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle)
    level.playerTouched(obstacle);
  else
    this.pos = newPos;
};

var gravity = 30;
var jumpSpeed = 17;

Player.prototype.moveY = function(step, level, keys) {
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0)
      this.speed.y = -jumpSpeed;
    else
      this.speed.y = 0;
  } else {
    this.pos = newPos;
  }
};

Player.prototype.act = function(step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor)
    level.playerTouched(otherActor.type, otherActor);

  // Losing animation
  if (level.status == "lost") {
    this.pos.y += step;
    this.size.y -= step;
  }
};

Level.prototype.playerTouched = function(type, actor) {
  if (type == "lava" && this.status == null) {
    this.status = "lost";
    this.finishDelay = 1;
  } else if (type == "coin") {
    this.actors = this.actors.filter(function(other) {
      return other != actor;
    });
    if (!this.actors.some(function(actor) {
      return actor.type == "coin";
    })) {
      this.status = "won";
      this.finishDelay = 1;
    }
  }
};

var arrowCodes = {37: "left", 38: "up", 39: "right"};

function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}

function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);

function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);
  runAnimation(function(step) {
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen)
        andThen(level.status);
      return false;
    }
  });
}

function runGame(plans, Display) {
  function startLevel(n) {
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost")
        startLevel(n);
      else if (n < plans.length - 1)
        startLevel(n + 1);
      else
        alert("You win!");
    });
  }
  startLevel(0);
}

runGame(LEVELS, DOMDisplay);



// popup
$('.pop-close').click(function(event){
  $(this).closest('.overlay').removeClass('show')
});
