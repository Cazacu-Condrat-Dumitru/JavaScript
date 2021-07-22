function convert(fn, array) {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(square(array[i]));
    }
    return arr;
}

function square(x) {
    return x * x;
}//возведение в квадрат

console.log(convert(square, [1, 2, 3, 4]));//1,4,9,16
console.log(convert(square, []));//[]