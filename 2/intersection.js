function intersection(first, second) {
  var hash = {};
  for (var i = 0; i < first.length; ++i) {
    hash[first[i].toString()] = 1;
  }

  answer = []
  for (var i = 0; i < second.length; ++i) {
    if (hash[second[i].toString()] !== undefined) {
      answer.push(second[i])
    }
  }
  return answer
}
console.log(intersection([], []))
console.log(intersection([0, 1], []))
console.log(intersection([], [0, 1]))
console.log(intersection([0, 1, 2], [2, 3, 4]))
console.log(intersection([0, 1, 2], [0, 1, 2]))
console.log(intersection([0, 1, 2], [1000000000, 12, 10]))
