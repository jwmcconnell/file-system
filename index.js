const fs = require('fs');

fs.writeFile('message.txt', 'Hello new file', (err) => {
  if(err) return console.error(err);
  fs.readFile('./message.txt', { encoding: 'utf8' }, (err, data) => {
    if(err) return console.error(err);

    console.log(data);
  });
  console.log('the file has been created');
});
