const score = new Number(400);
console.log(typeof score);
//number.toString()
const othernumber =23.09475
console.log(othernumber.toPrecision(4));
//Math.floor(),MAth.round(),Math.ceil()
const min=10
const max=20  
console.log(Math.floor(Math.random()*10)+1);

let myDate =  new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())
//date is an object , months start with zero in js
let mycreatedDate= new Date("2023-1-14") // in "dd-mm-yyyy" format , month starts with month
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleDateString());

console.log(mycreatedDate.getTime());
let mydate =new Date
mydate.toLocaleString('default', { weekday: "long"})

//we can create array directly or arry object or push in array
//boolean if array.includes(9)

let myHeroes=['Thor','Spiderman'];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpidypower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log('Everything is nothing and Nothing is everything');
    
}

heroPower.hitesh()

const User={
    name:'User'
}

const Teacher ={
    name:"Teachername",
    id:"teacher'sId",
    isAssigned:true
}
const TASupport={
    name:"TASupport",
    TAid:'newTAid',
    onduty:false
}
Teacher.__proto__=User;
//old way of prototype assignment

Object.setPrototypeOf(Teacher,TASupport);
// new way of fixing

let anothername="ChaiAurCode   ";
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`); 
}

anothername.truelength();