const promiseone=new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("Your details");
    resolve();
  }, 3000);
})


promiseone.then(()=>{
  console.log("This is the end");
})


new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("task aproves");
    resolve();
  }, 5000);
}).then(function(){
  console.log("task completed");
})


