var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'mykeyspace',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var MyModel = models.loadSchema('SidebarImg', {
  fields:{
    experience : "text",
    original : "text",
    embedurl : "text"
  },
  key:["experience"]
});

// MyModel or models.instance.Person can now be used as the model instance
// console.log(MyModel);
// console.log(models.instance.SidebarImg);

// sync the schema definition with the cassandra database table
// if the schema has not changed, the callback will fire immediately
// otherwise express-cassandra will try to migrate the schema and fire the callback afterwards
MyModel.syncDB(function(err, result) {
    if (err) throw err;
    // result == true if any database schema was updated
    // result == false if no schema change was detected in your models
    console.log('cassandra connected');
});

module.exports = { MyModel };

// var models = require('express-cassandra');

// models.setDirectory( __dirname + '/models').bind(
//     {
//         clientOptions: {
//             contactPoints: ['127.0.0.1'],
//             protocolOptions: { port: 9042 },
//             keyspace: 'mykeyspace',
//             queryOptions: {consistency: models.consistencies.one}
//         },
//         ormOptions: {
//             defaultReplicationStrategy : {
//                 class: 'SimpleStrategy',
//                 replication_factor: 1
//             },
//             migration: 'safe'
//         }
//     },
//     function(err) {
//         if(err) throw err;
//         console.log('cassandra connected');
//         // console.log(models.instance);
//     }
// );

// // console.log(__dirname);

// module.exports = models.instance;