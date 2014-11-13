var leapYear = function(year){

if(Number.isInteger(year)== false){


return false;


}

if(year == 0){


return false;
}

 if(year % 400 == 0){
  return true;
}

if(year %4 == 0 && year % 100!== 0 && year %400 !== 0){
  return true;

}
return false;

};
