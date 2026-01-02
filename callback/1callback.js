function execouteAfterdelay(callback){
  console.log("Task Start");
  setTimeout(() => {
    callback();
  }, 3000);
}

function showMessege(){
  console.log("Callback function executed");
}

execouteAfterdelay(showMessege);