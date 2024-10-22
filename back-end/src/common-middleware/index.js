const multer = require("multer");
// const { nanoid } = require("nanoid");
// const nanoid = require("nanoid");
const path = require("path");

// const nanoid = customRandom("1234567890abcdef", 10);
const storage = multer.diskStorage({
  destination: function (res, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (res, file, cb) {
    cb(null, file.originalname);
  },
});
exports.upload = multer({ storage });
