function extractCurrencyValue(str){
  //todo use Number()
  return +str.slice(1);
}
//todo read about trim
alert( extractCurrencyValue('$120') === 120 );