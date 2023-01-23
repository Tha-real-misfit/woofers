import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    firstname: "",
    lastname: "",
    suburb: "",
    postcode: "",
    petname: "",
    petbreed: "",
    petage: "",
    petgender: "",
    // petimage: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

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
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="groupTwo">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phonenumber"
                  onChange={handleChange}
                />
              </div>
              <div className="groupThree">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                />
              </div>
              <div className="groupFour">
                <input
                  type="text"
                  placeholder="Suburb"
                  name="suburb"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  name="postcode"
                  onChange={handleChange}
                />
              </div>
              <div className="groupFive">
                <input
                  type="text"
                  placeholder="Pet Name"
                  name="petname"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Pet Breed"
                  name="petbreed"
                  onChange={handleChange}
                />
              </div>
              <div className="groupSix">
                <input
                  type="text"
                  placeholder="Pet Age"
                  name="petage"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Pet Gender"
                  name="petgender"
                  onChange={handleChange}
                />

                {/* <input type="submit"></input> */}
              </div>
              {/* <div className="groupSeven">
                <input
                  type="text"
                  placeholder="Pet Image"
                  name="petimage"
                  onChange={handleChange}
                />
                <input type="file" placeholder="image" />
              </div> */}
            </div>
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
