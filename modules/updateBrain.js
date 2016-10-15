'use strict';

module.exports = (Organism) => {

  const callbackExpress = require('./callbackExpress');

  return (req, res) => {
    console.log('update')
    const query = { _id: req.params.id };
    const mod = req.body;
    const options = { runValidators: true };
    Organism.update(query, mod, options, (err, data) => {
      callbackExpress(err, data, res);
    });
  };
};
