const fs = require('fs');

fs.readFile('./test.txt', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});
