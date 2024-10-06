// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a, b){
  // a^b
  let result = 0
  if (b === 0) { return 1 }

  result += a * power(a, b - 1)

  return result
}
