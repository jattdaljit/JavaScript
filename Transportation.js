function rentalCarCost(d) {
 var cost = 40;
 if ( d >= 7 ) return cost*d -50;
 else if(d >=3) return cost*d - 20 ;
 else return cost*d;
}