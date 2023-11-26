import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import logger from "morgan";

import webpageRouter from "./routes/index";
import apiRouter from "./routes/api";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));
app.use("/api", apiRouter);

app.listen(process.env.PORT || "3000", () => {
	console.log("hi");
});

app.get("/", (req, res, next) => {
	res.sendFile(
		path.join(__dirname, "..", "..", "frontend", "build", "index.html")
	);
});

export default app;
