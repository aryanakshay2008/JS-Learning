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


// Callback Hell
function getEmployeeName(callback){
    let data={name:'Akshay'};
    callback(data,getEmployeePerformance);
 }
 
 function getEmployeeDepartment(data,callback){
     data={...data,department:'IT'};
     callback(data);
 }
 
 function getEmployeePerformance(data){
     data={...data,performance:'Good'};
     console.log(data);
 }
 
 getEmployeeName(getEmployeeDepartment);
 
 // Promise - To resolve call back hell
 function getEmployeeName(){
     let data={name:'Akshay'};
     return new Promise((resolve,reject)=>{
         resolve(data);
     });
  }
  
  function getEmployeeDepartment(data){
      data={...data,department:'IT'};
      return new Promise((resolve,reject)=>{
         resolve(data);
     });
  }
  
  function getEmployeePerformance(data){
      data={...data,performance:'Good'};
      console.log(data);
  }
 
  getEmployeeName()
     .then((responseData) => getEmployeeDepartment(responseData))
     .then((responseData) => getEmployeePerformance(responseData))
     .catch((error)=> console.log(error));
 
 // Async Await - To resolve call back hell
 
 async function printEmployeeDetails()
 {
     const EmployeeName=await getEmployeeName();
     const EmployeeDepartment=await getEmployeeDepartment(EmployeeName);
     await getEmployeePerformance(EmployeeDepartment);
 }
 
 printEmployeeDetails();

const promise1 = new Promise((resolve, reject) => {
    const timer1 = setTimeout(() => {
      resolve('success')
    }, 3000)
  })
  const promise2 = promise1.then(() => {
    throw new Error('error!!!')
  })
  
  console.log('promise1', promise1)
  console.log('promise2', promise2)
  
  const timer2 = setTimeout(() => {
    console.log('promise1', promise1);
    console.log('promise2', promise2);
  }, 2000)

// Promise and Settimeout console.log
//https://medium.com/javascript-in-plain-english/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e