let MasterArray = [],
    Player1 = [],
    Player2 = [];
    color = 'red';


// Fills in  MasterArray
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

$('#cpu-color').text(`Choose a spot, ${color}`);

$('#row1').on('click', function() {
  addToken(0);
});

$('#row2').on('click', function() {
  addToken(1);
});

$('#row3').on('click', function() {
  addToken(2);
});

$('#row4').on('click', function() {
  addToken(3);
});

$('#row5').on('click', function() {
  addToken(4);
});

$('#row6').on('click', function() {
  addToken(5);
});

$('#row7').on('click', function() {
  addToken(6);
});

function addToken(rowNumber) {
  for (let i = MasterArray[rowNumber].length - 1; i >= 0; i--) {
    if (MasterArray[rowNumber][i] === null) {
      MasterArray[rowNumber][i] = color;
      $('#' + rowNumber + i).addClass(color);
      return;
    }
  }
}
