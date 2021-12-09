// require("dotend").config();
//async errors

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
	res.send("<h1>Store API</h1><a href='/api/products'>Products-API</a>");
});

// products route

// middlewares : page not found/ error-handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		//connectDB
		app.listen(PORT, (req, res) => {
			console.log(`app on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
