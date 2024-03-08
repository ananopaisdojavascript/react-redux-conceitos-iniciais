import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '💖',
  rocket: '🚀',
  coffee: '☕'
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
  const handleClickButton = () => dispatch(reactionAdded({ postId: post.id, reaction: name }))

    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={handleClickButton}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons