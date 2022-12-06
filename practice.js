//2.4
const a = 5;
var b = 2;
let myName = "KKK";
// 변수만들때 let, const, var차이
// let 재선언 금지, 재할당 가능
// const 재선언 금지, 재할당 금지
// var 재선언 가능, 재할당 가능
// allways const, somtimes let, never var
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//2.5 Array
const weekend = ["mon","tue"];
weekend[0]="Mon";
weekend.push("wed");
console.log(weekend);

//2.6 Object
const player = {
    name: "nico",
    points: 10,
    fat: true,
    //2.7,2.8 function
    sayHello: function(nameOfPerson){
        console.log("Hello my name is " + nameOfPerson);
    },
};
console.log(player.name);
player.lastName = "Ko"; // 追加可能
console.log(player);

//2.7,2.8 function
player.sayHello("nico");


// null , undefined

//2.11 calculator
const calculator = {
    plus: function(a, b){
        const result = a + b;
        return result;
    },
    minus: function(a, b){
        const result = a - b;
        return result;
    },
    divide: function(a, b){
        const result = a * b;
        return result;
    },
    times: function(a, b){
        const result = a / b;
        return result;
    },
};

const plusResult = calculator.plus(2,3);

console.log(plusResult);

//2.13 conditionals

//prompt
const age = parseInt(prompt("How old are you?"));
//console.log(typeof age, typeof parseInt(age));
//console.log(age, parseInt(age));

if(isNaN(age)){
    // condition == ture
    console.log("Please write number");
} else {
    //condition == false
    
}


// 3.1, 3.2
// const title = document.getElementById("title");

// title.innerText = "Got you";
// console.dir(title);

const hellos = document.getElementsByClassName("hello");

const titles = document.getElementsByTagName("h1");

const helloh1 = document.querySelector(".hello h1") //CSS selector 
const helloh1All = document.querySelectorAll(".hello h1")
const hellofirsth1 = document.querySelector(".hello:first-child h1")

//hellofirsth1.style.color = "blue";

//3.4
function handleTitleClick() {
    console.log("title was clicked");
}

function handleMouseEnter() {
    console.log("mouse is here");
}

function handleMouseLeave() {
    console.log("mouse is gone");
}

//3.5
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    //body, head title
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    //body, head title
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline() {
    alert("No wifi!");
}



//3.4
//hellofirsth1.addEventListener("click", handleTitleClick);
hellofirsth1.onClick = handleTitleClick;
hellofirsth1.addEventListener("mouseenter", handleMouseEnter);
hellofirsth1.addEventListener("mouseleave", handleMouseLeave);

//3.5
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);


// 3.6
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     console.log(currentColor);
//     let newColor;

//     if (currentColor === "bule") {   
//         newColor = "tomato";
//     } else {
//         newColor = "bule";
//     }
//     console.log(newColor);
//     h1.style.color = newColor;
//     console.log(h1.style.color);
//     console.dir(h1);
// }

// h1.addEventListener("click", handleTitleClick);

//3.7
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked"
//     if(h1.className === clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleTitleClick);

//3.8
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked" // write style at css
     //7~11 h1.classList.toggle(clickedClass);
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
