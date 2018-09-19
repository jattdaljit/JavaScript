// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var arrTrue = [];
  var arr = [];
  for( i =0 ; i< items.length ; i++) {
    if(pred(items[i])) {
      arrTrue.push(items[i]);
    } else {
      arr.push(items[i]);
    }
    }
    var index = arr.length;
    for ( i =0 ; i< arrTrue.length ; i++ ) {
         arr.push(arrTrue[i]);
    }
    for ( i = 0 ; i < items.length ; i++ ) {
      items[i] = arr[i];
    }
    return index;
}