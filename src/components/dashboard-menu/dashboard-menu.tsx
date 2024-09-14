import { ItemWrap, LinkWrap, MenuWrap } from "./dashboard-menu-styles";
import feedIcon from "../../assets/feed-icon.svg";
import draftsIcon from "../../assets/drafts-icon.svg";
// import analytics from "../../assets/analytics-icon.svg";
import notifs from "../../assets/notifications-icon.svg";
import profile from "../../assets/profile-icon.svg";
// import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase-utils";
import { useNavigate } from "react-router-dom";
export const DashboardMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrap>
        <LinkWrap to="/dashboard">
          <h1>CHATTER</h1>
        </LinkWrap>
        <LinkWrap to="/dashboard">
          <ItemWrap>
            <img src={feedIcon} />
            <span>Feed</span>
          </ItemWrap>
        </LinkWrap>
        <LinkWrap to="drafts">
          <ItemWrap>
            <img src={draftsIcon} />
            <span>Drafts</span>
          </ItemWrap>
        </LinkWrap>
        <LinkWrap to="notifications">
          <ItemWrap>
            <img src={notifs} />
            <span>Notifications</span>
          </ItemWrap>
        </LinkWrap>
        <LinkWrap to="/profile">
          <ItemWrap>
            <img src={profile} />
            <span>Profile</span>
          </ItemWrap>
        </LinkWrap>

        <p
          className="logout"
          onClick={() => {
            signOutUser();
            navigate("/");
          }}
        >
          Log out
        </p>
        <LinkWrap to="create">
          <button>Create Post</button>
        </LinkWrap>
      </MenuWrap>
    </>
  );
};
