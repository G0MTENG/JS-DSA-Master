function someRecursive(arr, fn){
  let result = false

  function callback(arr, fn) {
    // 얼리 리턴
    if (result) {
      return
    }

    // 종료조건
    if (arr.length === 0) {
      return 
    }
    // 로직    
    if (fn(arr[0])) {
      result = true
      return
    }

    // 재귀 호출
    callback(arr.slice(1), fn)
  }

  callback(arr, fn)
  return result
}