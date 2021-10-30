// ค้นหาข้อมูลใน Array
// indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอ -1
// find(ข้อมูล)=> ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefind
// findIndex(ข้อมูล)=> ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["red","green","bule","dark","yellow"]

// indexof วิธีเขียน
const index = colors.indexOf("red")
console.log(index)

// find วิธีการเขียน
const search = colors.find(element=>element === "red")
console.log(search)

// findIndex วิธีการเขียน
const found = colors.findIndex(element=>element === "bule")
console.log(found)