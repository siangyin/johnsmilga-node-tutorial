const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
	res.status(200).json({ msg: `getAllJobs` });
};

const getJob = async (req, res) => {
	res.status(200).json({ msg: `getJob` });
};

const createJob = async (req, res) => {
	// req.user.userId is from the UserSchema.methods.createJWT function that return jwt payload obj { userId: this._id, name: this.name } so the token & key must matched.
	req.body.createdBy = req.user.userId;
	const job = await Job.create(req.body);
	console.log(req.body);
	res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
	res.status(200).json({ msg: `updateJob` });
};

const deleteJob = async (req, res) => {
	res.status(200).json({ msg: `deleteJob` });
};
module.exports = {
	getAllJobs,
	getJob,
	createJob,
	updateJob,
	deleteJob,
};
