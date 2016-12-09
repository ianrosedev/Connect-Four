let MasterArray = [],
    Player1 = [],
    Player2 = [];
    color = 'red';

(function populateMasterArray() {
  // Row
  for (let i = 0; i < 7; i ++) {
    MasterArray.push([]);
    // Column
    for (let j = 0; j < 6; j++) {
      MasterArray[i].push(j);
    }
  }
})();

$('#user-submit').on('click', function() {
  $('#foo').addClass('red');
  $('#cpu-color').text(color);
  console.log(color);
});
