
// //task 1
// let openTab;
// function openWindow () {
//     openTab = window.open("", "task 1", "width=300,height=300");
// }

// openWindow ();
// function change () {
//     openTab.resizeTo(500, 500);
// }
// setTimeout (change, 2000);

// function moveWindow () {
//     openTab.moveTo(200,200); 
// }
// setTimeout (moveWindow, 4000);

// function closeWindow () {
//     openTab.close ();
// }
// setTimeout (closeWindow, 6000);



// //task 3
// let first = document.getElementById("btn1").onclick = function () {
//    document.body.style.background = "blue"
//     }

// let second = document.getElementById("btn2").ondblclick = function () {
//     document.body.style.background = "pink"
//      }

// function third () {
//     ocument.getElementById("btn3").addEventListener("mousedown",() =>{
//          document.body.style.backgroundColor ="brown";
//      })
//     document.getElementById("btn3").addEventListener("mouseup",() => {
//          document.body.style.backgroundColor ="white";
//      })
//      }
// third ()

// function linkA () {   
// document.getElementById("link").addEventListener("mouseover", () => {
//     document.body.style.backgroundColor ="yellow";
//     })
// document.getElementById("link").addEventListener("mouseout", () => {
//     document.body.style.backgroundColor ="white";
//     })
//     } 
// linkA ();



//task 4
// function DeleteValues() {
//         const selecList = document.querySelector("#selector");
//         for (let i = 0; i <= selecList.options.length; i++) {
//             if (selecList.options[i].selected) {
//                 selecList.removeChild(selecList.options[i]);
//                 break;
//             }
//         }
//     }
    
//     document.querySelector('#buttonDelete').addEventListener("click",DeleteValues);



//task 5
 
// let x = document.getElementById("liveButton");
// x.addEventListener ("mouseover", mouseOverFunction);
// x.addEventListener ("click", mouseClickFunction);
// x.addEventListener ("mouseout", mouseOutFunction);

// function mouseOverFunction () {
//     document.getElementById("myId").innerHTML += "Mouse on me! <br>";
// }
// function mouseClickFunction () {
//     document.getElementById("myId").innerHTML += "I was pressed! <br>";
// }
// function mouseOutFunction () {
//     document.getElementById("myId").innerHTML += "Mouse is not on me! <br>";
// }

//task 6

function sizeScreen(){
        let p = document.createElement("p");
        p.id = "screen";
        document.body.appendChild(p);
    
        window.addEventListener("resize",() => {
        let width = window.innerWidth;
        let height = window.innerHeight;    
        document.querySelector("#screen").innerHTML = ("width: " + width + " height: " + height);
        })
    } 
    sizeScreen();
