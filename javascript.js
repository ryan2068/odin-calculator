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
calcOperator = document.querySelector('#divOperator')
displayVal2 = document.querySelector('#disp2')
const btn = document.querySelectorAll('.btn')
const operator = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
let previousValue 
let nextValue

btn.forEach(btns => {
    btns.addEventListener('click', () => {
        displayVal1.innerText += btns.innerText
        previousValue = displayVal1.innerText
        
        console.log(` this is still prev value : ${previousValue}`)
        
        operator.forEach(operators => {
            operators.addEventListener('click', () => {
                calcOperator = operators.innerText
                console.log(` this is operator value : ${previousValue}`)
            })
        btns.addEventListener('click', () =>{
            displayVal2.innerText = btns.innerText
            nextValue = displayVal2.innerText
            console.log(nextValue)
            console.log(` this is still prev value : ${previousValue}`)
        })
            
            
            
                
        })
        
    equals.addEventListener('click', () => {
        
        console.log(`${previousValue}, ${calcOperator}, ${nextValue}`)
    })
    })
});