
//const tinderuser = new Object() //singleton object
const tinderuser={}  //non singleton object
tinderuser.id-="123"
tinderuser.name="Sam"
tinderuser.isLoggedIn=false

console.log(tinderuser);

const regularuser={
    email :"someuser@gmail.com",
    fullname:{
        firstname:"Sagnik" , //between object nested , we need ',' comma 
        lastname:"Mitra"
    }
}
console.log(regularuser.fullname);
const obj1={1:'a',2:'b'}
const obj2={3:'d',4:'d'}

//Using Object.assign operator
//const obj3=Object.assign({},obj1,obj2) //Object.assign(target,source)
//Using spread operator
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(tinderuser));  //returns keys in array form
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn')); 
//Object.hasOwnProperty() whether a particular attribute is present 

const course={
    coursename:'javascript',
    price:'999',
    instructor:'Youtube'
}
//course.coursename
const{instructor:inst}=course  //extract instructor from course
console.log(inst);
//Object Destructuring in js


//Promise in javascript
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        //console.log('Async task is compelete');
        resolve({username:"chai",email:'chai@example.com'})  //pass parameters into resolve as objects
    }, 1000)
})

promiseOne.then(function(user){
    console.log(user);
})


const user={
    username:'meranaam',
    logincount:4,
    singnedin:true,

    getUserDetails(){
        console.log(`Username : ${this.username}`);
        console.log(this);  
    }
}

function User(username,count,signedin){
    username=this.username;
    count=this.count;
    signedin=this.signedin;

    return this;
}
const userone=User('a',3,false)
//multilpy(){}
//multiply.power=2;
//proptotype inheritance in javascript makes arrays, Strings,functions all correspond to object

function createUser(name,score){
    this.name=name;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++; //signifies score of current context
}
const chai=createUser('chai',25);
const tea=createUser('tea',250)

//javascript provides constructor function with 'new' keyword
