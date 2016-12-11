let MasterArray = [],
    color = 'blue';

// Fills in MasterArray
(function populateMasterArray() {
  // Across
  for (let i = 0; i < 7; i ++) {
    MasterArray.push([]);
    // Down
    for (let j = 0; j < 6; j++) {
      MasterArray[i].push(null);
    }
  }
})();

// Add Token & Check for win
function addToken(columnNumber) {
  for (let i = MasterArray[columnNumber].length - 1; i >= 0; i--) {
    if (MasterArray[columnNumber][i] === null) {
      MasterArray[columnNumber][i] = color;
      $('#' + columnNumber + i).addClass(color);
      checkForWin(columnNumber, i);
      return;
    }
  }
}

// Check for win
function checkForWin(column, place) {
  const m = MasterArray;

  // Win Vertical
  if (m[column][place] === m[column][place + 1] && m[column][place] === m[column][place + 2] && m[column][place] === m[column][place + 3]) {
    alert('Win');
  }
  //Win Across Right
  if (m[column + 3]) {
    if (m[column][place] === m[column + 1][place] && m[column][place] === m[column + 2][place] && m[column][place] === m[column + 3][place]) {
      alert('Win!');
    }
  }
  // Win Across Left
  if (m[column - 3]) {
    if (m[column][place] === m[column - 1][place] && m[column][place] === m[column - 2][place] && m[column][place] === m[column - 3][place]) {
      alert('Win!');
    }
  }
}

// Change Token color and update page
function playerTurn() {
  if (color === 'blue') {
    color = 'red';
    $('th').removeClass('blue').addClass('red');
    $('#cpu-color').text(`Choose a spot, ${color}`);
  } else {
    color = 'blue';
    $('th').removeClass('red').addClass('blue');
    $('#cpu-color').text(`Choose a spot, ${color}`);
  }
}

// Add Tokens On Click
$('#column1').on('click', function() {
  addToken(0);
  playerTurn();
});

$('#column2').on('click', function() {
  addToken(1);
  playerTurn();
});

$('#column3').on('click', function() {
  addToken(2);
  playerTurn();
});

$('#column4').on('click', function() {
  addToken(3);
  playerTurn();
});

$('#column5').on('click', function() {
  addToken(4);
  playerTurn();
});

$('#column6').on('click', function() {
  addToken(5);
  playerTurn();
});

$('#column7').on('click', function() {
  addToken(6);
  playerTurn();
});

playerTurn();
