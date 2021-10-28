// ทบทวน Async / await

const connect = true //ต่อเน็ตอยู่
const url1 = "Patinya.dev/flie1.json"
const url2 = "Patinya.dev/flie2.json"
const url3 = "Patinya.dev/flie3.json"
const url4 = "Patinya.dev/flie4.json"
const url5 = "Patinya.dev/flie5.json"

function downloading(url){
  return new Promise(function(resolve,reject){
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    setTimeout(() => {
      if(connect){
      resolve(`ดาวน์โหลด ${url} เรียบร้อย`)
    }else{
      reject('เกิดข้อผิดผลาด')
  }
    }, 1000);
})
}

async function start(){
  console.log(await downloading(url1))
  console.log(await downloading(url2))
}

start()