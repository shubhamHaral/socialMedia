import "./Share.css"
import { PermMedia, Room, Label, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="sharetop">
                    <img src="/Assets/person/1.jpeg" alt="" className="shareProfileImage" />
                    <input placeholder="Whats in your mind Shubham?" className="shareInput" />
                </div>
                <hr className="ShareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photos or Vedios</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

