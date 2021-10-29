// Spread Operator การเอาค่าของ Arrey มารวมกันให้เป้น Arrey เดียว

const newArr = [100,200,300]
const data = [10,20, ...newArr]

const colors = ["green", "yellow", "dark","blue",]
const allColors = ["pink","orange", ...colors]
const newColors = ["red","brown"]
allColors.push(...newColors) //push คือคำสั่งเพิ่มข้อมูลเข้าไป

console.log(data)
console.log(allColors)