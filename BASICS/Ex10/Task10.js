const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = function (arr) {
    arr = arr.filter((item, index) => arr.indexOf(item) === index)
    arr.sort((a, b) => a - b);
    return arr;


    /*
    function uniqueSorted(arr) {
        arr = arr.filter((item, index) => arr.indexOf(item) === index)
        arr.sort((a, b) => a - b);
        return arr;
    */
}

console.log(uniqueSorted(array));