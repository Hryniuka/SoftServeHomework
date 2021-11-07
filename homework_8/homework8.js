//Task 1
function upperCase (value) {
    let testText = /^[A-Z]/;
    if (testText.test(value)){
        console.log(value + "String's starts with uppercase character")
    }
    else {
        console.log(value + "String's not starts with uppercase character")
    }
};

upperCase('regexp');
upperCase('RegExp');

//Task 2

function checkMail (){
    let regExp = /[A-Es-z0-9]/;
    return result
}
checkMail("Qmail2@gmail.com");

//task 3

function checkText(someText){
    let result =[];
    let regExp1 = /d{1}b+d{1}/i;
    let regExp1Test = regExp1.exec(someText)
    let regExp2 = /b+/i;
    let regExp2Test = regExp2.exec(someText)
    let regExp3 = /d/;
    let regExp3Test = regExp3.exec(someText)
    console.log(result = [`${regExp1Test}, ${regExp2Test}, ${regExp3Test}`])
}
//task 4
function changeText (someText) {
    let firstText = /\s\w+/;
    let secondText = /\w+\S/;
    let textReplace1 = firstText.exec(someText)
    let textReplace2 = secondText.exec(someText)

    console.log(`${textReplace1} ${textReplace2}`)
}
changeText("Java Script");

//task 5 
let cardNumber = prompt("Enter your card number", "9999-9999-9999-9999")
function bankCard (cardNumber) {
    let cardEx = /\d{4}(\s|-)\d{4}(\s|-)\d{4}(\s|-)\d{4}/;
    if(cardEx.test(cardNumber)){
        alert("Your card number is correct!")
    }
    else{
        alert("Please check your card number!")
    }
}

bankCard(cardNumber);

//task 6

function checkEmail (mail) {
    let firstTest = /\w+@\w+\.\w+/i;
    let secondTest = /(^#|^-|^_)/;
    let thirdTest = /-{2}/;
    let fourthTest = /_{2}/;

    if(secondTest.test(mail)){
        console.log(`${mail} Email is not correct!`)
    }
    else if(thirdTest.test(mail)) {
        console.log(`${mail} Email is not correct!`)
    }
    else if(fourthTest.test(mail)) {
        console.log(`${mail} Email is not correct!`)
    }
    else {
        console.log(`${mail} Email is correct!`)
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

// task 7 

function checkLogin (login){
    let loginEx = /\w+\d\.\d\w{2,10}/;
    let loginTest = loginEx.test(login);
    console.log(loginTest);
    let firstNum = login.match(/(\d\.\d|\d)/g);
    console.log(firstNum);

}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');