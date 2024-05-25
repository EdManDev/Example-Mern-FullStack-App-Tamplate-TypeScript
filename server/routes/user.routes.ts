import express from "express";
const router = express.Router();

import {
	getUser,
	postUser,
	putUser,
	deleteUser,
} from "../controllers/userController";

router.get("/user", getUser);
router.post("/user", postUser);
router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);
router.delete("/user:id", deleteUser);

export default router;
