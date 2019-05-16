'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.JSON_LD_PATCH_CONTEXT_V1_URL,
  require('../contexts/json-ld-patch-v1.jsonld'));
