import { ItemWrap, MenuWrap } from "./dashboard-menu-styles"
import feedIcon from '../../assets/feed-icon.svg'
import draftsIcon from '../../assets/drafts-icon.svg'
import analytics from '../../assets/analytics-icon.svg'
import notifs from '../../assets/notifications-icon.svg'
import profile from '../../assets/profile-icon.svg'
import { Link } from "react-router-dom"
export const DashboardMenu=()=>{
  return (
    <>
      <MenuWrap>
        <h1>CHATTER</h1>
        
        <ItemWrap>
          <img src={feedIcon}/>
          <span>Feed</span>
        </ItemWrap>
        <ItemWrap>
          <img src={draftsIcon}/>
          <span>Drafts</span>
        </ItemWrap>
        <ItemWrap>
          <img src={notifs}/>
          <span>Notifications</span>
        </ItemWrap>
        <ItemWrap>
          <img src={analytics}/>
          <span>Analytics</span>
        </ItemWrap>
        <ItemWrap>
          <img src={profile}/>
          <span>Profile</span>
        </ItemWrap>
        <p className="logout">Log out</p>
        <Link to='create'><button>Create Post</button></Link>
        
      </MenuWrap>
     
    </>
  )
}