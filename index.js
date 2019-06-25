const fs = require('fs');
const { join } = require('path');

fs.readFile(join(__dirname, 'hi.txt'), { encoding: 'utf8' }, (err, data) => {
  if(err) console.error(err);

  fs.writeFile(join(__dirname, 'hi-copy.txt'), data, (err) => {
    if(err) console.error(err);

    console.log('copied file!');
  });
  
  console.log(data);
});
