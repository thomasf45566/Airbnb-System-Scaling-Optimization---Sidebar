const connection = require('./');
const mongoose = require('mongoose');

var sidebarimgschema = new mongoose.Schema({
  experience:{type:String, require:true},
  original: {type:String, require:true},
  thumbnail: {type:String, require:false},
  embedUrl: {type:String, require:false},
  // renderItem: {type:Function, require:false}
})

const SidebarImg = mongoose.model('SidebarImg', sidebarimgschema);

module.exports = { SidebarImg }

