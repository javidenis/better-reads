import "./home.css";
import logo from "../images/Screen Shot 2022-06-29 at 1.34.22 PM.png";
import reading from "../images/alfons-morales-YLSwjSy7stw-unsplash.jpeg";
import LoginOptions from "../LoginOption/LoginOption";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const books = useSelector((state) => state.books);
  const pics = Object.values(books).map((el) => (
    <img  key={el.id} alt="cover" className="collection_images" src={el["cover_url"]} />
  ));


  if (session.user) {
    history.push("/home");
  }

  const sectionStyle = {
    backgroundImage: `url(${reading})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div className="home_component">
      <img alt="bookshelf background" className="top-logo" src={logo}></img>
      <div className="middle-image-streach" style={sectionStyle}>
        <LoginOptions />
      </div>
      <div className="collection-header">Our Book Collection!</div>
      <div className="okay">
        <div className="over">{pics}</div>
      </div>
    </div>

  );
};

export default Home;
