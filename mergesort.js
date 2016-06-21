function merge(array1, array2){
  var result = [];
  var index1 = 0;
  var index2 = 0;
  while (index1 < array1.length && index2 < array2.length){
    if (array1[index1] < array2[index2]){
      result.push(array1[index1]);
      index1++;
    } else {
      result.push(array2[index2]);
      index2++;
    }
  }
  if (array1.length === index1){
    for (index2; index2 < array2.length; index2++){
      result.push(array2[index2]);
    }
  }
  if (array2.length === index2){
    for (index1; index1 < array1.length; index1++){
      result.push(array1[index1]);
    }
  }
  return result;
}

function mergeSort(input){
  if(input.length === 0){
    return [];
  }
  if(input.length === 1){
    return input;
  }
  else {
    var half = Math.floor(input.length / 2){
      return merge(mergeSort(input.splice(0, half)), mergeSort(input.splice(half, input.length)));
    }
  }
}
