import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import logger from "morgan";
import "dotenv/config";

import apiRouter from "./routes/api.js";

const app = express();
const port = process.env.PORT || "3000";
const staticPath = (process.env.STATIC_DIR || "react").split("/");

if (process.env.NODE_ENV == "development") app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", apiRouter);
app.use(express.static(path.join(__dirname, ...staticPath)));

app.get("/", (req, res, next) => {
	if (false) {res.redirect("/login")}
	res.sendFile(
		path.join(__dirname, ...staticPath, "index.html")
	); 
});

app.get("/login", (req, res, next) => {
	res.redirect("/");
	});

app.listen(port, () => {
	console.log("Started...");
});

export default app;
