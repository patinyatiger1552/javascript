// Function แบบเดิม
function fullname(fname,lname){
  return fname+lname
}
console.log(fullname('Patinya','pimpo'))

// Function Arrow (แบบใหม่่)

fullname =(fname,lname) => fname + lname
setAge =(age) => "Age = " + age

console.log(fullname('Devroger','Stack'))
console.log(setAge(20))
// (ไม่ต้องใส่ปีกกาหรือ return ก็ได้ในกรณีที่มีตำสั่งไม่เยอะ)

