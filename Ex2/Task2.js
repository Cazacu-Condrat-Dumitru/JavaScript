a = prompt('Write the first number');
b = prompt('Write the second number');

let sum = 0;

for (let n = a; n <= b; ++n) {
  if (n % 2 == 0) {
    sum = +n + sum;
  }
}

console.log('The sum is: ' + sum);