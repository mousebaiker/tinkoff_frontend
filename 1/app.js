var first_string=prompt('Enter first string').toLowerCase();
var second_string=prompt('Enter second string').toLowerCase();

var first_sorted = first_string.split("").sort();
var second_sorted = second_string.split("").sort();

if (first_string===second_string){
  alert("Strings are anagrams.");
}
else {
  alert("Strings are not anagrams.");
}
