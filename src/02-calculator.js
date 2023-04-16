const DIVIDEND_ERROR = 'O dividendo não pode ser 0'
const testNumbers = [1,3,5,7]


const calculator = {
  sum: (numbers) => numbers.reduce((acc,curr)=> acc + curr, 0),
  subtraction: (numbers) => numbers.reduce((acc,curr)=> acc - curr, 0),
  multiplication: (numbers) => numbers.reduce((acc,curr)=> acc * curr, 1),
  division: (a,b) => b !== 0 ? a / b : DIVIDEND_ERROR
}

const testData = {
testSum: calculator.sum(testNumbers),
testSubtraction: calculator.subtraction(testNumbers),
testMultiplication: calculator.multiplication(testNumbers),
testDivision: calculator.division(4,2),
testDivisionError: calculator.division(4,0)
}

console.table(testData)