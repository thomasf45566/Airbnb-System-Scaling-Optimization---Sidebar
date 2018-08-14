const csv = require("fast-csv");
const SidebarImg = require('../couchbase');

const saveInOrder = i => {
  if (i >= 10) return;
  csv
 .fromPath(`images${i}.csv`, {headers: true})
 .on("data", function(data){
   new SidebarImg(data).save((err) => {
    if(err){console.error(err)}
    console.log(data);
  });
 })
 .on("end", function(){
     console.log("done");
     saveInOrder(i + 1);
 });
}

saveInOrder(0);