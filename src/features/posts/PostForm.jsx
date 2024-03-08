import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./PostSlice";
import { selectAllUsers } from "../users/UserSlice";

const PostForm = () => {

  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserId] = useState("")
  const [requestStatus, setRequestStatus] = useState("idle")

  const users = useSelector(selectAllUsers)

  const onTitleChange = event => setTitle(event.target.value)
  const onContentChange = event => setContent(event.target.value)
  const onAuthorChange = event => setUserId(event.target.value)

  const canSave = [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending")
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("")
        setContent("")
        setUserId("")
      } catch (error) {
        console.log("Failed to save the post", error)
      } finally {
        setRequestStatus("idle")
      }
    }
  }

  const userOptions = users.map(user => {
    return (
      <option key={user.id} value={user.id}>{user.name}</option>
    )
  })

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <div>
          <label htmlFor="postTitle">Title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>

        <div>
          <label htmlFor="postContent">Content: </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />
        </div>

        <div>
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </div>
      </form>
    </section>
  )
}

export default PostForm