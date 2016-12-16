let MasterArray = [],
    color = 'red';

// INITIAL SETUP
// Fills in MasterArray
function populateMasterArray() {
  // Columns
  for (let i = 0; i < 7; i ++) {
    MasterArray.push([]);
    // Rows
    for (let j = 0; j < 6; j++) {
      MasterArray[i].push(null);
    }
  }
}

populateMasterArray();

// Adds ability to add a token to a column
function addTokenToColumn(n) {
  return (function() {
    $('#column' + n).on('click', function() {
      addToken(n - 1);
    });
  })();
}

for (let i = 1; i <= 7; i++) {
  addTokenToColumn(i);
}
// END SETUP

// Change Token color and update page
function playerTurn() {
  console.log('player: ' + color);

  if (color === 'red') {
    color = 'blue';
    $('th').removeClass('red').addClass('blue');
  } else {
    color = 'red';
    $('th').removeClass('blue').addClass('red');
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
        return onWin();
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
        return onWin();
      }
    }
  })();

  // Diagonal Forward Win
  (function diagonalForwardWin() {
    const diagonalForwardArray = [];

    for (let i = -3; i <= 3; i++) {
      if (m[column + i] && (row + -(i)) >= 0 && (row + -(i)) <= 5) {
        diagonalForwardArray.push(m[column + i][row + -(i)]);
      }
    }

    for (let i = 0; i < diagonalForwardArray.length; i++) {
      if (color === diagonalForwardArray[i] &&
          color === diagonalForwardArray[i + 1] &&
          color === diagonalForwardArray[i + 2] &&
          color === diagonalForwardArray[i + 3]) {
        return onWin();
      }
    }
  })();

  // Diagonal Forward Win
  (function diagonalBackWin() {
    let diagonalBackArray = [];

    for (let i = -3; i <= 3; i++) {
      if (m[column + i] && (row + i >= 0) && (row + i <= 5)) {
        diagonalBackArray.push(m[column + i][row + i]);
      }
    }

    for (let i = 0; i < diagonalBackArray.length; i++) {
      if (color === diagonalBackArray[i] &&
          color === diagonalBackArray[i + 1] &&
          color === diagonalBackArray[i + 2] &&
          color === diagonalBackArray[i + 3]) {
        return onWin();
      }
    }
  })();
}

// When player wins
function onWin() {
  const thisColor = color;

  setTimeout(function() {
    // Alert winner
    alert(`${thisColor.charAt(0).toUpperCase() + thisColor.slice(1)} Wins!`);

    // Reset Game
    $('.circle').removeClass('red blue');
    MasterArray = [];
    populateMasterArray();
    color = 'red';
    $('th').removeClass('blue').addClass('red');
  }, 300);
}

// Add Token & Check for win
function addToken(column) {
  const m = MasterArray;

  // Add token
  for (let i = m[column].length - 1; i >= 0; i--) {
    if (m[column][i] === null) {
      m[column][i] = color;
      $('#' + column + i).addClass(color);

      // Check for win or go to next players turn
      return checkForWin(column, i) || playerTurn();
    }
  }
}
