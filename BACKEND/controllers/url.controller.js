const Url = require("../models/url.model");
const crypto = require("crypto");

const createShortUrlController = async (req, res) => {
  try {
    const { url, shorturl } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    const code = shorturl || crypto.randomBytes(4).toString("hex");

    const existingUrl = await Url.findOne({
      shorturl: code,
    });

    if (existingUrl) {
      return res.status(409).json({
        message: "Short URL already exists",
      });
    }

    const newUrl = await Url.create({
      url,
      shorturl: code,
    });

    res.status(201).json({
      success: true,
      shortUrl: `${process.env.FRONTEND_URL}/${code}`,
      data: newUrl,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createShortUrlController,
};