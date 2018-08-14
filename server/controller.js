// const { SidebarImg } = require('../database/models');
const { SidebarImg } = require('../database/cass');
// const { SidebarImg } = require('../database/couchbase');
// const { SidebarImg } = require('../database/postgres');

const controller = {
  get: (req, res) => {
    SidebarImg.find({
      experience: req.params.experience
    }, (err, data) => {
      if(err){res.status(404).send(err)}
      else{res.status(200).send(data)}
    });
  },
  post: (req, res) => {
    new SidebarImg(res.body).save(err => {
      if (err) res.status(404).send(err);
      res.status(201).send('posted');
    });
  },
}

module.exports = controller;