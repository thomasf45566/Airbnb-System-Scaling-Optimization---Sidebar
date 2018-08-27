const router = require('express').Router();
const controller = require('./controller');

router.route('/experience/:experience')
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete);

router.route('/experience')
  .post(controller.post);

module.exports = router;