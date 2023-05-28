import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.post("/:id", updatePost);
router.post("/create", createPost);
router.get("/", getPosts);

export default router;
