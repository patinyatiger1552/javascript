//  Splice & Slice การทำงาน
//  splice(ตำแหน่งที่จะลบ,จำนวณที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)
//  slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)


//  วิธีเขียน splice
const data = [10,20,30,40,50]
console.log(data)
data.splice(1,3,23)
console.log(data)

//  วิธีเขียน slice
const data1 = [100,200,300,400,500]
const lastData = data1.slice(1,3)

console.log(lastData)