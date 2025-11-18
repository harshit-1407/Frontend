
function dispaly(){
    let arr=[1,3,4,5,6,7];
    console.log(arr);
}
dispaly();




function  sum(a,b){
    return a+b;
}
console.log(sum(2,4));



const sum=function(a,b){
    return a+b;
}
console.log(sum(4,7));






const multi=(a,b) =>{
    return a*b;
}
console.log(multi(4,6));




let num=4;
const evenOdd= (num) => num%2==0;



Const greeting=(name="Plaese enter you name while calling") =>{
    return hello
}






// infinten values in function
const sum=(a,b , ...rest) =>{
    let over
}




const calculator = (operator, a, b, ...rest) => {
  let numbers = [a, b, ...rest];
  if (numbers.length === 0) return "Enter numbers!";
  if (numbers.length > 3) return "Max 3 numbers allowed!";

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (operator === '+') result += numbers[i];
    else if (operator === '-') result -= numbers[i];
    else if (operator === '*') result *= numbers[i];
    else  result /= numbers[i];
  }

  return result;
};


console.log(calculator('*',1,3,6,7));
