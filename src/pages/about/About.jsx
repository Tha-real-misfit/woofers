import "./about.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OutlinedCard from "../../components/card/Card";

const About = () => {
  return (
    <div className="about">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/7474856/pexels-photo-7474856.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="backyard exploring"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/5486952/pexels-photo-5486952.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="snow exploring"
          className="aboutPic"
        />
      </div>
      <div className="aboutContainer">
        <div className="mainInfo">
          {/* <span>About Us</span> */}
          <div className="mainLeft">
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
              <div className="info">
                <div className="item">
                  <a href="https://goo.gl/maps/gtGA4WM3fhAXthjV6">
                    <PlaceIcon />
                  </a>
                  <span>Adelaide, Australia</span>
                </div>
              </div>
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <div className="mainRight">
            <span className="rightInfo">
              We are a small family operated vet. We started out in Adelaide,
              Austrlia in 1986 and have been here ever since. We welcome all
              types of pets but specialise in dogs and cats. Here at Wooffurs we
              also offer a social network for pet owners.
            </span>
          </div>
        </div>
        {/* <OutlinedCard /> */}
      </div>
    </div>
  );
};

export default About;
