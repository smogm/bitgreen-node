'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export bitgreen-lib', function() {
    var bitgreen = require('../');
    should.exist(bitgreen.lib);
    should.exist(bitgreen.lib.Transaction);
    should.exist(bitgreen.lib.Block);
  });
});
