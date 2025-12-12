const promisedata=new Promise((resolve,reject)=>{
  setTimeout(() => {
    let error=true;
    if(!error){
      resolve({name:"Mohit",pass:"344"});
    }
    else{
      reject("Somethingwent wrong");
    }
  }, 1000);
})

async function getdata() {
  try{
    const responce= await promisedata;
    console.log(responce);
  }
  catch(error){
    console.log(error);
  }
}

getdata();