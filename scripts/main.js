let MasterArray = [],
    color = 'blue';

// Fills in MasterArray
(function populateMasterArray() {
  // Columns
  for (let i = 0; i < 7; i ++) {
    MasterArray.push([]);
    // Rows
    for (let j = 0; j < 6; j++) {
      MasterArray[i].push(null);
    }
  }
})();

// Add Token & Check for win
function addToken(column) {
  const m = MasterArray;

  for (let i = m[column].length - 1; i >= 0; i--) {
    if (m[column][i] === null) {
      m[column][i] = color;
      $('#' + column + i).addClass(color);
      checkForWin(column, i);
        return;
    }
  }
}

// Check for win
function checkForWin(column, row) {
  const m = MasterArray;

  // Vertical Win
  (function verticalWin() {
    if (m[column][row + 3]) {
      if (color === m[column][row + 1] &&
          color === m[column][row + 2] &&
          color === m[column][row + 3]) {
        alert('Win');
      }
    }
  })();

  // Horizontal Win
  (function horizontalWin() {
    const horizontalArray = [];

    for (let i = -3; i <= 3; i++) {
      if (m[column + i]) {
        horizontalArray.push(m[column + i][row]);
      }
    }

    for (let i = 0; i < horizontalArray.length; i++) {
      if (color === horizontalArray[i] &&
          color === horizontalArray[i + 1] &&
          color === horizontalArray[i + 2] &&
          color === horizontalArray[i + 3]) {
        alert('win!');
      }
    }
  })();

  // !Works but needs work in first for loop
  // Pushing undefined to array
  // Diagonal Forward Win
  (function diagonalForwardWin() {
    const diagonalForwardArray = [];

    for (let i = -3; i <= 3; i++) {
      if (m[column + i]) {
        diagonalForwardArray.push(m[column + i][row + -(i)]);
      }
    }

    for (let i = 0; i < diagonalForwardArray.length; i++) {
      if (color === diagonalForwardArray[i] &&
          color === diagonalForwardArray[i + 1] &&
          color === diagonalForwardArray[i + 2] &&
          color === diagonalForwardArray[i + 3]) {
        alert('win!');
      }
    }
  })();

  // !Works but needs work in first for loop
  // Pushing undefined to array
  // Diagonal Forward Win
  (function diagonalBackWin() {
    let diagonalBackArray = [];

    for (let i = -3; i <= 3; i++) {
      if (m[column + i]) {
        diagonalBackArray.push(m[column + i][row + i]);
      }
    }

    for (let i = 0; i < diagonalBackArray.length; i++) {
      if (color === diagonalBackArray[i] &&
          color === diagonalBackArray[i + 1] &&
          color === diagonalBackArray[i + 2] &&
          color === diagonalBackArray[i + 3]) {
        alert('win!');
      }
    }
  })();

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
