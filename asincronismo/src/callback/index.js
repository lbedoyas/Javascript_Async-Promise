function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6,2,sum));

function date(callbackNew){
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callbackNew(date);
    }, 4000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);