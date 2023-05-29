import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => {
    return payload;
  },
  getPostsFailure: (error) => {
    return error;
  },
});

export const createPost = createActions({
  createPostRequest: (payload) => {
    return payload;
  },
  createPostSuccess: (payload) => {
    return payload;
  },
  createPostFailure: (error) => {
    return error;
  },
});

export const updatePost = createActions({
  updatePostRequest: (payload) => {
    return payload;
  },
  updatePostSuccess: (payload) => {
    return payload;
  },
  updatePostFailure: (error) => {
    return error;
  },
});

export const showModal = createAction("SHOW_CREATE_SHOW_MODAL");
export const hideModal = createAction("HIDE_CREATE_SHOW_MODAL");
