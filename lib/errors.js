'use strict';

var createError = require('errno').create;

var BitgreenNodeError = createError('BitgreenNodeError');

var RPCError = createError('RPCError', BitgreenNodeError);

module.exports = {
  Error: BitgreenNodeError,
  RPCError: RPCError
};

