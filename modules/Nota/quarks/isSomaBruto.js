'use strict';

module.exports = (value) => {

  // Regex accpets only numbers
  const regexLetNum = /^[0-9.]+$/;

  const isEmpty = require('./isEmpty')(value);
  const isNumber = require('./isNumber')(value);

  if(isEmpty || !isNumber) return false;
  //if(!isNumber) return false;

  return regexLetNum.test(value);

}
