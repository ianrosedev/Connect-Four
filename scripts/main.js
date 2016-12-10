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

$('#row1').on('click', row1);

function row1() {
  for (let i = MasterArray[0].length - 1; i >= 0; i--) {
    if (MasterArray[0][i] === null) {
      MasterArray[0][i] = color;
      $('#0' + i).addClass(color);
      return;
    }
  }
}
