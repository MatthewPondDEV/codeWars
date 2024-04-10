/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  let array1 = text.split("");
  for (let i = 0; i < n; i++) {
    let odd = [];
    let even = [];
    for (let j = 0; j < array1.length; j++) {
      j % 2 === 0 ? even.push(array1[j]) : odd.push(array1[j]);
    }
    array1 = odd.concat(even);
  }
  return array1.join("");
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }
  let array1 = encryptedText.split("");
  for (let i = 0; i < n; i++) {
    let arr = [];
    let odd = array1.slice(0, array1.length / 2);
    let even = array1.slice(array1.length / 2, array1.length);
    for (let j = 0; j < array1.length; j++) {
      j % 2 === 0 ? arr.push(even[j / 2]) : arr.push(odd[(j - 1) / 2]);
    }
    array1 = arr;
  }
  return array1.join("");
}
