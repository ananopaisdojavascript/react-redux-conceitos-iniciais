import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./PostSlice";
import PostExcerpt from './PostExcerpt';

const PostList = () => {
  const dispatch = useDispatch()
  const postArr = useSelector(selectAllPosts)
  const status = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts())
    }
  }, [status, dispatch])

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>
  } else if (status === "succeeded") {
    const orderPosts = postArr.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderPosts.map(post => (<PostExcerpt post={post}  key={post.id} />))
  } else if (status === "failed") {
    content = <p>{error}</p>
  }
  
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  )
}

export default PostList