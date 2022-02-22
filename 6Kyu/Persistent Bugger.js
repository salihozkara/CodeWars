function persistence(num) {
    s=0
    function multipy(num){
      s++
      numStr=num.toString()
      m=1
      for(let i=0;i<numStr.length;i++)
        m*=parseInt(numStr[i])
      if (m.toString().length>1){
        m=multipy(m)
      }
        
        
      return m;
    }
   if(num.toString().length>1)
     multipy(num)
   return s
 }