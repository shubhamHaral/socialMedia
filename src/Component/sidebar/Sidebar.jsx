import "./Sidebar.css"
import {Users} from "../../dummyData"
import { Bookmark, Chat, Group, Help, PlayCircle, RssFeed, School, Today, WorkOutlined } from "@mui/icons-material"
import CloseFriend from "../closeFriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWeapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sideparListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sideparListItem">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sideparListItem">Vedio</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sideparListItem">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sideparListItem">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sideparListItem">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlined className="sidebarIcon" />
            <span className="sideparListItem">Job</span>
          </li>
          <li className="sidebarListItem">
            <Today className="sidebarIcon" />
            <span className="sideparListItem">Today</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sideparListItem">Courses</span>
          </li>

        </ul>
        <button className="sidebarButton"> Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/Assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">jane Doe</span>
          </li>
        {Users.map(u=>(
          <CloseFriend key={u.id} user={u}/>
        ))}
        </ul>
      </div>
    </div>
  )
}
