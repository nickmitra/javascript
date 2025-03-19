
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