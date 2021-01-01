const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput(){
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, currentCalc, userEnterNum){
  const calcDescription = `${currentCalc} ${operator} ${userEnterNum}`;
  outputResult(currentResult, calcDescription);

}
function writeToLog(operator, prevResult, userEnteredNum, calcResult){
  const logEntry = {
    operationType: operator,
    prevResult: prevResult,
    number: userEnteredNum,
    result: calcResult
  }
  logEntries.push(logEntry);

}

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult)
 
  console.log(logEntries);
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(userInput.value);
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUTRACT', initialResult, enteredNumber, currentResult)

  console.log(logEntries);

}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(userInput.value);
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);

  console.log(logEntries);
};
  

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(userInput.value);
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);

  console.log(logEntries);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);