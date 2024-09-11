import "./Post.css"
import{MoreVert} from "@mui/icons-material"
export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/Assets/person/1.jpeg" alt="" className="postProfileImage" />
                    <span className="postUsername">Shubham Haral</span>
                    <span className="postUserData">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <div className="postText">Hey! Its my first Post :) </div>
                <img className="postImg" src="/Assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postButtonLeft">
                    <img className="likeIcon" src="/Assets/like.png" alt="" />
                    <img className="likeIcon" src="/Assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 peopel Like it</span>
                </div>
                <div className="postButtonRight ">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

