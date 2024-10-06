function productOfArray(arr) {
  let result = 1

  function helper(helerInput) {
    // 종료 조건
    if (helerInput.length === 0) {
      return
    }

    // 로직
    result *= helerInput[0]

    // 재귀 호츌
    helper(helerInput.slice(1))
  }

  helper(arr)

  return result
}