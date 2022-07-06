import "./home.css";
import logo from "../images/Screen Shot 2022-06-29 at 1.34.22 PM.png";
import reading from "../images/alfons-morales-YLSwjSy7stw-unsplash.jpeg";
import LoginOptions from "../LoginOption/LoginOption";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Home = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const books = useSelector((state) => state.books);
  const pics = Object.values(books).map((el) => (
    <img  key={el.id} alt="cover" className="collection_images" src={el["cover_url"]} />
  ));

useEffect(() => {
  if (session.user) {
    history.push("/home");
  }

},[])

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
      <div id='splash-genre-list-title'>Developers</div>
      <div id='splash-genre-list-header'>
        <div id='footer-link'>
            <a href='https://github.com/ericgeagan'><img className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/eric-geagan-462323195/'><img className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/ericgeagan'>Eric Geagan</a>
        </div>
        <div id='footer-link'>
            <a href='https://github.com/stili87'><img className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/andrew-stilinovic-94277180/'><img className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/stili87'>Andrew Stilinovic</a>                            
        </div>
        <div id='footer-link'>
            <a href='https://github.com/javidenis'><img className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/jorge-denis-9749b1198/'><img className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/javidenis'>Jorge Denis</a>                            
        </div>
        <div id='footer-link'>
            <a href='https://github.com/IamxiaoSheep'><img className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/'><img className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/IamxiaoSheep'>Jorge Cardenas</a>                            
        </div>
      </div>
    </div>

  );
};

export default Home;
