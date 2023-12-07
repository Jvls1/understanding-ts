function add(n1: number, n2: number, printResult: boolean, resultPhrase: string) {
  if (printResult) {
    console.log(resultPhrase + number1);
  } else {
    return n1 + n2;
  }
  return 'uepa';
}

//the good practice is to use explict types just when not assign value to the variable
let number1: number;
number1 = 1;
const number2 = 2;

const printResult = true;
let resultPhrase = "Result is: "

add(number1, number2, printResult, resultPhrase);