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

app.get("/", (req, res, next) => {
	
	if (false) {res.redirect("/login")}
	res.sendFile(
		path.join(__dirname, "..", "..", "frontend", "build", "index.html")
	); 
});

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build")));
app.use("/api", apiRouter);

app.get("/login", (req, res, next) => {
	res.redirect("/");
	});

app.listen(process.env.PORT || "3000", () => {
	console.log("Started...");
});



export default app;
