function collectStrings(obj) {
  const result = []

  function helper(obj) {
    const values = Object.values(obj)

    for (let i = 0; i < values.length; ++i) {
      const [value, valueType] = [values[i], typeof values[i]]
      if (valueType === 'string') {
        result.push(value)
      } else if (valueType === 'object') {
        helper(value)
      }
    }
  }
  helper(obj)

  return result
}
