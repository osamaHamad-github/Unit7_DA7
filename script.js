document.getElementById('calculate').addEventListener('click', multiply)

function multiply () {
  // getting our two inputs ans storing them in two variables
  let num1 = document.getElementById('num-1').value
  let num2 = document.getElementById('num-2').value

  // stores nagative or positive value
  let isNegative = false

  // checking to see if numbers should end up as negative or not
  // creating an xor logic gate so that negative is true when numbers have opposite signs
  const negativePositive = num1 < 0 && num2 >= 0
  const positiveNegative = num1 >= 0 && num2 < 0
  if (negativePositive || positiveNegative) {
    isNegative = true
  }

  // removing signs from inputs
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  // assigning our answer variable
  // this is the variable that our for loop will incerement
  let answer = 0

  // checking if the numbers are valid
  if (isNaN(num1)) {
    document.getElementById('answer').innerText = `ValueError: ${num1} is not a number`
    return 0
  } else if (isNaN(num2)) {
    document.getElementById('answer').innerText = `ValueError: ${num2} is not a number`
    return 0
  }

  // values are parsed into ints to allow calculation
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  // adding number 2 as many times as number 1's value
  for (let i = 0; i < num1; i++) {
    answer += num2
  }

  // negating number if isNegative is true
  // subtracting a number by itself results in 0
  // doing so again will result in negation
  if (isNegative) {
    answer = answer - answer - answer
  }

  // displaying answer
  document.getElementById('answer').innerText = answer
}
