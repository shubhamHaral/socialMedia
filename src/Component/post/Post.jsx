import "./Post.css"
import { Users } from "../../dummyData"
import { MoreVert } from "@mui/icons-material"
export default function Post({ Post }) {
  const user = Users.filter(u => u.id === 1)
  console.log(user[0].username)
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
              <img className="likeIcon" src="/Assets/like.png" alt="" />
              <img className="likeIcon" src="/Assets/heart.png" alt="" />
              <span className="postLikeCounter">{Post.like} peopel Like it</span>
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

