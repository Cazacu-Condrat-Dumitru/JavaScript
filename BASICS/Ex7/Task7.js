let age = prompt('Write your age');

 if (age >= 14 && age <= 90) {
  alert('Normal age');
}
else {
  alert('Not big enough!');
}
//todo Refactoring
//Second Variant
if (age === !(age >= 14 && age <= 90)) {
    alert('Not big enough!');
} else {
    alert('Normal age');
}