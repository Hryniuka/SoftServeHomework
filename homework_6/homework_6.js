// task 1
document.getElementById("test").innerHTML = "Last";
document.body.childNodes[1].innerHTML = "Last";

// task 2
let b = document.body;
let img = b.childNodes[3];
let cat = img.removeAttribute("src");
cat = img.setAttribute("src", "cat.jpg");

// task 3
let x = text.querySelectorAll("p");
for (let i = 0; i < x.length; i++){
    let current = x[i].innerHTML;
    console.log ("Selector text" + [i] + ": " + current);
}

// task 4
let lists = list.querySelectorAll ("li");

let message1 = list.children[0].innerHTML;
let message2 = list.children[4].innerHTML;
let message3 = list.children[1].innerHTML;
let message4 = list.children[3].innerHTML;
let message5 = list.children[2].innerHTML;

console.log ("Result: " + message1 +","+ message2 +","+ message3 +","+ message4 +","+ message5);

let lists = list.querySelectorAll ("li");

let message1 = list.firstElementChild.innerHTML;
let message2 = list.lastElementChild.innerHTML;
let message3 = list.firstElementChild.nextElementSibling.innerHTML;
let message4 = list.lastElementChild.previousElementSibling.innerHTML;
let message5 = list.childNodes[5].innerHTML;

console.log ("Result: " + message1 +","+ message2 +","+ message3 +","+ message4 +","+ message5);

//task 5

let hTag = document.body.children[6];

let styleH = hTag.style.backgroundColor = "green";

let divTag = myDiv.querySelectorAll("p");
let p1 = myDiv.children[0].style.fontWeight = "bold" ;
let p2 = myDiv.children[1].style.color = "red" ;
let p3 = myDiv.children[2].style.textDecoration = "underline" ;
let p4 = myDiv.children[3].style.fontStyle = "italic" ;

let ulTag = myList.querySelectorAll("li"); 
for(let i=0; i<ulTag.length; i++){
    myList.children[i].style.listStyleType = "none";
    myList.children[i].style.display = "inline-flex"
}

let spanTag = document.body.children[9];
let sapnOpacity = spanTag.style.opacity = "0";

// task 6

let text1 = prompt("text1", "Please enter your text");
let text2 = prompt("text2", "Please enter your text");
let inpt1 = document.getElementById("input1");
let inpt2 = document.getElementById("input2"); 

inpt1.value = text1;
inpt2.value = text2;

let inpt1Value = inpt1.value;
let inpt2Value = inpt2.value;
inpt1.value = inpt2Value
inpt2.value = inpt1Value

