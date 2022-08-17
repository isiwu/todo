import express from "express";
import * as todoControllers from "../controllers/todoControllers";

const router = express.Router();

router.get("/", todoControllers.index, todoControllers.respondJSON);
router.post("/create", todoControllers.create, todoControllers.respondJSON);
router.put("/:id", todoControllers.edit, todoControllers.respondJSON);
router.delete("/:id", todoControllers.destroy, todoControllers.respondJSON);
router.patch("/:id", todoControllers.patch, todoControllers.respondJSON);

export default router;