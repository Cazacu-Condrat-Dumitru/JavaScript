const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Initial Array:', array);

array.splice(array.indexOf(5), 1, 0, 0, 0); //нужно получить [1, 2, 3, 4, 0, 0, 0, 6, 7, 8, 9]
console.log('The swapped Array: ', array);