/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    let arr = str.split('');
    let arr2 = [];
    
    if (arr.length % 2 == 1) {
      arr.push("_")
    }
    
    for(let i = 0; i < arr.length; i += 2) {
      arr2.push(arr[i] + arr[i+1])
    }
    
    return arr2
  }