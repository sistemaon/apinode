const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/authweb1';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// Nota
mongoose.model('Nota', require('./../modules/Nota/molecules/notaMolecule'));

// User
mongoose.model('User', require('./../modules/User/molecules/userMolecule'));

// Schema Notas
//
// Seguindo estes atributos
//
//           {
//             'id': ID_DA_NOTA (AUTO - STRING),
//             'numeroNota': NUMERO_DA_NOTA (STRING),
//             'dataCriacao': DATA_CRIACAO (AUTO - DATA)
//             'concilRede': CONCILIACAO_REDE (BOOL),
//             'concilBanco': CONCILIACAO_BANCO (BOOL),
//             'somaLiquido': SOMA_LIQUIDA (DOUBLE)
//             'somaConciliado': SOMA_CONCILIADO (DOUBLE)
//             'somaAbatimento': SOMA_ABATIMENTO (DOUBLE)
//             'tipoAbatimento': TIPO_ABATIMENTO (STRING)
//             'somaBruto': SOMA_BRUTO (DOUBLE)
//             'quantidade': QUANTIDADE (INT)
//             'descricao': DESCRICAO (STRING)
//             'dataPgto': DATA_PAGAMENTO (DATA)
//             'dataVcto': DATA_VENCIMENTO (DATA)
//             'loja': LOJA (STRING)
//             'numOrdem': NUMERO_DA_ORDEM (INT),
//             'rede': DADOS_REDE (OBJETO) {
//                  'cnpj': CNPJ (STRING),
//                  'razaoSocial': RAZAO_SOCIAL (STRING),
//                  'telefone': TELEFONE (STRING),
//              }
//           }
