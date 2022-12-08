let calculator = {
    ed1: 0,
    ed2: 0,
    read : () => {
        const eded1= +prompt('eded 1-i daxil edin: ')
        const eded2= +prompt('eded 2-ni daxil edin: ')
        calculator.ed1 = eded1
        calculator.ed2 = eded2
    },
    sum: () => {
        return calculator.ed1 + calculator.ed2
    },
    sub: () => {
        return calculator.ed1 - calculator.ed2
    },
    mul: () => {
        return calculator.ed1 * calculator.ed2
    },
    div: () => {
        return calculator.ed1 / calculator.ed2
    }


};
calculator.read();
console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.div());
console.log(calculator.mul());