const logger = (req, res, next) => {
	const url = req.url;
	console.log(`logger is here url ${url}`);
	console.log(req.body);
	// console.log(req.url, req.href, req.path);
	next();
};

module.exports = logger;
