function sum(number) {
  var result = 0
  if (number !== undefined) {
    result = number
  }
  function insider(number) {
    if (arguments.length === 0) {
      return result
    }
    result += number
    return insider
  }

  return insider
}

console.log(sum()())
console.log(sum(1)())
console.log(sum(1)(2)())
console.log(sum(1)(2)(3)())
console.log(sum(1)(2)(3)(4)())
