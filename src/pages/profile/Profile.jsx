import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/2114413/pexels-photo-2114413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="backyard exploring"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/1578459/pexels-photo-1578459.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="snow exploring"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="http://linkedIn.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>Michael Drew</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Adelaide, Australia</span>
              </div>
              {/* <div className="item">
                <LanguageIcon />
                <span>wooffurs.com</span>
              </div> */}
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
