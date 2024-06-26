const express = require("express");
const expenseController = require("./../controllers/expense.controller");

const router = express.Router();

router.get("/", expenseController.get);

router.get("/:id", expenseController.getOne);

router.post("/", expenseController.create);

router.patch("/:id", expenseController.update);

router.delete("/:id", expenseController.remove);

module.exports = router;
