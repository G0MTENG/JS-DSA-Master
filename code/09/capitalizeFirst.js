const toUpper = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

function capitalizeFirst (arr) {
  const result = []

  function helper(arr) {
    // 종료 조건
    if (arr.length === 0) {
      return 
    }

    // 로직
    result.push(toUpper(arr[0]))
    // 재귀호출

    helper(arr.slice(1))
  }
  helper(arr)

  return result
}
