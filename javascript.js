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

let displayVal1
let calcOperator 
let displayVal2 

operate = (displayVal1, calcOperator, displayVal2) => {
    if (calcOperator == '+') {
        return add(displayVal1, displayVal2)
    }

    if (calcOperator == '-') {
        return subtract(displayVal1, displayVal2)
    }
    if (calcOperator == '*') {
        return multiply(displayVal1, displayVal2)
    }
    if (calcOperator == '/') {
        return divide(displayVal1, displayVal2)
    }

}
console.log(operate(3, '*', 4))


displayVal1 = document.querySelector('#disp1')
const btn = document.querySelectorAll('.btn')
const operator = document.querySelectorAll('.operator')
let previousValue 
let nextValue

btn.forEach(btns => {
    btns.addEventListener('click', () => {
        displayVal1.innerText += btns.innerText
        previousValue = displayVal1.innerText
        console.log(previousValue)
        operator.forEach(operators => {
            operators.addEventListener('click', () => {
                operators = operators.innerText
                console.log(operate(previousValue, operators, 3))
            
            
            
            })
                
        })
    })
});







