'use strict';

module.exports = (value) => {
  const isEmpty = require('./isEmpty')(value);
  const isDate = require('./isDate')(value);

  if(isEmpty) return false;
  if(!isDate) return false;
  // Data precisa ser maior que a data atual
  //const today = new Date();
  //return value.setHours(0,0,0,0) < today.setHours(0,0,0,0);
  return true;
};










///////////////////////////////// EM TESTE ///////////////////////////////////////////////////
// 'use strict';
//
// module.exports = (value) => {
//   //const isEmpty = require('./isEmpty')(value);
//   const isDate = require('./isDate')(value);
//
//   const regexValDate = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/;
//                         // ^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$
//
//   //if(isEmpty) return false;
//   if(!isDate) return false;
//
//   // Data precisa ser maior que a data atual
//   // const today = new Date();
//   // return value.setHours(0,0,0,0) <= today.setHours(0,0,0,0);
//
//   return regexValDate.test(value);
//
//
//
//   //return regexValDate.test(value);
//
//   //return true;
// };
///////////////////////////////// EM TESTE ///////////////////////////////////////////////////
