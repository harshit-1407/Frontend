TASK 1
const a = prompt("enter your name");
alert("hello " + a);
document.write("<h1>Hello, " + a + "!<h1>");


TASK 2
const a = prompt("enter your age");
alert(typeof a);
if(a >= 18){
    document.write("<h1>eligible for vote");
}
else{
    document.write("<h1>not eligible for vote");
}

TASK 3
let b = '18';
let c = Number(b);
let d = 18;

console.log(typeof c);
console.log(b === d);

TASK 4
function calc(calculate, num1, num2){
    console.log(calculate(num1, num2));
}

function add(n1, n2){
    return n1 + n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

calc(add, 5, 10);
calc(multiply, 5, 10);


TASK 5
const arr= [1 ,2, 3, 4, 5, 6, 7, 8, ,9, 10];

const doubleArr = arr.map((num) => {
    return num * 2;
});

console.log(doubleArr);

TASK 6
const arr = [1,2,3,4,5,6,7,8,9];
const prime = (num) => {
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0 ) return false;
    }
    return true;
}
const primeArr = arr.filter(prime);
console.log(primeArr);



const body = document.querySelector("body");
const box = document.createElement("div");
const btn = document.createElement("button");
body.appendChild(box);
body.appendChild(btn);
btn.textContent = "click me";
box.style.height = "200px";
box.style.width = "200px";
box.style.backgroundColor = "cyan";