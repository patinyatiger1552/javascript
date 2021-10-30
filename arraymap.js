// Array Map
const numbers = [10,20,30,40,50]
// console.log(`number = ${numbers}`)

const result = numbers.map(element => {
  const a = element*2
  return a
})

// console.log(`Array map = ${result}`)

// Array Map เขียนแบบลดรูป(เขียนแบบสั้น)

const numbers1 = [1, 2, 3, 4, 5]
const result1 = numbers1.map(e=>e*2)

// console.log(`Array map: ${result1}`)


// Array Map พร้อมกับบอกลำดับ index
const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]

const climate = data.map((e,i) =>{
    return `วันที่ : ${i+1} อากาศวันนี้ = ${e}`
})

// console.log(climate)

// object map วิธีเขียน
const data1 = [
  {day:"01/10/2564",weather:"แดดร้อน",temp:"27"},
  {day:"02/10/2564",weather:"ฝนตก",temp:"23"},
  {day:"03/10/2564",weather:"หมอก",temp:"18"}
]

const result2 = data1.map(e => {
  return e.weather
})

console.log(result2)


