const express = require("express");
const {createShortUrlController} = require("../controllers/url.controller");

const router = express.Router();

router.post("/shorten", createShortUrlController);

module.exports = router;