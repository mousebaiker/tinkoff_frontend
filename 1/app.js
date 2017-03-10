var first_string=prompt('Enter first string').toLowerCase();
var second_string=prompt('Enter second string').toLowerCase();

var first_sorted = first_string.split("").sort();
var second_sorted = second_string.split("").sort();
check(first_sorted, second_sorted);
function check(first_sorted, second_sorted) {
  for (int i = 0; i < first_sorted.length(); ++i) {
    if (first_sorted[i] != second_sorted[i]) {
        alert("Strings are not anagrams.");
      return;
    }
  }
  if (first_string.length()===second_string.lenght()){
    alert("Strings are anagrams.");
  }
  else {
    alert("Strings are not anagrams.");
  }
}
