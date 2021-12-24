const getAllJobs = async (req, res) => {
	res.status(200).json({ msg: `getAllJobs` });
};

const getJob = async (req, res) => {
	res.status(200).json({ msg: `getJob` });
};

const createJob = async (req, res) => {
	res.status(200).json({ msg: `createJob` });
};

const updateJob = async (req, res) => {
	res.status(200).json({ msg: `updateJob` });
};

const deleteJob = async (req, res) => {
	res.status(200).json({ msg: `deleteJob` });
};
module.exports = {
	getAllJobs,
	createJob,
	updateJob,
	deleteJob,
};
