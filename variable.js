// ก่อน Run Program ให้ comment code ก่อน
//กาารเขียนแบบดั้งเดิม
var x = 10
if (x === 10){
  var y = 500
  console.log("y = " + y)
}
console.log("y = " + y)

//Block Scope (let/constant)

// let variable ตัวแปรเปลี่ยนค่าได้
let x = 10
let y = 50
if(x === 10){
  let y = 500
  console.log("y ใน = " + y)
}
console.log("y นอก = " + y)

// constant or const Variable ตัวแปรคงที่ไม่สามารถเปลี่ยนค่าได้
const x = 50
console.log(x)