var str="Hi I am Akshay Pawale";
let arr=str.split('');
arr=arr.reverse();
var result=arr.join('');
//console.log(result);

var sampleArr=[1,2,3,4];
sampleArr.splice(0,sampleArr.length);
//console.log(sampleArr);

var arr1=[1,2,3];
var arr2=[1,2,3];

//console.log([...arr1,...arr2]);
arr2.push(...arr1)
//console.log(arr2);


//Find duplicate in array
var arrWithDup=[1,7,5,8,1,3,3,4,5,6,4];
//console.log(arrWithDup);
function getDuplicate(){
    return this.filter((item,index,arr) =>{
        return arr.includes(item,index+1);
    });
}

//console.log(getDuplicate.call(arrWithDup));

//Unique duplicate
function removeDuplicateGetUnique(){
    return this.filter((item,index,arr) =>{
        return !arr.includes(item,index+1);
    });
}

//console.log(removeDuplicateGetUnique.call(arrWithDup));

//Remove duplicate
function removeDuplicate(){
    return this.filter((item,index,arr) =>{        
         return arr.filter(itm => itm === item).length === 1;
    });
}

//console.log(removeDuplicate.call(arrWithDup));

function timeout(){
  setTimeout(function(){
      //alert("setTimeOut")
  },5000);

  setInterval(function(){
      //alert("setInterval");
  },3000)
}

timeout();


function binarySearch(arr, elem, start,end){

    if(start > end) return false;

    let mid = Math.floor((start + end)/2);

    if(arr[mid]===elem) return true;

    if(arr[mid]>elem)  return binarySearch(arr,elem,start,mid-1);

    else return binarySearch(arr,elem,mid+1,end);
}

let arr123 = [1, 3, 5, 7, 8, 9]; 
let x = 5; 

//console.log(binarySearch(arr123,x,0,arr.length-1));

console.log(1); 
setTimeout(function(){console.log(2)}, 1000); 
setTimeout(function(){console.log(3)}, 0); 
console.log(4);  