// Array reduce
const data = [10,20,30,40,50]

// array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) // total = 0

const summation = data.reduce((value,e)=>{
  console.log(value)

  const total =  e+value
  return total
},0)

// value = 10
// total = 30
console.log(summation)

// Array reduce การใช้งานจริง

const cart = [
  {name:"iphone xs",price:20000},
  {name:"iphone 11 pro max",price:45000},
  {name:"iphone 13 pro max",price:70000}
]

const summation1 = cart.reduce((value,e)=>{
  const total = e.price+value
  return total
},0)

console.log(summation1)