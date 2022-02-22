import math
def snail(snail_map):
    result=[]
    m=len(snail_map)
    r=m-1
    l=0
    u=0
    d=m-1
    for i in range(math.ceil(m/2)):
        print(u,d,r,l)
        result.extend(snail_map[u][l:r+1])
        u+=1
        
        for j in snail_map[u:d+1]:
            result.append(j[r])
        r-=1
        result.extend(snail_map[d][l:r+1][::-1])
        d-=1
        
        for j in snail_map[d:u-1:-1]:
            result.append(j[l])
        l+=1
    return result