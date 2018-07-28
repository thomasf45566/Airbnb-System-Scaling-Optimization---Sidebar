const connection = require('./');
const mongoose = require('mongoose');

var sidebarimgschema = new mongoose.Schema({
  original: {type:String, require:true},
  thumbnail: {type:String, require:false},
})

const SidebarImg = mongoose.model('SidebarImg', sidebarimgschema);

module.exports = { SidebarImg }