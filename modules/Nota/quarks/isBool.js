'use strict';

module.exports = (value) => {
  const isTRUE = (value === 'Conciliado');
  const isFALSE = (value === 'Não Conciliado');

  if(isTRUE || isFALSE) return true;

  return false;
}
