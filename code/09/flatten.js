function flatten(arr){
  let result = []

  for (let i = 0; i < arr.length; ++i) {
    if (typeof arr[i] === "number") {
      result.push(arr[i])
    } else {
      result = [...result, ...flatten(arr[i])]
    }
  }

  return result
}