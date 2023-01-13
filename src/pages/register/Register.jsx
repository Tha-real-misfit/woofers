import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Woof furs.</h1>
          <p>Welcome to the number one social network for pets.</p>
          <span>Have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>

          <form action="/action_page.php">
            <div className="groups">
              <div className="groupOne">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="groupTwo">
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="groupThree">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="groupFour">
                <input type="text" placeholder="Suburb" />
                <input type="text" placeholder="Postcode" />
              </div>
              <div className="groupFive">
                <input type="text" placeholder="Pet Name" />
                <input type="text" placeholder="Pet Breed" />
              </div>
              <div className="groupSix">
                <input type="text" placeholder="Pet Age" />
                <input type="text" placeholder="Pet Gender" />

                {/* <input type="submit"></input> */}
              </div>
              <div className="groupSeven">
                <input type="text" placeholder="Pet Image" />
                <input type="file" placeholder="image" />
              </div>
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
