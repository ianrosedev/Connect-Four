let MasterArray = [],
    color = 'red';

// SETUP
// Default Text
$('#cpu-color').text(`Choose a spot, ${color}`);

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
})()

// Adds ability to add a token to a column
for (let i = 1; i <= 7; i++) {
  addTokenToColumn(i);
}

function addTokenToColumn(n) {
  return (function() {
    $('#column' + n).on('click', function() {
      addToken(n - 1);
    });
  })();
}
// END SETUP

// Change Token color and update page
function playerTurn() {
  if (color === 'red') {
    color = 'blue';
    $('th').removeClass('red').addClass('blue');
    $('#cpu-color').text(`Choose a spot, ${color}`);
  } else {
    color = 'red';
    $('th').removeClass('blue').addClass('red');
    $('#cpu-color').text(`Choose a spot, ${color}`);
  }
}

// Add Token & Check for win
function addToken(column) {
  const m = MasterArray;

  for (let i = m[column].length - 1; i >= 0; i--) {
    if (m[column][i] === null) {
      m[column][i] = color;
      $('#' + column + i).addClass(color);

      if (checkForWin(column, i)) {
        return;
      } else {
        playerTurn();
        return;
      }
    }
  }
}

// Check for win
function checkForWin(column, row) {
  const m = MasterArray;

  // When player wins
  function onWin() {
    setTimeout(function() {
      $('#cpu-color').text('You Win!');
      alert('You Win!');
      // !Need ro reset MasterArray & clear color classes
      // to reset game
      // MasterArray = [];
    });
  }

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
        onWin();
      }
    }
  })();

  // !Works but needs work in first for loop
  // Pushing undefined to array
  // Diagonal Forward Win
  // try && (row + -(i)) <= 5
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
        onWin();
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
        onWin();
      }
    }
  })();

}
