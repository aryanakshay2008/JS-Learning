// Fibonacci Series
function fibonacci(num) 
    {    
        if(num==1) 
            return 0; 
        if (num == 2) 
            return 1; 
        return fibonacci(num - 1) + fibonacci(num - 2); 
    } 

console.log(fibonacci(8))

function fibo(num)
{
    var num1=0;
    var num2=1;
    var sum;

    for(var i=1;i<num;i++){
        console.log(num1);
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }

    return num1;
}

console.log(fibo(8));

// Factorial
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = 1; i <= n; i++){
        answer = answer * i;
      }
      return answer;
    }  
  }

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

// Palindrome -- 2002

function isPalindrome(str)
{
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('2002'));
console.log(isPalindrome('2020'));

function getPalindrome(str)
{
    let inputStr=str.split('');
    //let reverseStr=JSON.parse(JSON.stringify(inputStr)).reverse();
    let reverseStr=Array.from(inputStr).reverse();
    return [...inputStr,...reverseStr].join('');
}

console.log(getPalindrome("20"));

// Binary search
function binarySearch(arr, elem, start,end){

    if(start > end) return false;

    let mid = Math.floor((start + end)/2);

    if(arr[mid]===elem) return true;

    if(arr[mid]>elem)  return binarySearch(arr,elem,start,mid-1);

    else return binarySearch(arr,elem,mid+1,end);
}

let arr123 = [1, 3, 5, 7, 8, 9]; 
let x = 5; 

console.log(binarySearch(arr123,x,0,arr.length-1));

// Bubble sort
function bubbleSort(arr){
    var len=arr.length;

    for(var i=0;i<len;i++){
        for (var j=0;j<len;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort(["red", "black", "white", "black", "black", "red", "white"]);