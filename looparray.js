// การ Loop array
// For Loop , ForEach , ForOf

// For Loop วิธีเขียน 
const data = [10,20,30,40,50,60,70,80,]
 for(let i = 0; i < data.length; i++){
    if (data[i]>=70) break
  //  console.log(`ลำตับที่ : ${i} = ${data[i]}` )
 }

 // ForEach Loop วิธีเขียน
 let sum = 0
 data.forEach(element =>{
   sum += element
  //  console.log(`สมาชิกใน Array data = ${element}`)
   console.log(`ผลรวม = ${sum}`)
 })

//  ForOf วิธีการเขียน

for(const element of data){
  if(element>=50) break
  console.log(`สมาชิก Array Data = ${element}`)
}