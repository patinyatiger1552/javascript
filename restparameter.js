// Rest Parameter การทำงาน
summation = (...numberArr) => {
  let total = 0
  for(let number of numberArr) total += number // 0+100+500+1000
  return total
}

console.log(summation(100,500,1000))
console.log(summation(100,500,1000,2000))
console.log(summation(100,500,1000,2000,1500))