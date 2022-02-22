function firstNonRepeatingLetter(s) {
    let t=s[0]
    let i2=0
    let i=0
    while(i<s.length){
      if((t===s[i] || t===s[i].toUpperCase() || t===s[i].toLowerCase())&&i!=i2)
        {
          t=s[++i2]
          i=0
        }else
          ++i;
    }
    return t===undefined?'':t
  }