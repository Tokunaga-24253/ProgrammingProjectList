const arr = [1, 4, 8, 11, 33, 55, 99, 462];

// 二分查找

function binarySearch(data, arr, start, end) {
  if (start > end) {
    return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
    return mid;
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1);
  } else {
    return binarySearch(data, arr, mid + 1, end);
  }
}

console.log(binarySearch(33, arr, 0, arr.length - 1));
