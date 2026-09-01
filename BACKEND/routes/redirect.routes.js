const express = require("express");
const { redirectShortUrlController } = require("../controllers/redirect.controller");

const router = express.Router();

router.get("/:shorturl", redirectShortUrlController);

module.exports = router;