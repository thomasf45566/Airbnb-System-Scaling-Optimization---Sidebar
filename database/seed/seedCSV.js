const createCsvWriter = require('csv-writer').createObjectCsvWriter;

for (let i = 0; i < 10; i++) {
  let csvWriter = createCsvWriter({
      path: `images${i}.csv`,
      header: [
          {id: 'experience', title: 'experience'},
          {id: 'original', title: 'original'},
          {id: 'embedurl', title: 'embedurl'},
      ]
  });
  
  let records = [];

  for (let j = 0; j < 1000000; j++) {
    records.push({
      experience: 'wolfencounter' + (j + i * 1000000),
      original: 'http://loremflickr.com/480/640/wolves?lock=' + (j + i * 1000000),
      embedurl: 'https://www.youtube.com/embed/tRTTMNr10u8',
    });
  }
  
  csvWriter.writeRecords(records)       // returns a promise
      .then(() => {
          console.log('...Done');
      });
}