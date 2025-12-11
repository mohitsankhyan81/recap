const promiseError=new Promise((resolve,reject)=>{
  setTimeout(() => {
    let error=false
    if(!error){
      resolve({username:"Mohit Sankhyan",password:"123"})
    }
    else{
      reject('error: Something went wrong')
    }
  }, 5000);
})

promiseError.then(function(user){
  console.log(user);
  return user.username
}).then(function(username){
  console.log(username)
}).catch(function(error){
  console.log(error)
}).finally(()=>console.log("Promise is completed"));