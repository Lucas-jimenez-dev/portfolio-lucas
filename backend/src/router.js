const express = require("express");

const { ItemController, UserController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

// User

router.post("/admin", UserController.getByLogin);

module.exports = router;
