def expanded_form(num):
    num=str(num)
    c=""
    for i in range(len(num)):
        if(int(num[i])!=0):
            c=c+num[i]+("0"*(len(num)-1-i))+" + "
    return c[:-3]