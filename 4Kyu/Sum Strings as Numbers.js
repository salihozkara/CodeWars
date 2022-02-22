function sumStrings(a, b) 
{ 
 let stra = BigInt(a); let strb = BigInt(b); if (isNaN(a)|| isNaN(b)){ return (stra.toString(), strb.toString()); }else { let res = ((stra + strb).toLocaleString()); res = res.replace(/\./g,'').replace(/,/g , ''); return res; }

}