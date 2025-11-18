// const arr=[1,23,4,5,6];
// const
// arr.shift();
// arr.unshift();
// arr.unshift(4);
// console.log(arr);



const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,0];
console.log(arr1.concat(arr2));



// const arr=[1,2,3,4,5,6,7,9,5];
// const index5first=arr.indexOf(5);
// console.log(index5first);
// const index5last=arr.lastIndexOf(5);
// console.log(index5last)




// const arr=[1,2,3,4,5,66,7,8];// return if any balue is multiple of 33
//  const divisible=function(num){
//     return num%33==0;
//  }
// const answer=arr.find(divisible);
// console.log(answer);




const arr=[1,2,3,4,5,66,7,8];// return if any balue is multiple of 33
const answer= arr.find((num) => {
return num%33==0;
});
console.log(answer);



const arr=[1,2,3,4,5,66,7,8];// return if any balue is multiple of 33
const answer= arr.findIndex((num) => {
return num%33==0;
});
console.log(answer);



const arr=[1,2,3,4,5,66,7,8,66,66];// return if any balue is multiple of 33
const answer= arr.filter((num) => {
return num%33==0;
});
console.log(answer);



const fruits=["banan","mango","apple","kiwi","orange"]
const[,secondfruit,,fourthfruit]=fruits;
console.log(`2 ${secondfruit} 4  ${fourthfruit}`);  ` `