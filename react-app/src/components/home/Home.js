import "./home.css";
import logo from "../images/Screen Shot 2022-06-29 at 1.34.22 PM.png";
import reading from "../images/alfons-morales-YLSwjSy7stw-unsplash.jpeg";
import LoginOptions from "../LoginOption/LoginOption";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const books = useSelector((state) => state.books);
  const pics = Object.values(books).map((el) => (
    <img alt="cover" src={el["cover_url"]} />
  ));
  console.log(pics);

  if (session.user) {
    history.push("/users");
  }
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

      <LoginOptions />

      <div className="okay">
        <div className="current_stuff">
          Our Current Collection! It's still growing...!{" "}
        </div>
        <div className="over">{pics}</div>
      </div>
    </div>
  );
};

export default Home;
