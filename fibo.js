function calculate_fibo(){
    var usre_input = document.getElementById("usreinput").value;
    var result = getNthPrime(usre_input);
    console.log(result)
    document.getElementById("fibo_result").innerHTML = result;
}

function fiborec(aaa) {
    if (aaa <= 2) {
        return 1;
    } else {
        return fiborec(aaa - 1) + fiborec(aaa - 2);
    }
}
function fibopoll(aaa) {
    if (aaa == 1) {
        return 0;
    } else if (aaa == 2) {
        return 1;
    }
    var a = 0
    var b = 1
    for (let i = 3; i <= aaa; i++){
        var c = a + b;
        a = b;
        b = c;
}
return b;
    }
