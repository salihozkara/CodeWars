var countBits = function(n) {
    s=0
    n.toString(2).split('').forEach(r=>{if(r==1)s++})
    return s
  };