function filter_list(l) {
    list=[]
    l.forEach(i=>{
      if(typeof i=='number')
        list.push(i)
    })
    return list
  }