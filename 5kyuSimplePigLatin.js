/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


function pigIt(str){
  const pLEnding = 'ay'
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let arr = str.split(' ')
  let ansArr = []
  arr.forEach((word) => {
    if(alphabet.includes(word[0]) === true) {
      let arr2 = word.split('')
      arr2.push(arr2[0])
      arr2.push(pLEnding)
      arr2.shift()
      ansArr.push(arr2.join(''))
    } else {
      ansArr.push(word)
    }
  })
  return ansArr.join(' ')
}