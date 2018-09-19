function printArray(array){
  var str = "";
  for(i = 0 ; i < array.length ; i++) {
    str += array[i] ;
    if ( i == array.length-1) { 
    break;
    } else { 
    str += ",";
    }
  }
  console.log(str);
  return str;
}