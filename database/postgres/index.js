const Sequelize = require('sequelize');

const sequelize = new Sequelize('sidebarimg', 'postgres', 'example', {
  host: 'db',
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var SidebarImg = sequelize.define('sidebarimg', {
    experience : Sequelize.STRING,
    original : Sequelize.STRING,
    embedurl : Sequelize.STRING
  }, {timestamps: false});
  
  SidebarImg.sync();

  module.exports = { SidebarImg };