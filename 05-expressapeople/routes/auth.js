const express = require("express");
const router = express.Router();

// a path where the form used to submit data eg:	<form action="/login" method="POST">
// in order for the data from form to be pass we need to use urlencoded middleware
router.post("/", (req, res) => {
	// console.log(req.body); req.body will return [Object: null prototype] { name: 'yippee' }
	const { name } = req.body;

	// if name not falsy welcome else provide input
	if (name) {
		res.status(200).json({ success: true, name: name });
	} else {
		res.status(401).json(`please input name`);
	}
});

module.exports = router;
