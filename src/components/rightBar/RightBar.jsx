import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2791658/pexels-photo-2791658.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="swimming"
              />
              <span>Robert Lockwood</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="hey"
              />
              <span>Jennifer Wong</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="hey"
              />
              <p>
                <span>Jennifer Wong</span> changed profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6322946/pexels-photo-6322946.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="park hangs"
              />
              <p>
                <span>Elizabeth Stanley</span> liked a comment
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4355779/pexels-photo-4355779.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="dog park"
              />
              <p>
                <span>David Whittaker</span> checked in
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5158655/pexels-photo-5158655.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Bailey"
              />
              <div className="online" />
              <span>Susan Poole</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8327474/pexels-photo-8327474.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="out walking"
              />
              <div className="online" />
              <span>Joeseph Chandler</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Comfortable"
              />
              <div className="online" />
              <span>Sarah Nash</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
