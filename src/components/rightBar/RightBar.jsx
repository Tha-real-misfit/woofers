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
                src="https://images.pexels.com/photos/1458908/pexels-photo-1458908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="maltese"
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/733835/pexels-photo-733835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="party dog"
              />
              <span>Natasha Fernandez</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
