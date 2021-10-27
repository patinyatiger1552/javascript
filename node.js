// จากเดิม
const hello = function () {
  console.log('hello')
}
// เป็นแบบนี้
const hello = () => {
  console.log('hello')
}
// ถ้าบรรทัดเดียว แบบนี้ได้เลย มันจะ return ค่ากลับ
const hello = () => 'Hello'
const sum = (a, b) => a + b
// กรณี Arrow function ต้องการ return object จากปกติ
const getData = function () {
  return {
    id: 1,
    name: 'Test'
  }
}
// ใช้แบบนี้ได้ ใช้ปีกกา หุ้ม object
const getData = () => ({ id: 1, name: 'Test' })
// มีค่าเท่ากับ
const getData = () => {
  return {
    id: 1,
    name: 'Test'
  }
}
