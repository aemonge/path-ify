'use strict';

var should = require('should');
var pathify = require('../pathify');

/* eslint-disable no-unused-expressions */
/* global describe it should */

describe('1 pathify general tests', function() {
  it('1.1 should return same number', function() {
    (pathify.toPath(1)).should.equal(1);
  });

  it('1.2 should return same string', function() {
    (pathify.toPath('hello world')).should.equal('hello world');
  });

  it('1.3 should return same null', function() {
    should(pathify.toPath(null)).be.null;
  });

  it('1.4 should return same undefined', function() {
    should(pathify.toPath(undefined)).be.undefined;
  });

  it('1.5 should return same object', function() {
    (pathify.toPath({a: 1})).should.deepEqual({a: 1});
  });
});

describe('2 pathify robust tests of results', function() {
  it('2.1 to be ', function() {
    (pathify.toPath({b: {a: 1, c: 2}})).should.deepEqual({
      'b.a': 1,
      'b.c': 2
    });
  });

  it('2.2 to be ', function() {
    (pathify.toPath({b: {a: 1, c: 2}, d: {a: {j: [0, 1, 2]}}})).should.deepEqual({
      'b.a': 1,
      'b.c': 2,
      'd.a.j': [0, 1, 2]
    });
  });
});
