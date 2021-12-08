const express = require("express");
const router = express.Router();
let { people } = require("../data");

const { getPeople } = require("../controllers/people");

router.get("/", getPeople);

// for javascript method
router.post("/", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res.status(400).json({ success: false, msg: "pls provide value" });
	}
	res.status(200).json({ success: true, person: name });
});

// update data with put
router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const person = people.find((person) => person.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no data with id${id}` });
	}

	// or alternative
	// if (!people[id]) {
	// 	return res
	// 		.status(404)
	// 		.json({ success: false, msg: "pls provide valid id" });
	// }

	// updating data
	const newPpl = people.map((pax) => {
		if (pax.id === Number(id)) {
			pax.name = name;
		}
		return pax;
	});
	res.status(200).json({ success: true, data: newPpl });
});

//deleting data route
router.delete("/:id", (req, res) => {
	const { id } = req.params;

	//if no such id 404
	const person = people.find((person) => person.id === Number(id));
	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `no data with id${id}` });
	}

	// if filter return is within one line dont need {} but if more than one line need {return ...}
	const newData = people.filter((pax) => pax.id !== Number(id));
	console.log(newData);
	return res.status(200).json({ success: true, data: newData });
});

module.exports = router;
