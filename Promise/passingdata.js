const promisedata=new Promise((resolve,reject)=>{
  setTimeout(() => {
     console.log("Data take time");
    resolve({Name:"mohit",email:"mohit@1125gmail.com"})
  }, 10000);
})

promisedata.then(function(user){
  console.log(user)
}) 