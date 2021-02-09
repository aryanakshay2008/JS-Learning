// var str="Hi I am Akshay Pawale";
// let arr=str.split('');
// arr=arr.reverse();
// var result=arr.join('');
// console.log(result);

// var sampleArr=[1,2,3,4];
// sampleArr.splice(0,sampleArr.length);
// console.log(sampleArr);

// var arr1=[1,2,3];
// var arr2=[1,2,3];

// console.log([...arr1,...arr2]);
// arr2.push(...arr1)
// console.log(arr2);


// //Find duplicate in array
// var arrWithDup=[1,7,5,8,1,3,3,4,5,6,4];
// console.log(arrWithDup);
// function getDuplicate(){
//     return this.filter((item,index,arr) =>{
//         return arr.includes(item,index+1);
//     });
// }

// console.log(getDuplicate.call(arrWithDup));

// //Unique duplicate
// function removeDuplicateGetUnique(){
//     return this.filter((item,index,arr) =>{
//         return !arr.includes(item,index+1);
//     });
// }

// console.log(removeDuplicateGetUnique.call(arrWithDup));

// //Remove duplicate
// function removeDuplicate(){
//     return this.filter((item,index,arr) =>{        
//          return arr.filter(itm => itm === item).length === 1;
//     });
// }

// console.log(removeDuplicate.call(arrWithDup));

// function timeout(){
//   setTimeout(function(){
//       alert("setTimeOut")
//   },5000);

//   setInterval(function(){
//       alert("setInterval");
//   },3000)
// }

// timeout();


// function binarySearch(arr, elem, start,end){

//     if(start > end) return false;

//     let mid = Math.floor((start + end)/2);

//     if(arr[mid]===elem) return true;

//     if(arr[mid]>elem)  return binarySearch(arr,elem,start,mid-1);

//     else return binarySearch(arr,elem,mid+1,end);
// }

// let arr123 = [1, 3, 5, 7, 8, 9]; 
// let x = 5; 

// console.log(binarySearch(arr123,x,0,arr.length-1));

// console.log(1); 
// setTimeout(function(){console.log(2)}, 1000); 
// setTimeout(function(){console.log(3)}, 0); 
// console.log(4);  

// for(let i=0; i<5;i++)
// {
//     setTimeout(() => {
//         console.log(i)
//     }, 5000);
// }


// for(var i=0; i<5;i++)
// {
//     delay(i);
// }

// function delay(i){
//     setTimeout(() => {
//         console.log(i)
//     }, 5000);
// }

// var b = 1;
// function outer() {
//     var b = 2
//     function inner() {
//         b++; 
//         var b = 3;
//         console.log(b)
//     } 
//     inner();
// } 
// outer(); 

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//     {
//       bar: "hello"
//   };
// }

// var multiply = function (x,y){
//  return x*y;
// }

// var multiplyByTwo = multiply.bind(this,2);
// console.log(multiplyByTwo(3));

// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }



// function getSum50Items(arr,sum){

//   var result=[];

//   arr.forEach(function(element,index,subarr){
//     subarr.forEach((subElement,subIndex) =>{
//         if(subIndex>index && (element+subElement)===sum)
//         {
//           result.push({element,subElement});
//         }
//     });
//   });

//   console.log(result);
// }

// getSum50Items([10,20,25,25,30,40,50],50);

// let twoSum = (array, sum) => {
//   let hashMap = {},
//     results = []

//       for (let i = 0; i < array.length; i++){
//           if (hashMap[array[i]]){
//               results.push([hashMap[array[i]], array[i]])
//           }else{
//               hashMap[sum - array[i]] = array[i];
//           }
//         }
//         return results;
//   }
// console.log(twoSum([10,20,10,40,50,60,70,30],50));

// var object = {
//   firstName: 'Akshay',
//   lastName: 'Pawale',
//   address:'Mumbai',
//   Zip:'12345'
// };

// var {firstName,lastName,...personalDetails}=object;

// console.log(firstName);
// console.log(lastName);
// console.log(personalDetails);

// const constantObj={
//   wheel:4,
//   color:'red'
// }

