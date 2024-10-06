function isPalindrome(str){
  // amanaplanacanalpanama => 처음이랑 마지막이랑 비교함
  // a(something)a => true
  // if (!재귀함수) return false

  let result = true

  function helper(str) {
    if (!result) {
      return false 
    }

    if (str.length === 1 || str.length === 2) {
      return true
    }

    if (str[0] !== str[str.length - 1]) {
      result = false
      return
    }
  }

  helper(str)
  return result
}