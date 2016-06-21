function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right){
  var pivot = items[Math.floor((left+right)/2)],
      i = left,
      j = right;

  while (i <= j){
    while (items[i] < pivot){ //continue iterating until you find a value greater than pivot
      i++;
    }
    while (items[j] > pivot){
      j--;
    }
    if (i <= j){
      swap (items, i, j);
      i++;
      j--;
    }
    return i;
  }
}

function quicksort(array){
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
        quickSort(items, left, index - 1);
    }

    if (index < right) {
        quickSort(items, index, right);
    }
  }
  return items;
}
