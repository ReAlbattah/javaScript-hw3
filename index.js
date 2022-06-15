//Variables


let length=9;
let width=10;
console.log("The area of the rectangle is: " + length*width);

console.log("----------------------------------");

let celTemp=40;
console.log("The temperature in F  = "+ (celTemp*1.8)+32);

let fahTemp=40;
console.log("The temperature in C  = "+ (fahTemp-32)/1.8);

console.log("----------------------------------");

//For loop 
let numbers=[23,54,32,87,47];
let sum=0;
for (let index = 0; index < numbers.length; index++) {
    sum+=numbers[index];
}
console.log("Sum = "+sum);

console.log("----------------------------------");

let arr=[16,4,2,0,19,6];
console.log("The maximum number = " +Math.max(...arr));

console.log("----------------------------------");

let arr1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let revers=[];
for (let index = arr1.length-1; index >=0; index--) {
    revers.push(arr1[index]);
}
console.log(" Revers array = "+revers);

console.log("----------------------------------");

//Nested for loop

let a=6;
let s="";
for (let index = 1; index <=a; index++) {
  for (let j = 0; j < index; j++) {
     s+="*";
  }
  s+="\n";
}
console.log(s);

