
var factorial = function(a){

if(a <= 0 ){
  return null;

}

if(isFinite(a) && a > 0 && !Number.isInteger(a)){
  a = Math.floor(a);

}

if(Number.isInteger(a)){
  for(var i = a-1; i > 0 ; i ++){
    a = a * i
}
return a;

}
}
