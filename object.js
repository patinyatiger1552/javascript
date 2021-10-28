// ทำงานกับ object

// ตัวแปรเก็บข้อมูล
const customerName = "Devrogerstack"
const age = 23
const address = "Amnant"

// object step1 สร้าง object แบบปกติ
const customer1 = {
  customerName: "Patinya",
  age: 20,
  address: "ubon"
}
console.log(customer1)

/*object step2 สร้าง object แบบถ้ามีตัวแปรชื่อเก็บข้อมูลเหมือนกันไม่ต้องใส่ค่า value
 */
 const customer2 = {
  customerName,
  age,
  address,
}
console.log(customer2)

// object method step3
const customer3 = {
  customerName,
  age,
  address,
  showData(){
    console.log("ข้อมูลลูกค้าชื่อว่า =" + customerName)
  }
}

customer3.showData()