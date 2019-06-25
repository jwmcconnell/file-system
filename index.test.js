const fs = require('fs');
const { join } = require('path');
const copy = require('./index');

describe('copy', () => {
  beforeEach(done => {
    fs.writeFile(join(__dirname, 'test.txt'), 'hi', done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, 'test.txt'), done);
  });

  afterEach(done => {
    fs.unlink(join(__dirname, 'test-copy.txt'), done);
  });

  it('copies a file', done => {
    copy(join(__dirname, 'test.txt'), join(__dirname, 'test-copy.txt'), err => {
      expect(err).toBeFalsy();

      fs.readFile(join(__dirname, 'test-copy.txt'), { encoding: 'utf8' }, (err, data) => {
        expect(data).toEqual('hi');
        
        done();
      });
    });
  });
});
