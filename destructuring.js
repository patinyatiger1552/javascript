// Destrusturing การทำงาน (ดูการทำงานแต่ละ step ให้ uncomment)

//Array

// step 1 เรียก index แบบปกติ
const addressCity = ["ubon","amnat","bankkok"]
const ubon = addressCity[0]
const amnat = addressCity[1]
const bankkok = addressCity[2]

// console.log(ubon)
// console.log(amnat)

// step 2 เรียก array แบบ Destrusturing
const userName = ["tiger","james","ball"]
const [tiger,james,ball] = userName

// console.log(userName)

// step 3 เรียกตัว array บางตัว
const colors = ["red", "green" , "blue" ]
const [red,green,] = colors

// console.log(green)
// console.log(red)

// step 4 Object
// เข้าไปยัง proproty ปกติ
const product = {
  productName: "Computer",
  price: 50000,
  stock: 7
}

// step 5 object แบบ destructuring

const {productName:productName,price:price,stock:stock} = product

console.log(productName)
console.log(price)
console.log(stock)

// step 6 object แบบ destructuring แบบสั้น

const product1 = {
  productName1: "MacOS",
  price1: 70000,
  stock1: 5
}

const {productName1,price1,stock1} = product1

console.log(productName1)
console.log(price1)
console.log(stock1)
