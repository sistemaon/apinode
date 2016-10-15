'use strict';

const express = require('express');
const router = express.Router();
const notaOrganism = require('./organisms/notaOrganism');

const Create = require('./../createBrain')(notaOrganism);
const Find = require('./../findBrain')(notaOrganism);
const FindOne = require('./../findOneBrain')(notaOrganism);
const Update = require('./../updateBrain')(notaOrganism);
const Remove = require('./../removeBrain')(notaOrganism);

router.post('/', Create);
router.get('/', Find);
router.get('/:id', FindOne);
router.put('/:id', Update);
router.delete('/:id', Remove);

module.exports = router;
