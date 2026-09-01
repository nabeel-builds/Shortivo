const Url = require("../models/url.model");

const redirectShortUrlController = async (req, res) => {
    try {
        const shorturl = req.params.shorturl;

        const doc = await Url.findOne({
            shorturl: shorturl
        });

        if (doc) {
            let url = doc.url;

            if ( !url.startsWith("http://") && !url.startsWith("https://") ) {
                url = "https://" + url;
            }

            return res.redirect(url);
        }

        return res.redirect(process.env.FRONTEND_URL);

    } catch (error) {
        console.error(error);

        return res.status(500).send("Server error");
    }
};

module.exports = {
    redirectShortUrlController
};