import "./Rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="birthdatContainer">
          <img src="/Assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdsyText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthdat today
          </span>
        </div>
        <img src="/Assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="reightbarFriendList">
          {Users.map(u=>(
            <Online  key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
