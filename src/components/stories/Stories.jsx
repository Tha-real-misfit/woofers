import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Charles Baldwin",
      img: "https://images.pexels.com/photos/3609067/pexels-photo-3609067.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Nancy Webber",
      img: "https://images.pexels.com/photos/2695827/pexels-photo-2695827.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Daniel Coulthard",
      img: "https://images.pexels.com/photos/1431762/pexels-photo-1431762.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Betty Power",
      img: "https://images.pexels.com/photos/325519/pexels-photo-325519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
