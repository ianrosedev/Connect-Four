let MasterArray = [],
    Player1 = [],
    Player2 = [];
    color = 'blue';


// Fills in MasterArray
(function populateMasterArray() {
  // Row
  for (let i = 0; i < 7; i ++) {
    MasterArray.push([]);
    // Column
    for (let j = 0; j < 6; j++) {
      MasterArray[i].push(null);
    }
  }
})();

// Add Tokens On Click
$('#row1').on('click', function() {
  addToken(0);
  playerTurn();
});

$('#row2').on('click', function() {
  addToken(1);
  playerTurn();
});

$('#row3').on('click', function() {
  addToken(2);
  playerTurn();
});

$('#row4').on('click', function() {
  addToken(3);
  playerTurn();
});

$('#row5').on('click', function() {
  addToken(4);
  playerTurn();
});

$('#row6').on('click', function() {
  addToken(5);
  playerTurn();
});

$('#row7').on('click', function() {
  addToken(6);
  playerTurn();
});

// Add Tokens
function addToken(rowNumber) {
  for (let i = MasterArray[rowNumber].length - 1; i >= 0; i--) {
    if (MasterArray[rowNumber][i] === null) {
      MasterArray[rowNumber][i] = color;
      $('#' + rowNumber + i).addClass(color);
      return;
    }
  }
}


function playerTurn() {
  if (color === 'blue') {
    color = 'red';
    $('#cpu-color').text(`Choose a spot, ${color}`);
  } else {
    color = 'blue';
    $('#cpu-color').text(`Choose a spot, ${color}`);
  }
}

playerTurn();
