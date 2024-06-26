const express = require("express");
const userController = require("../controllers/rooms.controller");

const router = express.Router();

router.get("/", userController.get);

router.get("/:id", userController.getOne);

router.post("/", userController.create);

router.patch("/:id", userController.update);

router.delete("/:id", userController.remove);

module.exports = router;
