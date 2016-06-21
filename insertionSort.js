function insert(input, n){
  for (var i = 0; i < input.length; i++){
    if (n < input[i]){
      input.splice (i, 0, n);
      return input;
    }
  }
  input.push(n);
  return input;
}

function insertSort(input){
  var sorted = [];
  for (var i = 0; i < input.length; i++){
    insert(sorted, input[i]);
  }
  return sorted;
}
