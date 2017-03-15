function collect(current_result, element) {
  return current_result.concat(element)
}

function ravel(array) {
  return array.reduce(collect, [])
}

console.log(ravel([]))
console.log(ravel([0, 1, 2]))
console.log(ravel([[0, 1], [2, 3]]))
console.log(ravel([[0, 1], 2]))
console.log(ravel([[1,2], [3,4,5], [6]]))
