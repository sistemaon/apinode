'use strict';

const express = require('express');
const router = express.Router();
const userOrganism = require('./organisms/userOrganism');

const Create = require('./../createBrain')(userOrganism);
const Find = require('./../findBrain')(userOrganism);
const FindOne = require('./../findOneBrain')(userOrganism);
const Update = require('./../updateBrain')(userOrganism);
const Remove = require('./../removeBrain')(userOrganism);

router.post('/', Create);
router.get('/', Find);
router.get('/:id', FindOne);
router.put('/:id', Update);
router.delete('/:id', Remove);

module.exports = router;
