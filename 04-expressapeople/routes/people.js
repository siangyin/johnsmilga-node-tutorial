const express = require("express");
const router = express.Router();
let { people } = require("../data");

const {
	getPeople,
	createPerson,
	deletePerson,
	updatePerson,
} = require("../controllers/people");

router.get("/", getPeople);

// for javascript method
router.post("/", createPerson);

// update data with put
router.put("/:id", updatePerson);

//deleting data route
router.delete("/:id", deletePerson);

module.exports = router;
