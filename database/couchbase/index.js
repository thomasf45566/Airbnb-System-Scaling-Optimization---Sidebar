const couchbase = require('couchbase');
const ottoman = require('ottoman');
const uuid = require('uuid');

const cluster = new couchbase.Cluster("couchbase://localhost");
cluster.authenticate('root', 'test123');
bucket = cluster.openBucket('SidebarImg');
// bucket.operationTimeout = 120 * 1000;
ottoman.store = new ottoman.CbStoreAdapter(bucket, couchbase);

ottoman.ensureIndices(err => {
  if (err) console.log(err);
  console.log('ottoman ready');
})

const SidebarImgModel = ottoman.model('SidebarImg', {
  experience : "string",
  original : "string",
  embedurl : "string"
})

module.exports = { SidebarImgModel };