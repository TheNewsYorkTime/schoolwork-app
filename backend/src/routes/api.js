import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Hi");
});

export default router;
