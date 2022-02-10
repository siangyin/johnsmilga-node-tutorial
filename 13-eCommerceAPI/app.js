require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");
const morgan = require("morgan");

// routers
const authRouter = require("./routes/authRoutes");

//middleware
app.use(morgan("tiny"));
app.use(express.json());
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.get("/", (req, res) => {
	res.send("Hello");
});

app.use("/api/v1/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(PORT, console.log(`server is on port ${PORT}`));
	} catch (error) {}
};

start();
