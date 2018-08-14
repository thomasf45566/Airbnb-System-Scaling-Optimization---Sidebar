const SidebarImg = require('../couchbase');
let records;

const saveInOrder = (i) => {
  if (i >= 10000000) return;
  new SidebarImg(records[i]).save((err) => {
    if(err){console.error(err)}
    console.log(i);
    saveInOrder(i + 1);
  });
}

const fs = require('fs');
fs.readFile('data.json', 'utf8', function (err, data) {
  if (err) throw err;
  // console.log(data);
  data = data.slice(0, data.length - 1);
  // console.log(data)
  records = data.split('|').map(json => JSON.parse(json));
  // console.log(records);
  // obj = JSON.parse(data);
  saveInOrder(0);
});

