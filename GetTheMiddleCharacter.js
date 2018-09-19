function getMiddle(s)
{
  var length = s.length;
  var str = "";
  if (length % 2 == 0 ) {
    str += s.charAt((s.length/2) - 1) + s.charAt(s.length/2);
  } else {
    str += s.charAt(s.length/2);
  }
  return str;
}