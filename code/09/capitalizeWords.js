function capitalizeWords(arr) {
  const result = []

  if (arr.length === 0) {
    return result
  }

  result.push(arr[0].toUpperCase())

  return result.concat(capitalizeWords(arr.slice(1)))
}