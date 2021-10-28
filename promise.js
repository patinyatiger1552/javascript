// สร้าง Promise

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

// Promise Hell
downloading(url1).then(function(result){
  console.log(result)
  downloading(url2).then(function(result){
    console.log(result)
    downloading(url3).then(function(result){
      console.log(result)
      downloading(url4).then(function(result){
        console.log(result)
      })
    })
  })
})




// Promise Them,catch,finally
downloading(url1)
.then(function(result){
  console.log(result)
  return downloading(url2)
})
.then(function(result){
  console.log(result)
  return downloading(url3)
})
.then(function(result){
  console.log(result)
  return downloading(url4)
})
.catch(function(err){
  console.log(err)
})
.finally(function(){
  console.log('เสร็จสิ้นการ Download')
})