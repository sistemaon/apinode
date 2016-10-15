'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isNumber = require('./isNumber')(value);

  // Regex accpets only numbers
  const regexNumSomaAbatimento = /^[0-9,.]+$/;

  if(isEmpty || !isNumber) return false;
  //if(!isNumber) return false;

  return regexNumSomaAbatimento.test(value);

}
