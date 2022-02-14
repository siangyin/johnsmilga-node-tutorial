require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");

// routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const orderRouter = require("./routes/orderRoutes");

//middleware
app.set("trust proxy", 1);
app.use(
	rateLimiter({
		windowMs: 15 * 60 * 1000, // 15min
		max: 60,
	})
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

// app.use(morgan("tiny")); // production only
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// landing page will is the doc (in public: html of API doc)
// app.get("/", (req, res) => {
// 	res.send("Hello");
// });

// app.get("/api/v1", (req, res) => {
// 	// console.log(req.cookies);
// 	console.log(req.signedCookies);
// 	res.send("e-commerce api");
// });

app.use(express.static("./public"));
app.use(fileUpload());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/orders", orderRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(PORT, console.log(`server is on port ${PORT}`));
	} catch (error) {}
};

start();
