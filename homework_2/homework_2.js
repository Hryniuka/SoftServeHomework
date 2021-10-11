//TAsk1

let x = 1;
let y = 2;
let res1 = (1 + '2');
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (Boolean(x) + '2');
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = (1 < 2);
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = (x - 'y');
console.log(res4); // NaN
console.log(typeof res4); // "number"

//task2
let n  = prompt('enter the number', 'number');
if (n % 2 === 0 && n > 0) {
    message = 'парним додатним';
} else if (n % 7 === 0){
    message = 'кратним числу 7';   
} else { 
    message = 'false';
}

//task3
let user = [];

user [0] = 31;
user [1] = 'Tom';
user [2] = true;
user [3] = null;

console.log (user.length)

let number = prompt ('enter the number', 'number');

user [4] = number;

alert (user [4]);

user.shift ();

alert (user);

//task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
alert (cities.join("*"));

//task5
let isAdult = prompt ('Вкажіть свій вік?', '18');
if (isAdult >= 18) {
    alert ('Ви досягли повнолітнього віку');
} else {
    alert ('Ви ще надто молоді');
}

//task6

let a = +prompt ('Введіть довжину сторони трикутника', 'Число');
let b = +prompt ('Введіть довжину сторони трикутника', 'Число');
let c = +prompt ('Введіть довжину сторони трикутника', 'Число');


let p = (a + b + c) / 2;
let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));

if (s > 0 && s != NaN) {
alert( s.toFixed(3) );
} else{
    alert ('Incorrect data');
}


//task7
let time = new Date ();
hour = time.getHours();

// if, else if, else
if (hour <= 5) {
    alert ('Доброї ночі');
} else if (hour <= 11) { 
    alert ('Доброго ранку');
} else if (hour <= 17) { 
    alert ('Доброго дня');
} else  {
    alert ('Доброго вечора');
}

//?
message = (hour <= 5) ? 'Доброї ночі' : 
(hour <= 11) ? 'Доброго ранку' :
(hour <= 17) ? 'Доброго дня' :
'Доброго вечора'; 
alert (message);




