'use strict';

module.exports = (Organism) => {

  const callbackExpress = require('./callbackExpress');

  return (req, res) => {
    let query = { _id: req.params.id };

    Organism.remove(query, (err, data) => {
      callbackExpress(err, data, res);
    });
  };
};
