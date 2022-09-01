/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
    let newArr = str.split(' ')
    let returnArr = []
    newArr.forEach((val) => {
      returnArr.push(val.split('').reverse().join(''))
    })
    return returnArr.join(' ')
  }