function func(){
    console.log("This is a function call");
    
}
func()
//in a function defintion after the return statement is written , as code is unreachable code 
function addTwoNums(number1, number2){
    let res=number1+number2
    return res
}
let result= addTwoNums(8,4)
console.log("Result is : ",result);



function loginmessage(username){
    if(username === undefined){
        console.log('Please enter a valid username');
        return
    }
      
   return `${username} just logged in `
    
}


console.log(loginmessage('Sagnik'));
//function parameter as (...num) this can denote both rest and spread operator just that use cases are different
function calculateArray(...num1){
  return num1;
}
//passing object in function
console.log(calculateArray(100,200,44,556));
const user={
    username:"product1",
    price:"999"

}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
handleObject({
    username:"sam",
    price:"788"

})
//{} are function or looping scope
//var has global scope
let a=500
var b=89
function myfunc(){
    let a=5
    const b=67
    var c=66
    console.log('Inner', a);
    console.log('Inner ',b);   
}
myfunc()
console.log('Outer',a);
console.log('Outer',b);

const newuser={
    name:"Helloworld",
    userid:"12bcf",
    num:"678894",

    //we put a comma and write a func in this 
    welcomeuser(){
        console.log(`Welcome ${this.name}, to the website , this is your user id ${this.userid}`);
        
    }
}
newuser.welcomeuser()

const chai = ()=>{

}
const addtwo =(num1,num2)=>num1+num2
console.log(addtwo(7,8));
//or
const addtwo2 = (num1,num2) => (num1 + num2)

const addtwo3 =(num1,num2)=>{
    return num1+num2
}
console.log(addtwo3(7,3));
//for a function we need to return an object only by wrapping it in curly braces {}
//To prevent pollution from global scole variables/elements we use IIFE 
//Immediately Invoked Function Expresiions

(function chai(){
    console.log('DataBase is Connected');
    
})();
//needs a semicolon to end 
const userloggedin = true;
const userdebitcard= true;
const score =500;
if(!userloggedin && userdebitcard){
    console.log("Proceed to buy course");    
}
else if(userloggedin || score<450){
    console.log("Check Balance Of User");
    
}
else {
    console.log("Back to Home Page");
    
}
const month='may'
switch (month) {
    case 'june':
        console.log('January');
        break;
    case 'july':
        console.log('February');
        break;
    default:
        console.log('March');
        break;
}
//truthy and falsey 
//an empty string is not true but an empty array [] is accepted as if(true)

//truthy "0"
//truthy '0'
//falsy 0
//string is truthy , empty string , empty functions, empty array is truthy
//rather check array.length===0

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}
//NULL COALESCING OPERATOR ; DOES NULL CHECKS ON VALUES (??)
let val1;
val1=5??10;
console.log(val1);

let val2;
val2=null??34;
console.log(val2);
//ternary operator 
//condition ? true : false;

let newscore = 1

do {
    console.log(`Score is ${newscore}`);
    newscore++;
}while(newscore<=19);