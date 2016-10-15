'use strict';

module.exports = (value) => {
  const isNull = (value === null);
  const isUndefined = (value === undefined);
  const isEmptySingle = (value === '');
  const isEmptyDouble = (value === "");

  if (isNull || isUndefined || isEmptySingle || isEmptyDouble) return true;

  return false;

}
