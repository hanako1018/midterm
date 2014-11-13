var fizzbuzz = function(a){

var counter = a;

if(counter % 3 == 0 && counter % 5 == 0 ){
  return "fizzbuzz";


};

if(counter % 5 == 0){

  return "buzz";
};


if(counter % 3 == 0){
  return "fizz";

}else{
  return a;

}
};
