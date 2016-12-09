let MasterArray = [];

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

console.log(MasterArray);
