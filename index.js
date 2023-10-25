//Task 1
let str = "Robin Singh"
let strs = str.split(" ")
console.log(strs);

//Task 2
console.log(str.slice(0, 4));

//Task 3
function hiddenEmail(email){
    let arr = email.split("@")
    let username = arr[0]
    let domain = arr[1]
    
    let hiddenUsername = username.slice(0, 5) + "..."
    let hiddenEmail = hiddenUsername + "@" + domain

    return hiddenEmail
}
console.log(hiddenEmail("Robin_Singh@example.com"));

//Task 4
function search_word(str, targetWord) {
    const words = str.split(' ');
    let count = 0;
  
    for (const word of words) {
      if (word === targetWord) {
        count++;
      }
    }
  
    return `'${targetWord}' was found ${count} times.`;
  }
  console.log(search_word('The quick brown fox', 'fox'));

//Task 5
function repeat_string(str, count) {
    if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
      return "Error in string or count!";
    }
    return str.repeat(count);
  }
  console.log(repeat_string('@', 4));
  console.log(repeat_string('@'));