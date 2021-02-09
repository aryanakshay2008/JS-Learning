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