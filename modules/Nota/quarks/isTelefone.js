'use strict';

module.exports = (value) => {


  // Regex accpets only numbers
  const regexLetNum = /^[0-9]+$/;

  const isEmpty = require('./isEmpty')(value);
  const isString = require('./isString')(value);

  if(isEmpty || !isString) return false;

  return regexLetNum.test(value);

}
