// 前序遍历
//递归
let frontOrder = function(root, arrs = []) {
  if (root) {
    arrs.push(root.val);
    frontPass(root.left, arrs);
    frontPass(root.right, arrs);
  }
  return arrs;
};
//非递归
let frontOrder = function(root, arrs = []) {
  const result = [];
  const stack = [];
  let current = root;
  while (stack.length > 0 || current) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
};

// 中序遍历
//递归
let middleOrder = function(root, arrs = []) {
  if (root) {
    frontPass(root.left, arrs);
    arrs.push(root.val);
    frontPass(root.right, arrs);
  }
  return arrs;
};
//非递归
let middleOrder = function(root, arrs = []) {
  const result = [];
  const stack = [];
  let current = root;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

// 后序遍历
//递归
let backOrder = function(root, arrs = []) {
  if (root) {
    frontPass(root.left, arrs);
    frontPass(root.right, arrs);
    arrs.push(root.val);
  }
  return arrs;
};
//非递归
let backOrder = function(root, arrs = []) {
  const result = [];
  const stack = [];
  let current = root;
  let last = null;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack[stack.length - 1];
    if (!current.right || current.right == last) {
      current = stack.pop();
      result.push(current);
      last = current;
      current = null;
    } else {
      current = current.right;
    }
  }
  return arrs;
};
