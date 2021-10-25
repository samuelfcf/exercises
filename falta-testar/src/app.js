function sumTwoNumbers(a, b) {
  return a + b;
}

function statusCodes(value) {
  if (value) {
    return {
      status: 200,
    }
  }
  return {
    status: 404,
  }
}

function sumAllTotal(arr) {
  return arr.reduce((acc, curr) => acc + curr.total, 0);
}


export {
  sumTwoNumbers,
  sumAllTotal,
  statusCodes,
};
