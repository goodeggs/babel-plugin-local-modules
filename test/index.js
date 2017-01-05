var assert = require('assert');
var fs = require('fs');
var path = require('path');
import { transformFileSync } from 'babel-core';

function test(fixtureName) {
  it(fixtureName, function () {
    var fixturePath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
    var expectedPath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
    var actual = transformFileSync(fixturePath, {
      plugins: [require('../lib').default]
    }).code;
    var expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });
    assert.equal(actual + '\n', expected);
  });
}

[
  'expression-require',
  'string-require',
  'no-local'
].map(test);
