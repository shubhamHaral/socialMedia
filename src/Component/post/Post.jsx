import "./Post.css"
import { Users } from "../../dummyData"
import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
export default function Post({ Post }) {
  const [like, setLike] = useState(Post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    // setIsLiked(!isLiked)
  }
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img src={Users.filter(u => u.id === Post.userId)[0].profilePicture} alt="" className="postProfileImage" />
              <span className="postUsername">{Users.filter(u => u.id === Post.userId)[0].username}</span>
              <span className="postUserData">{Post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <div className="postText">{Post?.desc} </div>
            <img className="postImg" src={Post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postButtonLeft">
              <img className="likeIcon" src="/Assets/like.png" alt="" onClick={likeHandler} />
              <img className="likeIcon" src="/Assets/heart.png" alt="" onClick={likeHandler} />
              <span className="postLikeCounter">{like} peopel Like it</span>
            </div>
            <div className="postButtonRight ">
              <span className="postCommentText">{Post.comment}Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

