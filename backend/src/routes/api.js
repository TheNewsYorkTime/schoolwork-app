import express from "express";
import fetch from "node-fetch";
//import urlLib from 'url';
const router = express.Router();

router.get("/", async (req, res, next) => {
    let url = req.query.url;
    console.log(url);
    url = new URL(url);
    const response = await fetch(url);
        console.log("sent!")
        //console.log(response.text());
        res.header = response.headers;
        res.send(await response.text());
	console.log("hi");
});

export default router;
