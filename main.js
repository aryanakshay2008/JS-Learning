var str="Hi I am Akshay Pawale";
let arr=str.split('');
arr=arr.reverse();
var result=arr.join('');
console.log(result);

var sampleArr=[1,2,3,4];
sampleArr.splice(0,sampleArr.length);
console.log(sampleArr);

var arr1=[1,2,3];
var arr2=[1,2,3];

console.log([...arr1,...arr2]);
arr2.push(...arr1)
console.log(arr2);


//Find duplicate in array
var arrWithDup=[1,7,5,8,1,3,3,4,5,6,4];
console.log(arrWithDup);
function getDuplicate(){
    return this.filter((item,index,arr) =>{
        return arr.includes(item,index+1);
    });
}

console.log(getDuplicate.call(arrWithDup));

//Unique duplicate
function removeDuplicateGetUnique(){
    return this.filter((item,index,arr) =>{
        return !arr.includes(item,index+1);
    });
}

console.log(removeDuplicateGetUnique.call(arrWithDup));

//Remove duplicate
function removeDuplicate(){
    return this.filter((item,index,arr) =>{        
         return arr.filter(itm => itm === item).length === 1;
    });
}

console.log(removeDuplicate.call(arrWithDup));

function timeout(){
  setTimeout(function(){
      alert("setTimeOut")
  },5000);

  setInterval(function(){
      alert("setInterval");
  },3000)
}

timeout();

console.log(1); 
setTimeout(function(){console.log(2)}, 1000); 
setTimeout(function(){console.log(3)}, 0); 
console.log(4);  

// Print i value
for(let i=0; i<5;i++)
{
    setTimeout(() => {
        console.log(i)
    }, 5000);
}
// Print i value - Decoupling in other function
for(var i=0; i<5;i++)
{
    delay(i);
}

function delay(i){
    setTimeout(() => {
        console.log(i)
    }, 5000);
}

var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++; 
        var b = 3;
        console.log(b)
    } 
    inner();
} 
outer(); 

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
    {
      bar: "hello"
  };
}

var multiply = function (x,y){
 return x*y;
}

var multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo(3));

function multiply(a){
    return function(b){
        return a*b;
    }
}


function getSum50Items(arr,sum){

  var result=[];

  arr.forEach(function(element,index,subarr){
    subarr.forEach((subElement,subIndex) =>{
        if(subIndex>index && (element+subElement)===sum)
        {
          result.push({element,subElement});
        }
    });
  });

  console.log(result);
}

getSum50Items([10,20,25,25,30,40,50],50);

let twoSum = (array, sum) => {
  let hashMap = {},
    results = []

      for (let i = 0; i < array.length; i++){
          if (hashMap[array[i]]){
              results.push([hashMap[array[i]], array[i]])
          }else{
              hashMap[sum - array[i]] = array[i];
          }
        }
        return results;
  }
console.log(twoSum([10,20,10,40,50,60,70,30],50));

var object = {
  firstName: 'Akshay',
  lastName: 'Pawale',
  address:'Mumbai',
  Zip:'12345'
};

var {firstName,lastName,...personalDetails}=object;

console.log(firstName);
console.log(lastName);
console.log(personalDetails);

const constantObj={
  wheel:4,
  color:'red'
}
constantObj.color='yellow';
console.log(constantObj);


let a=120;
var a=10;


function sum(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        else{
            return a;
        }        
    }
}

console.log(sum(1)(2)(3)(4)());

function multiplyFn(a){
    return function (b){
        return a*b;
    }
}
console.log(multiplyFn(3)(4));

function counter(){
    var counter=0;

    return function (countBy){
        counter=counter+countBy;
        console.log(counter);
    }
}
var incrementCount=counter();
incrementCount(1);
incrementCount(2);
incrementCount(3);

//Deep Copy
var A=[1,2.3,4];
var B=JSON.parse(JSON.stringify(A));
console.log(B);
A.push(50);
console.log(B);

// Var is premitive data type and array and object is reference datatype
var a=2;
var b=a;

b=4;
console.log(a);
console.log(b);