// constantObj.color='yellow';

// console.log(constantObj);


// let a=120;
// var a=10;


// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }
//         else{
//             return a;
//         }        
//     }
// }

// console.log(sum(1)(2)(3)(4)());

// function multiplyFn(a){
//     return function (b){
//         return a*b;
//     }
// }

// console.log(multiplyFn(3)(4));

// function counter(){
//     var counter=0;

//     return function (countBy){
//         counter=counter+countBy;

//         console.log(counter);
//     }
// }

// var incrementCount=counter();

// incrementCount(1);
// incrementCount(2);
// incrementCount(3);

// function fibonacci(num) 
//     {    
//         if(num==1) 
//             return 0; 
//         if (num == 2) 
//             return 1; 
//         return fibonacci(num - 1) + fibonacci(num - 2); 
//     } 

// console.log(fibonacci(8))

// function fibo(num)
// {
//     var num1=0;
//     var num2=1;
//     var sum;

//     for(var i=1;i<num;i++){
//         console.log(num1);
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//     }

//     return num1;

// }

// console.log(fibo(8));

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = 1; i <= n; i++){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }



// function factorial(n){
//     //base case
//     if(n == 0 || n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }

// function bubbleSort(arr){
//     var len=arr.length;

//     for(var i=0;i<len;i++){
//         for (var j=0;j<len;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }

//     console.log(arr);
// }

// bubbleSort(["red", "black", "white", "black", "black", "red", "white"]);


// //Polyfill for map

// Array.prototype.myMap=function (callback)
// {
//     let newArray=[];
//     this.forEach(element => {
//         newArray.push(callback(element));        
//     });
//     return newArray;
// }

// let ar=[1,2,3];

// console.log(ar.myMap((e)=> e*10));

// //Polyfill for Bind
// let employee={
//     name:'Akshay',
//     last:'Pawale'
// }

// function greeting(greetingmsg)
// {
//     console.log(greetingmsg+' '+this.name+' '+this.last);
// }

// var hiGreeting=greeting.bind(employee);
// hiGreeting('Hi');

// Function.prototype.myBind=function (...args){
//     let obj=this;
//     let params = args.slice(1);
//     return function(...args2){
//         obj.apply(args[0],[...params,...args2]);
//     }
// }

// var hiMyBindGreeting=greeting.myBind(employee);
// hiMyBindGreeting('Hi');

// //Polyfill for reduce
// let arr23=[1,5,7,9];

// console.log(arr23.reduce(add,56));

// function add(total,num){
//     return total=total+num;
// }

// Array.prototype.myreduce=function(callback,initialValue=0){
//     let currentArr=this;
//     let output=initialValue;     
//     this.forEach((e) => 
//     output = callback(output,e));
//     return output;
// }

// console.log(arr23.myreduce(add,56));

// // Polyfill for includes
// var arr=[1,2,3];

// var result=arr.includes(1);

// console.log(result);

// Array.prototype.myincludes=function(item,fromIndex=0){    
//     let arr=this.slice(fromIndex);
//     return this.filter(x => x===item).length > 0 ? true :false;
// }

// var myresult=arr.includes(1);
// console.log(myresult);

// //Deep Copy
// var A=[1,2.3,4];
// var B=JSON.parse(JSON.stringify(A));
// console.log(B);
// A.push(50);
// console.log(B);

// // Palindrome -- 2002

// function isPalindrome(str)
// {
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome('2002'));
// console.log(isPalindrome('2020'));

// function getPalindrome(str)
// {
//     let inputStr=str.split('');
//     //let reverseStr=JSON.parse(JSON.stringify(inputStr)).reverse();
//     let reverseStr=Array.from(inputStr).reverse();
//     return [...inputStr,...reverseStr].join('');
// }

// console.log(getPalindrome("20"));

let prom = new Promise((resolve, reject) => {
    let date = new Date().getDate();
    if (date % 2 == 0) {
        setTimeout(() => {
            resolve("I am success");
        }, 3000);
    }
    else {
        setTimeout(() => {
            reject("Not valid date");
        });
    }
});

prom.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});