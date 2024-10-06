function nestedEvenSum(obj) {
  let result = 0

  function helper(obj) {
    const values = Object.values(obj)

    if (values.length === 0) {
      return 0
    }
    
    for (let i = 0; i < values.length; ++i) {
      if ( typeof values[i] === 'number' && values[i] % 2 === 0) {
        result += values[i]
      } else if ( typeof values[i] === 'object' ) {
        helper(values[i])
      }
    }
  }
  helper(obj)

  return result
}