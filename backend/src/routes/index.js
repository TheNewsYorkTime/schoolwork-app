import express from "express";
import path from "path";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "..", "..", "frontend", "build"));
});

export default router;
