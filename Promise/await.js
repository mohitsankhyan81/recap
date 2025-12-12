async function getdata(){
  try{
    const responce=await fetch("https://jsonplaceholder.typicode.com/users");

    const data=await responce.json();
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
}

getdata();