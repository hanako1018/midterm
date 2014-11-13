
var factorial = function(a){

  if(isFinite(a) && a > 0 && !Number.isInteger(a)){
    a = Math.floor(a);
  }
   if(Number.isInteger(a) && a > 0){
    for(var i = a - 1; i > 0; i--){
      a = a * i;
    }
    return a;
   }
}

var counter = a;
if(counter <= 0){

return null;

};

};
