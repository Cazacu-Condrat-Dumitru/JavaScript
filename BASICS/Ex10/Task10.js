let dividers = (number) => {
  let div = 0;
  for (let i = 0; i <= number; ++i) {
    if (number % i == 0) {
      div = div + i + ` `;
    }
  }
  alert(div);
}

dividers(prompt(`Write a number`));