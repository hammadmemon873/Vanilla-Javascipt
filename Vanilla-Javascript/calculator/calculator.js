let input;
let currentValue = ""
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")
let btn7 = document.querySelector(".btn7")
let btn8 = document.querySelector(".btn8")
let btn9 = document.querySelector(".btn9")
let btn0 = document.querySelector(".btn0")
let btnPlus = document.querySelector(".btnPlus")
let btnMinus = document.querySelector(".btnMinus")
let btnMultiply = document.querySelector(".btnMultiply")
let btnDivide = document.querySelector(".btnDivide")
let btnModulus = document.querySelector(".btnModulus")
let btnDot = document.querySelector(".btnDot")
let btnEqual = document.querySelector(".btnEqual")
let btnC = document.querySelector(".btnc")

 


btn1.addEventListener("click",()=>{
     input = document.querySelector(".input")
    currentValue =currentValue + btn1.innerHTML
    input.value = currentValue
    console.log(input);
})
btn2.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn2.innerHTML
   input.value = currentValue
   console.log(input);
})
btn3.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn3.innerHTML
   input.value = currentValue
   console.log(input);
})
btn4.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn4.innerHTML
   input.value = currentValue
   console.log(input);
})
btn5.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn5.innerHTML
   input.value = currentValue
   console.log(input);
})
btn6.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn6.innerHTML
   input.value = currentValue
   console.log(input);
})
btn7.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn7.innerHTML
   input.value = currentValue
   console.log(input);
})
btn8.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn8.innerHTML
   input.value = currentValue
   console.log(input);
})
btn9.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn9.innerHTML
   input.value = currentValue
   console.log(input);
})
btn0.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btn0.innerHTML
   input.value = currentValue
   console.log(input);
})
btnDot.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btnDot.innerHTML
   input.value = currentValue
   console.log(input);
})
btnC.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue = " "
   input.value = currentValue
   console.log(input);
})
btnPlus.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btnPlus.innerHTML
   input.value = currentValue
   console.log(input);
})
btnMinus.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btnMinus.innerHTML
   input.value = currentValue
   console.log(input);
})
btnMultiply.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btnMultiply.innerHTML
   input.value = currentValue
   console.log(input);
})
btnDivide.addEventListener("click",()=>{
    input = document.querySelector(".input")
   currentValue =currentValue + btnDivide.innerHTML
   input.value = currentValue
   console.log(input);
})
btnEqual.addEventListener("click",()=>{
    input = document.querySelector(".input")
    let result = eval(currentValue)
   currentValue =result
   input.value = currentValue
   console.log(input);
})