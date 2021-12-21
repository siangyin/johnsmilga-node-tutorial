const express = require("express");
const router = express.Router();
let { people } = require("../data");

const {
	getPeople,
	createPerson,
	deletePerson,
	updatePerson,
} = require("../controllers/people");

// //all routes
// router.get("/", getPeople);
// // for javascript method
// router.post("/", createPerson);
// // update data with put
// router.put("/:id", updatePerson);
// //deleting data route
// router.delete("/:id", deletePerson);

//alternative compile router
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
