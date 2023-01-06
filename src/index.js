module.exports = function reverse (n) {
    return reverse1(n);
}

function reverse1(number){
    number = Math.abs(number);
    if (number == 0) {return 0};
    mm = [];
    while (number > 0) {
        c = number % 10;
        mm.push(c);
        number = (number - c) / 10;
    }
    ans = "";
    mm.forEach(element => {
        ans = ans + element;
    });

    return 1*ans;
}


