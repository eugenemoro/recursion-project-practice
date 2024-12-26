function fibs(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      array.push(i);
    } else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }
  return array;
}

console.log(fibs(15));

function fibsRec(n) {
  let array = [];
  if (n > 1) array = fibsRec(n - 1);
  if (n < 3) {
    array.push(n - 1);
  } else {
    array.push(array[n - 3] + array[n - 2]);
  }
  return array;
}

console.log(fibsRec(15));

function mergeSort(array) {
  if (array.length === 1) return array;
  const n = array.length / 2;
  let leftArray = mergeSort(array.slice(0, n));
  let rightArray = mergeSort(array.slice(n));
  let resultArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  while (
    leftArrayIndex < (leftArray.length) &&
    rightArrayIndex < (rightArray.length)
  ) {
    if (leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]) {
      resultArray.push(leftArray[leftArrayIndex]);
      leftArrayIndex += 1;
    } else {
      resultArray.push(rightArray[rightArrayIndex]);
      rightArrayIndex += 1;
    }
  }
  if (leftArrayIndex === leftArray.length) {
    resultArray.push(...(rightArray.slice(rightArrayIndex)));
  }
  if (rightArrayIndex === rightArray.length) {
    resultArray.push(...(leftArray.slice(leftArrayIndex)));
  }
  return resultArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([ 49, 8, 24, 8, 46, 0, 9, 12, 7, 34, 16, 1, 20, 15, 4, 2, 35, 0, 21, 44, 5, 36, 31, 4, 24, 48, 27, 16, 10, 18, 17, 33]));
