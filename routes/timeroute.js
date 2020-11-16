let express = require("express");

let router = express.Router();

const { getcurrentTime } = require('../controllers/timecontroller');

router.get('/gettime',getcurrentTime);

module.exports = router;
