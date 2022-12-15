import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Events from "../../assets/2.png";
import Groups from "../../assets/3.png";
import Gallery from "../../assets/4.png";
import Videos from "../../assets/5.png";
import Tutorials from "../../assets/6.png";
import Meetups from "../../assets/7.png";
import Messages from "../../assets/8.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/1009922/pexels-photo-1009922.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="dachshund"
            />
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>

          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={Events} alt="Events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="Videos" />
            <span>Videos</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src={Meetups} alt="Meetups" />
            <span>Meetups</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Messages} alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
