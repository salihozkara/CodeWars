function findMissingLetter(array)
{
  result=0
  array.reduce((a,b)=>{console.log(a,b);c=b.codePointAt ();c--;d=String.fromCharCode(c); if(a!=d)result=d;return b})
  return result;
}