var moveZeros = function (arr) {
    c=[]
    zeros=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==0)
        c.push(arr[i])
      else
        zeros.push(0)
    }
    c=c.concat(zeros)
    return c
  }