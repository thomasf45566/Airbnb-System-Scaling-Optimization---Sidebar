const fs = require('fs');

const saveInOrder = i => {
  if (i >= 10000000) return;
  let data = {
    experience: 'wolfencounter' + i,
    original: 'http://loremflickr.com/480/640/wolves?lock=' + i,
    embedurl: 'https://www.youtube.com/embed/tRTTMNr10u8',
  };
  
  fs.appendFile('data.json', JSON.stringify(data) + '|', function(err){
    if (err) console.log(err);
    console.log(i);
    fs.close(2, () => saveInOrder(i + 1));
  });
}

saveInOrder(0);

// for (let i = 0; i < 10000000; i++) {
//   let data = {
//     experience: 'wolfencounter' + i,
//     original: 'http://loremflickr.com/480/640/wolves?lock=' + i,
//     embedurl: 'https://www.youtube.com/embed/tRTTMNr10u8',
//   };
  
//   fs.appendFile('data.json', JSON.stringify(data), function(err){
//     if (err) console.log(err);
//     console.log(i);
//   });
// }