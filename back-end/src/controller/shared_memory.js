const SharedMemory = require("../models/shared_memory");

exports.createSharedMemory = async (req, res) => {
  const { name, message } = req.body;
  //   let sharedFiles = [];
  let sharedFiles = req.files;
  if (req.files.length > 0) {
    sharedFiles = req.files.map((file) => {
      return { fileShared: file.filename };
    });
  }

  const sharedMemory = new SharedMemory({
    name,
    message,
    sharedFiles,
  });
  console.log({ name, message, sharedFiles });
  await sharedMemory.save();
  res.status(200).json({ sharedMemory });

  //sharedMemory.save((error, sharedMemory) => {
  // if (error) return res.status(400).json({ error });
  // if (sharedMemory) {
  //   return res.status(201).json({ sharedMemory });
  //  }
  // });
};
