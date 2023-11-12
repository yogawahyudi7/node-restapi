const express = require("express");
const { sayHello } = require("../controller/sayHello");
const router = express.Router();

router.get("/", sayHello);

module.exports = router;
