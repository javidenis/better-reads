import "./home.css";
import logo from "../images/Screen Shot 2022-06-29 at 1.34.22 PM.png";
import reading from "../images/file.jpeg";
import LoginOptions from "../LoginOption/LoginOption";
const Home = () => {
  return (
    <div className="home_component">
      <div className="first_part">
        <div className="first_part_logo">
          <div>
            <img src={logo} alt="Logo" className="home_logowe" />{" "}
          </div>
        </div>
      </div>
      <div className="second_part">
        <img src={reading} alt="Logo" className="home_reading" />
      </div>
      <div>
        <LoginOptions />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
