function extractCurrencyValue(str){
  //todo use Number()
  return Number(+str.slice(1));
}
//todo read about trim =>(trim removes all the spaces like Tab oe Space and all the line terminator like LF/CR)
alert( extractCurrencyValue('$120') === 120 );