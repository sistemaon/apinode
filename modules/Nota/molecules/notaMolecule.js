const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notaSchemaMolecule = {

  // MOLECULES TYPE STRING
  numeroNota: require('./../atoms/numeroNota')
, concilRede: require('./../atoms/concilRede')
, concilBanco: require('./../atoms/concilRede') // concilBanco same logic as concilRede
, tipoAbatimento: require('./../atoms/tipoAbatimento')
, descricao: require('./../atoms/descricao')
, loja: require('./../atoms/loja')

  // MOLECULES TYPE DATE
, dataCriacao: require('./../atoms/dataCriacao')
, dataPagamento: require('./../atoms/dataPagamento')
, dataVencimento: require('./../atoms/dataVencimento')

  // MOLECULES TYPE NUMBER
, quantidade: require('./../atoms/quantidade')
, numeroOrdem: require('./../atoms/numeroOrdem')
, somaBruto: require('./../atoms/somaBruto')
, somaLiquido: require('./../atoms/somaLiquido')
, somaConciliado: require('./../atoms/somaConciliado')
, somaAbatimento: require('./../atoms/somaAbatimento')

 // MOLECULES OBJECT
, rede: {
    // MOLECULES OBJECT TYPE STRING
    cnpj: require('./../atoms/cnpj')
  , razaoSocial: require('./../atoms/razaoSocial')
  , telefone: require('./../atoms/telefone')

  }

};

module.exports = new Schema(notaSchemaMolecule);
