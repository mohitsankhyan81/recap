function calculate(a,b,cb){
  cb(a,b);
}

function add(x,y){
  console.log(x+y);
}

calculate(5,6,add);