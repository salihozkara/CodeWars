function rgb(r, g, b){
    function pad(n) {
      if(n<0) return "00"
      else if(parseInt(n, 16)>255) return "FF"
      return (n.length < 2) ? ("0" + n) : n;
  }
    return (pad(r.toString(16))+pad(g.toString(16))+pad(b.toString(16))).toUpperCase()
  }