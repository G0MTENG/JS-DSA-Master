function stringifyNumbers(obj) {
  function helper(obj) {
    const entries = Object.entries(obj)
    const newObj = {}

    for (const [key, value] of entries) {
      if ( typeof value === 'number' ) {
        newObj[key] = `${value}`
      } else if ( typeof value === 'object' && !Array.isArray(value) ) {
        newObj[key] = helper(value)
      } else {
        newObj[key] = value
      }
    }

    return newObj
  }
  return helper(obj)
}