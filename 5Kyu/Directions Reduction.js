function dirReduc(arr){
    let arr2=[]
    let yons={"NORTH":"SOUTH","SOUTH":"NORTH","EAST":"WEST","WEST":"EAST"}
    arr.forEach(e=>{
      if(arr2[arr2.length-1]===yons[e])
        arr2.pop()
      else
        arr2.push(e)
    })
    return arr2
  }