//task1
// for
let arr = [2, 3, 4, 5,];
let a = 1;
for (let i = 0; i < arr.length; ++i) {
    a *= arr[i];
}
alert(a);
// while
let arr = [2, 3, 4, 5,];
let a = 1;
let i = 0;
while (i < arr.length) {
a *= arr[i];
++i
} 
alert(a);
 
//task2

let i = 0;
for (let i = 0; i <= 15; i++) { 
if (i % 2 == 0) {
console.log ( i + ' is even');
} else 
console.log(i + ' is odd');
}

//task3
function randArray(k) {
 let arr = [];
 for (i = 0; i < k; i++) {
   arr [i] = Math.floor(Math.random() * 500) + 1;
 }
console.log (arr);
}
randArray (5);
  
//task4
  function raiseToDegree(a, b) {
    let result = a;
  
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  let a = prompt("ціле число a?", '');
  let b = prompt("ціле число b?", '');
  
  if (b < 1) {
    alert(`Степінь ${b} не підтримується, використовуйте ціле число`);
  }
  else {
    alert (a ** b);
  }

  //task5

  function findMin() {
    let min = arguments [0];
    for (i = 1; i < arguments.length; i++) {
    if (arguments [i] < min) {
      min = arguments [i];
    }
  } 
  return min;
  }
  console.log (findMin(12, 14, 4, -4, 0.2));
  
  //task6
  
  function findUnique(arr) {
    let x = arr.length;
    for (let i = 0; i < x; i++) {
      for (let j = (i + 1); j < x; j++) { 
        if (arr [i] === arr [j]) {
         return false; 
        }
     }
    }
    return true;
}
console.log (findUnique ([1, 2, 3, 5, 3]));  
  
//task7

function lastElem(arr, count) {
  if (count == null){
    console.log (arr.pop())
  } else {
    console.log (arr.slice(-count));
  }
}
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]


//task8

function letter (str) {
  let arr = str.split (' ');
  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    newArr.push (arr [i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join (' ');
}
console.log (letter('i love java script' ));