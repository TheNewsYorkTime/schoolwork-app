import express from "express";
import fetch from "node-fetch";
//import urlLib from 'url';
const router = express.Router();

router.get("/", async (req, res, next) => {
	let url = req.query.url;
	console.log(url);
	try {
		url = new URL(url);
		const response = await fetch(url);
		console.log("sent!");
		res.setHeader("content-type", response.headers.get("content-type"));
		//res.setHeader("content-type", response.type);
		res.send(await response.buffer());
	} catch {
		console.log("Invalid url Entered: ", url);
	}
	console.log("hi");
});

export default router;
