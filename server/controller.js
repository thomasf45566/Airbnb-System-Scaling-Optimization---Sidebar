const { SidebarImg } = require('../database/models');

const controller = {
  get: (req, res) => {
    SidebarImg.find({
      // experience: req.params.experience
    }, (err, data) => {
      if(err){console.error(err)}
      else{res.status(200).send(data)}
    })
  },
  post: (req, res) => {
    res.status(201).send('hello from post')
  },
}

module.exports = controller;