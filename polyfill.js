//Polyfill for map
Array.prototype.myMap=function (callback)
{
    let newArray=[];
    this.forEach(element => {
        newArray.push(callback(element));        
    });
    return newArray;
}

let ar=[1,2,3];

console.log(ar.myMap((e)=> e*10));

//Polyfill for Bind
let employee={
    name:'Akshay',
    last:'Pawale'
}

function greeting(greetingmsg)
{
    console.log(greetingmsg+' '+this.name+' '+this.last);
}

var hiGreeting=greeting.bind(employee);
hiGreeting('Hi');

Function.prototype.myBind=function (...args){
    let obj=this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

var hiMyBindGreeting=greeting.myBind(employee);
hiMyBindGreeting('Hi');

//Polyfill for reduce
let arr23=[1,5,7,9];

console.log(arr23.reduce(add,56));

function add(total,num){
    return total=total+num;
}

Array.prototype.myreduce=function(callback,initialValue=0){
    let currentArr=this;
    let output=initialValue;     
    currentArr.forEach((e) => 
    output = callback(output,e));
    return output;
}

console.log(arr23.myreduce(add,56));

// Polyfill for includes
var arr=[1,2,3];
var result=arr.includes(1);
console.log(result);

Array.prototype.myincludes=function(item,fromIndex=0){    
    let arr=this.slice(fromIndex);
    return this.filter(x => x===item).length > 0;
}

var myresult=arr.includes(1);
console.log(myresult);