//selectors
const display1E1 = document.querySelector(".display-1")
const display2E2 = document.querySelector(".display-2")
const temResultE1 = document.querySelector(".tem-result")
const numbersE1 = document.querySelectorAll(".number")
const operationE1 = document.querySelectorAll(".operation")
const equalE1 = document.querySelector(".equal")
const clearAllE1 = document.querySelector(".all-clear")
const clearLastE1 = document.querySelector(".last-entity-clear")

let dis1Num = ""
let dis2Num = ""
let result = null
let lastOperation = ""
let haveDot = false

//event listener
numbersE1.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true
    } else if (e.target.innerText === "." && haveDot) {
      return
    }
    dis2Num += e.target.innerText
    display2E2.innerText = dis2Num
  })
})
operationE1.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return
    haveDot = false
    const operationName = e.target.innerText
    display2E2.innerText = operationName
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation()
    } else {
      result = parseFloat(dis2Num) //parseFloat turns string to a number as dis2Num is a string
    }
    clearVar(operationName)
    lastOperation = operationName
    console.log(result)
  })
})
equalE1.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return
  haveDot = false
  mathOperation()
  clearVar()
  display2E2.innerText = result
  temResultE1.innerText = ""
  dis2Num = result
  dis1Num = ""
})
clearAllE1.addEventListener("click", (e) => {
  display1E1.innerText = "0"
  display2E2.innerText = "0"
  dis1Num = ""
  dis2Num = ""
  result = ""
  temResultE1.innerText = "0"
})
clearLastE1.addEventListener("click", (e) => {
  display2E2.innerText = ""
  dis2Num = ""
})
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonE1(e.key)
  } else if (e.key === "+" || e.key === "-" || e.key === "%") {
    clickOperation(e.key)
  } else if (e.key === "*") {
    clickOperation("X")
  } else {
    if (e.key == "Enter" || e.key === "=") clickEqual()
  }
})

//Functions
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " "
  display1E1.innerText = dis1Num
  display2E2.innerText = " "
  dis2Num = ""
  temResultE1.innerText = result
}
function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(dis2Num)
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num)
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num)
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num)
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num)
  }
}

function clickButtonE1(key) {
  numbersE1.forEach((button) => {
    if (button.innerText === key) {
      button.click()
    }
  })
}
function clickOperation(key) {
  operationE1.forEach((button) => {
    if (button.innerText === key) {
      button.click()
    }
  })
}
function clickEqual() {
  equalE1.click()
}