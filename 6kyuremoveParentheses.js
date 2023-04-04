/*Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

*/







function removeParentheses(s){
  let ans = ""
  let counter = 0
  
  for(let val of s) {
    if (val == '(') {
      counter++
    }
    if (counter == 0) {
      ans = ans + val
    }
    if (val == ')') {
      counter--
    }
  }
  
  return ans
}