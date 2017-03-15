function to_binary(number) {
	if (number === 1) {
  	return '1'
  }
	if (number === 0) {
  	return '0'
  }
  return to_binary(number>>1) + (number%2).toString();
}

console.log(to_binary(0))
console.log(to_binary(1))
console.log(to_binary(2))
console.log(to_binary(5))
console.log(to_binary(1000))
console.log(to_binary(1024))
