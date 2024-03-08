import { Fragment } from "react";
import PostList from "./features/posts/PostList"
import PostForm from "./features/posts/PostForm"

function App() {

  return (
    <Fragment>
      <PostForm />
      <PostList />
    </Fragment>
  )
}

export default App
