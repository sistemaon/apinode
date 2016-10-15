'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isString = require('./isString')(value);
  const isBool = require('./isBool')(value);
  // const isTRUE = (value === "masculino");
  // const isFALSE = (value === "feminino");

  // if(isTRUE) return true;
  // if(isFALSE) return true;
  // if(!isTRUE || !isFALSE || isEmpty || !isString) return false;
  if(isEmpty || !isString || !isBool) return false;

  return true;
}
