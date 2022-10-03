/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/


function duplicateEncode(word){

    let arr = word.toLowerCase().split('')
    let result = ""
    
    arr.forEach((val) => {
      let count = 0;
      
      arr.forEach((val2) => {
        if (val == val2) {
          count++
        }
      })
      
      if (count > 1) {
        result = result + ")"
      } else {
        result = result + "("
      }
    })
    
    return result
      
  }