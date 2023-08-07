add = (add1, add2) => {
    return (add1 + add2)
}

subtract = (subtract1, subtract2) => {
    return (subtract1 - subtract2) 
}

multiply = (multiply1, multiply2) => {
    return (multiply1 * multiply2)
}

divide = (divide1, divide2) => {
    return (divide1 / divide2)
}
console.log(subtract(4, 5))

let displayNum1
let calcOperator 
let displayNum2  

operate = (displayNum1, calcOperator, displayNum2) => {
    if (calcOperator === '+') {
        return add(displayNum1, displayNum2)
    }

    if (calcOperator === '-') {
        return subtract(displayNum1, displayNum2)
    }
    if (calcOperator === '*') {
        return multiply(displayNum1, displayNum2)
    }
    if (calcOperator === '/') {
        return divide(displayNum1, displayNum2)
    }

}
console.log(operate(3, '*', 4))