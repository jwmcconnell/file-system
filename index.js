const fs = require('fs');

const copy = (src, dest, callback) => {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    fs.writeFile(dest, data, (err) => {
      callback(err);
    });
  });
};

module.exports = copy;
