import { PostsModel } from "../models/PostsModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModel.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  try {
    const data = req.body;
    const post = new PostsModel(data);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const post = await PostsModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
