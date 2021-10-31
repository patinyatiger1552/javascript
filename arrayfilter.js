//  Array Filter
const data = [10,20,30,40,50]

const result = data.filter(e=>{
  return e>20
})

console.log(result)

// Array Filter ยกตัวอยย่างการใช้งานเก็บข้อมูลพนักงาน

const data1 = [
  {name:"devroger",salary:"70000",department:"programer"},
  {name:"ลอล่า",salary:"50000",department:"การตลาด"},
  {name:"เท่",salary:"65000",department:"programer"},
  {name:"จินนี่",salary:"55000",department:"บัญชี"},
  {name:"เลซี้",salary:"55000",department:"ดีไซน์เนอร์"}
]

const result1 = data1.filter(e => e.salary>50000).filter(e => e.department === "programer")
console.log(result1)