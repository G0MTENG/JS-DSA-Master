function reverse(str){
  let result = ''

  function helper(input) {
    // 종료 조건
    if (input.length === 0) {
      return ''
    }
    // 로직
    result += input[input.length - 1]

    // 재귀 호출
    helper(input.slice(0, input.length - 1))
  }

  helper(str)  

  return result
}
