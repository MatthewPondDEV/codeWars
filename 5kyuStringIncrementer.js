/*Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

function incrementString(string) {
  let str = string;
  const lastCharacter = string.charAt(string.length - 1);
  const isLastCharacterInteger = !isNaN(parseInt(lastCharacter));
  if (!isLastCharacterInteger) {
    return string + "1";
  } else {
    let count = string.length - 1;
    let numbers = "";
    while (count >= 0) {
      const character = str.charAt(count);
      if (!isNaN(parseInt(character))) {
        numbers = str[count] + numbers;
        str = str.slice(0, -1);
        count--;
      } else {
        count = -1;
      }
    }
    let count2 = 0;
    let numberLength = numbers.length;
    let newNumberStr = numbers;
    while (count2 < numberLength - 1) {
      if (numbers[count2] == "0" && numbers[count2 + 1] != "9") {
        str = str + numbers[count2];
        newNumberStr = newNumberStr.substring(1);
        count2++;
      } else {
        count2 = numberLength + 1;
      }
    }
    let addedNum = Number(numbers) + 1;
    return str + addedNum.toString();
  }
}
