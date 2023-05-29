import React from "react";

import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PostList from "../../components/PostList";
import Header from "../../components/Header";

import { useDispatch } from "react-redux";

import useStyle from "./style";
import { showModal } from "../../redux/actions";
import CreatePostModal from "../../components/CreatePostModal";

export default function HomePage() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg" className="{}">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        className={classes.fab}
        color="primary"
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
