// "use strict"

const multer = require("multer");

module.exports = multer({
  // dest: './uploads',
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, returnCallback) {
      returnCallback(null, Date.now() + "-" + file.originalname);
    },
  }),
});
