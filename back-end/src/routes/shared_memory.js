const express = require("express");
const { upload } = require("../common-middleware");
const { createSharedMemory } = require("../controller/shared_memory");

const router = express.Router();

router.post("/memory/share", upload.array("sharedFile"), createSharedMemory);

module.exports = router;
