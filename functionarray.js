// push , pop , shift , unshift

// push คือคำสั่งเพิ่มข้อมูลเข้าไป
const data = [100,200,300]
data.push(...[500,1000,2000])
console.log(data)

// pop ลบ array ตัวสุดท้าย วิธีเขียน
data.pop()
console.log(data)

// shift การทำงาน คือการลบข้อมูลที่อยู่อันดับแรกออกไป
data.shift()
console.log(data)

// Unshift การใช้งาน คือการเพิ่มค่าข้อมูลตัวแรก

data.unshift(777)
data.unshift(9999)

console.log(data)