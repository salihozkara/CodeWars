function validBraces(braces){
    p={"(":")","{":"}","[":"]"}
    p2={")":"(","}":"{","]":"["}
    braces=braces.split("")
    p3=[]
    c=false
    for(let i=0;i<braces.length;i++){
      x=braces[i]
       if(x in p)
        p3.push(x)
      else{
        c=true
        a=p3.pop()
        if(a!==p2[x]){
          return false;
        }
      }
        
    }
   
    return c
  }