function expandedForm(num) {
    num=num.toString()
    repeat=(str,t)=>{
      c=""
      for(let i=0;i<t;i++)
        c+=str
      return c;
    }
    c=""
    
    num.split('').reduce((a,b)=>{
      if(b!=0)
        c=c+b+repeat("0",num.length-1-a)+" + ";
      return ++a
    },0)
    c=c.substring(0, c.length - 3);
    return c;
    
  }