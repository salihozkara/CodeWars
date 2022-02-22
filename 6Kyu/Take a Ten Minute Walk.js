function isValidWalk(walk) {
    if(walk.length!=10) return false;
    k=0
    k2=0
    walk.forEach(w=>{
      if(w=='n')
        k++
      else if(w=='s')
        k--
      else if(w=='e')
        k2++
      else if(w=="w")
        k2--
    })
    return k==0&&k2==0
  }