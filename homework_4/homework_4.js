// task 1
function calcRectangleArea(length, width) {
    if (typeof length !== "number" || typeof width !== "number"){
        throw new Error("Some Error");
    }
    return length*width;
}
    try{
    console.log(calcRectangleArea(8, 10));
}
    catch (exception){
    console.log(exception.message);
}

// task 2

let user = prompt("Please enter your age:");
function checkAge(user){

    if (user === "" || user === null){
        throw new Error("The field is empty! Please enter your age");
    }
    else if (isNaN(user)){
        throw new Error("Error, please enter only number");
    }

    else if (+user <= 14){
        throw new Error("You to young");
    }
    return user;
}

try{
    let age = checkAge(user);
alert ("Your age:" + age);
}
catch(exception){
    alert(exception.message);
}

// task 3

class MonthException {
    constructor(message){
        this.MonthException = message;  
    }
}
function showMonthName(month){
        month = month - 1; 
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
        let whatMonth = new MonthException('Incorrect month number');
        if (months[month] != null) {
                return months[month];
        } else {
                return whatMonth;   
        }
        
    }
    
    try {
        console.log(showMonthName(2));
    } catch (exception) {
        console.log(exception.name + ':' + exception.message);
    }

// task 4

function showUser(id) {
    if (id < 0) {
        throw new Error('ID must not be negative:' + id);
    }
    return {id}
}
function showUsers(ids){
let arr = [];
        for (let i = 0; i < ids.length; i++) {
            try {
            arr[arr.length] = showUser(ids[i]);       
            } 
            catch (exception) {
                console.log(exception.message);
            }  
        }  
        return arr    
}
   console.log(showUsers([7, -12, 44, 22]));


