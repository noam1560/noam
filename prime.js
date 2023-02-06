function isprime(usreinput) {
    if (usreinput == 1){
        return false;
    }
    else if(usreinput == 2)
    {
        return true;
    }
    var nsqrt = Math.sqrt(usreinput)
    for(i = 2; i < nsqrt; i++ ){
        var mod = usreinput % i;
        if(mod == 0){
            return false;
        }
    }
    return true;
}
