const router = require('express').Router();
const controller = require('./controller');

router.route('/experience/:experience')
  .get(controller.get)
  .delete(controller.delete);

router.route('/experience')
  .post(controller.post)
  .put(controller.update);

module.exports = router;