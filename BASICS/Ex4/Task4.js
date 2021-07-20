const array = [];
console.log(array);

function sumInputNumbers() {
    let sum = 0;
    let number;
    do {
        number = prompt('Write a number');
        if (number === '') {
            number = null;
        } else {
            number === number;
        }
        array.push(Number(number)); //Converting the string to a number, since prompt - returns a string, not a number
    } while (number != null);
    sum = array.reduce((item, index) => item + index);
    console.log(`The sum of the numbers from the array is: ${sum}`);
}

sumInputNumbers();