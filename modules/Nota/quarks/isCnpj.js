'use strict';

module.exports = (value) => {
  const regex = /^[0-9]{10,14}$/;
  const isEmpty = require('./isEmpty')(value);
  const isString = require('./isString')(value);


  if(isEmpty) return false;
  if(!isString) return false;

  return regex.test(value);
}
