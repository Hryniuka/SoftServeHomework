//task_2
console.log('My surname is Hryniuka!');

//task3
let apple = 'green';
let tomato = 'red';
alert (apple);
alert (tomato);
apple = tomato;
alert (apple);
alert (tomato);

//task4
let x;
let userId = {
name: 'Tom',
age: 25,
isAdmin: true,
secondName: x,
experience: null,
};

//task5
let isAdult = confirm('Are you an adult?');
console.log (isAdult);

//task6
let name; 
let surname;
let studyGroup;
let yearOfBirth;
name = 'Roman';
surname = 'Hryniuka';
studyGroup = 'Lv-636.JS Core';
yearOfBirth = 1990;

let areYouMarried = false;

console.log (typeof yearOfBirth);
console.log (typeof areYouMarried);
console.log (typeof name);
console.log (typeof surname);
console.log (typeof studyGroup);

let nullVariable = null;
console.log(typeof nullVariable); 

let user;
console.log (typeof user);

//task7
let login = prompt('Enter your login?', 'User');
let email = prompt('Enter your email?', 'usermale@gmail.com');
let password = prompt('Enter your pasword?', 'qwerty');

alert (`Dear ${login}, your email is ${email}, your password is ${password}`);

//task8
 /*
 let secondPerHour = (60*60);
 let secondPerDay = (60*60*24);
 let secondPerMonth = (60*60*24*31);

alert (secondPerHour);
alert (secondPerDay);
alert (secondPerMonth);
*/
let sec = 60;
let min = 60;
let secondPerHour = (sec * min);
alert (secondPerHour);

let hour = 24;
let secondPerDay = (24 * secondPerHour);
alert (secondPerDay);

let day = 31;
let secondPerMonth = (31 * secondPerDay);
alert (secondPerMonth);
