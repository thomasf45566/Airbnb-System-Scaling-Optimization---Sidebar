const { SidebarImg } = require('../database/postgres');

const controller = {
  get: (req, res) => {
    SidebarImg.findAll({
      where: { experience: req.params.experience }
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
  },
  post: (req, res) => {
    SidebarImg.create(req.body)
    .then(result => res.status(201).send(result))
    .catch(err => res.status(404).send(err));
  },
  update: (req, res) => {
    SidebarImg.update(
      req.body,
      { where: { experience: req.params.experience } }
    )
    .then(result => res.status(202).send(result))
    .catch(err => res.status(404).send(err));
  },
  delete: (req, res) => {
    SidebarImg.destroy({where:{ experience: req.params.experience }})
    .then(result => res.status(202).send(result))
    .catch(err => res.status(404).send(err));
  }
}

module.exports = controller;