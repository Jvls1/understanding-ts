function sum(n1: number, n2: number) {
  return n1 + n2;
}

function printResultVoid(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
};

printResultVoid(sum(20, 10));

let combineValues: (a: number, b: number) => number;

combineValues = sum;
// combineValues = printResultVoid;
// combineValues = 10;

console.log(5, 5);

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});