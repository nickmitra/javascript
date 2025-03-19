//aarays pusged using.out() , .concaeconst
//arr.isArray()
const realarray=[1,2,3,[4,5],[2,6,7],8,9]
const anotherarr= realarray.flat(5)
console.log(anotherarr);

console.log(Array.from("VelloreTownship"));

let s1=100
let s2=233
let s3=700
console.log(Array.of(s1,s2,s3));

//Maps in JavaScript are unique
const map= new Map();
map.set('IN','India')
map.set('UK','United Kimgdom')
map.set('DU','Dubai')

//console.log(map);
const coding =['a','ab','abc','abcd','abcd']
function print(item){
    console.log(item);
    
}
coding.forEach(print);

const myobject2 =[
    {
        language:'kotlin',
        languagename :'kot'
    },
    {
        language:'javascript',
        languagename :'java'
    },
    {
      language :'java',
      languaename:'java'
    }
];
myobject2.forEach( (item)=>{
    console.log(item.languaename);

})

const maps=[1,2,3,4,5,6,7,8,9,10]
const newnums= maps.filter((num)=>num>6);
console.log(newnums);
// filter() uses a callback function to have a conditional function over each item
//const number.forEach(()=>{})

//let userbooks=Books.filter((bk)=>bk.genre==='science')
//userbooks=Books.filter((bk)=>{ return bk.publish>=2010})

const num2 = maps.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=20);
console.log(num2);

const mytotal =num2.reduce(()=>(acc,curr)=> acc+curr,0);


