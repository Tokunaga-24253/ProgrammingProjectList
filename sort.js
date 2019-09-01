let list = [99, 31, 17, 5, 3, 1, 1, 0];
console.log(list);

// 冒泡

// simple
// for (let i = 0; i < list.length; i++) {
//   for (let j = i + 1; j < list.length; j++) {
//     if (list[i] < list[j]) {
//       [list[i], list[j]] = [list[j], list[i]];
//     }
//   }
// }
// console.log(list);

// 优化版：当一次循环没有发生冒泡，说明已经排序完成，停止循环。
// for (let j = 0; j < list.length; j++) {
//   let complete = true;
//   for (let i = 0; i < list.length - 1 - j; i++) {
//     // 比较相邻数
//     if (list[i] > list[i + 1]) {
//       [list[i], list[i + 1]] = [list[i + 1], list[i]];
//       complete = false;
//     }
//   }
//   // 没有冒泡结束循环
//   if (complete) {
//     break;
//   }
// }
// console.log(list);

// 时间复杂度：O(n2)
// 空间复杂度:O(1)

// 快速

// 需要额外空间，不推荐
// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//   const target = array[0];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < target) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return quickSort(left).concat([target], quickSort(right));
// }

// 推荐
// function quickSort(array, start, end) {
//   if (end - start < 1) {
//     return;
//   }
//   const target = array[start];
//   let l = start;
//   let r = end;
//   while (l < r) {
//     while (l < r && array[r] >= target) {
//       r--;
//     }
//     array[l] = array[r];
//     while (l < r && array[l] < target) {
//       l++;
//     }
//     array[r] = array[l];
//   }
//   array[l] = target;
//   quickSort(array, start, l - 1);
//   quickSort(array, l + 1, end);
//   return array;
// }
// console.log(quickSort(list));

// 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
// 空间复杂度:O(logn)（递归调用消耗）

// 归并

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const front = array.slice(0, mid);
  const end = array.slice(mid);
  return merge(mergeSort(front), mergeSort(end));
}

function merge(front, end) {
  const temp = [];
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift());
    } else {
      temp.push(end.shift());
    }
  }
  while (front.length) {
    temp.push(front.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}

console.log(mergeSort(list));
