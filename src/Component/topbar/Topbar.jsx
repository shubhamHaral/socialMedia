import "./Topbar.css"
import { Person, Search, Chat, Notifications } from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search  className="searchIcon"/>
          <input placeholder="Search for post friends or vedio" className="searchInput" />
        </div>
      </div>
      <div className="topbarRigt">
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div> <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div> <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/Assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
