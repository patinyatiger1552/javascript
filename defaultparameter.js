// Default parameter การทำงาน

// วิธีเขียน Default แบบเก่า
getDataCustomer = (customerName,customerAddress) => {
  if (!customerAddress) {
    customerAddress =  "กรุงเทพมหานคร"
  }

  const address = `ชื่อลูกค้า : ${customerName}
  ที่อยู่ : ${customerAddress}`
  return address
}

console.log(getDataCustomer("Patinya"))
console.log(getDataCustomer("DevrogerStack","ubon"))


// วิธีเขียน Default แบบใหม่ (ควรใช้)
getDataCity = (cityDistrict,cityProvince = "กรุงเทพมหานคร") => {
  const city = `อำเภอ : ${cityDistrict}
  จังหวัด : ${cityProvince}`
  return city
}

console.log(getDataCity("บางประกง"))
console.log(getDataCity("เสนางคนิคม","อำนาจเจริญ"))