function fillGrid(n) {
  var result = [];
  var innerArray = [];
  var count = 1

  for (i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      innerArray.push(count)
      count++;
    }
    result.push(innerArray)
  }
  return result;
}

fillGrid(2)
