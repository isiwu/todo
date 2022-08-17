import express from "express";
import * as userControllers from "../controllers/userControllers";

const router = express.Router();

router.get("/", userControllers.index, userControllers.respondJSON);
router.post("/create", userControllers.create, userControllers.respondJSON);
router.get("/:id", userControllers.show, userControllers.respondJSON);

export default router;