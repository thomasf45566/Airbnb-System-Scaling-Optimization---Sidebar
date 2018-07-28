const router = require('express').Router();
const controller = require('./controller');

router.route('/:experience')
  .get(controller.get)
  // .post(controller.post)

module.exports = router;