'use strict';

module.exports = (value) => {

  const isEmpty = require('./isEmpty')(value);
  const isString = require('./isString')(value);

  if(isEmpty) return false;
  if(!isString) return false;

  return true;
  
}
