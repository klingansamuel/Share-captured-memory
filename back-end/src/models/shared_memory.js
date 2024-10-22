const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const sharedMemorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    sharedFiles: [{ fileShared: { type: String } }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("SharedMemory", sharedMemorySchema);
