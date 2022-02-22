def clean_string(s):
    s=list(s)
    i=0
    while i<len(s):
        if s[i]=='#':
            s.pop(i)
            if i-1>=0 and i-1<len(s):
                s.pop(i-1)
            i=0
        else:
            i+=1
    
    return ''.join(s)