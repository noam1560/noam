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

function getNthPrime(nth) {
    var counter = 0;
    var i = 2;
    while (counter <= nth){
        if (isprime(i)){
            counter++;
        }
        i++;
    }
    return --i;
}