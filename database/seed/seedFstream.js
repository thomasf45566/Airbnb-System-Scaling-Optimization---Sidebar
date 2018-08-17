const fs = require('fs');
const write = fs.createWriteStream('./data.csv');

function seedData(writer, encoding, callback) {
  let i = 0;
  let max = 10000000;
  function write() {
    let ok = true;
    while (i < max && ok) {
      let experience = 'wolfencounter' + i;
      let original = 'http://loremflickr.com/480/640/wolves?lock=' + i;
      let embedurl = 'https://www.youtube.com/embed/tRTTMNr10u8';
      const model = [experience, original, embedurl];
      i += 1;
      if (i % 100000 === 0) { console.log(i); }
      if (i === max) {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        if(i === 1) {
          console.log('writting header')
          const header = ['experience', 'original', 'embedurl'];
          ok = writer.write(`${header.join(',')}\n`, encoding);
        }
        ok = writer.write(`${model.join(',')}\n`, encoding);
      }
    }
    if (i < max) {
      writer.once('drain', write);
    }
  }
  write();
}
seedData(write, 'utf8', () => { console.log('done'); });