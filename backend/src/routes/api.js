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
		res.header = response.headers;
		res.send(await response.text());
	} catch {
		console.log("error");
	}
	console.log("hi");
});

export default router;
