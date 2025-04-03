const accId = 14453
let accountmail="mymail@gmail.com"
var accPassword="12345"

console.log(accId)
console.log(accountmail)
let score=""
console.log(typeof score);
console.log(null>0);
console.log(null==0);
console.log(null>=0);

//callbyvalue changes by copying the value
//Primitive types : String ,Number, Boolean,null, undefined,defined,Symbol,BigInt
//Reference Non-primitve : Arrays,Objects,Functions
const myfunction = function(){
    console.log("Hello World");    
}
const myname ="hitesh"
const count=8
console.log(`Hello my name is ${myname} and my repo count is ${count}`)

const formname = new String('Sagnikm03')
//this will be saved as key val pairs; 0-S,1-a,2-g,3-n,4-i,5-k ; length=9
console.log(formname.charAt(2));
console.log(formname.indexOf('m'));
const newStr=formname.substring(0,4)
//string.slice(-1) can take reverse values
const url ="https://helloworldcoding%20.com"
console.log(url.replace('%20','_'))
console.log(url.includes('codi'))

const varname="sagnik-mitra-vit-vellore"
console.log(varname.split('-'));

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    //a function in the class
    encryptpass(){
        return `${this.password}abcxyz`
    }
    changeUsename(){
        return `${this.username.toUpperCase()}`
    }
}
const chai= new User('chai','chai123@gmail.com','nopassword');
console.log(chai.encryptpass());
console.log(chai.changeUsename());
//for user i can use prototype as well is i say function User(username,email,pass){} 
//and for the methods ,i use User.prototype.method()
//check instance console.log(chai instanceof user)

document.querySelector('button').addEventListener('click',this.handleclick()).bind(this)
//handleclick function defined here 