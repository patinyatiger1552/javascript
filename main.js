const fs = require('fs');

console.log('--START---')
fs.readFile('data.txt', 'utf-8', (error, data) => {
  console.log('data 1 >>>>', data)
})
fs.readFile('data.txt', 'utf-8', (error, data) => {
  console.log('data 2 >>>>', data)
})
console.log('--END--')
