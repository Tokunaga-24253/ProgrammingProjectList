let height = [5, 2, 1, 2, 1, 5];
let max = 0;
let result = 0;
for (let i in height) {
  if (height[i] > max) {
    max = height[i];
  }
}
let arr = new Array();
for (let m = 0; m < height.length; m++) {
  arr[m] = new Array();
  for (let n = 0; n < max; n++) {
    arr[m][n] = "";
  }
}
for (let i = 0; i < height.length; i++) {
  for (let j = 0; j < max; j++) {
    if (height[i] > 0) {
      //   console.log(i, j);
      arr[i][j] = 1;
      height[i]--;
    } else {
      //   console.log(i, j);
      arr[i][j] = 0;
    }
  }
}
for (let x = 0; x < max; x++) {
  let symbo = false;
  let mark = 0;
  for (let y = 0; y < height.length; y++) {
    if (symbo) {
      if (arr[y][x] == 1) {
        console.log("add", y - mark);
        result += y - mark - 1;
        mark = 0;
        symbo = false;
      }
      if (arr[y][x] == 1) {
        if (y + 1 < height.length) {
          if (arr[y + 1][x] != 1) {
            console.log("start");
            symbo = true;
            mark = y;
          }
        }
      }
    } else {
      if (arr[y][x] == 1) {
        if (y + 1 < height.length) {
          if (arr[y + 1][x] != 1) {
            console.log("start");
            symbo = true;
            mark = y;
          }
        }
      }
    }
  }
}
console.log(result);
