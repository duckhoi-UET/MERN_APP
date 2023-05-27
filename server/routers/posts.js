import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/", getPosts);

export default router;
