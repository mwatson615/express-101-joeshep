const { Router } = require('express');
const router = Router();
const path = require('path');




router.use(require('./home'));
router.use(require('./animals'));
router.use(require('./games'));
router.use(require('./cars'));
router.use(require('./instruments'));


module.exports = router;
