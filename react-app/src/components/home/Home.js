import "./home.css";
import reading from "../images/Splash-Page-Image.png";
import LoginOptions from "../LoginOption/LoginOption";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm'
import SignUpForm from "../auth/SignUpForm";
import logo from "../images/BetterReads-logos_black.png";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const books = useSelector((state) => state.books);
  const allPics = Object.values(books).map((el) => (
    <img key={el.id} alt="cover" className="collection_images" src={el["cover_url"]} />
  ));

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  let pics = shuffle(allPics).slice(0, 9)

  useEffect(() => {
    if (session?.user) {
      history.push("/home");
    }

  }, [history, session?.user])

  const sectionStyle = {
    backgroundImage: `url(${reading})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }


  return (
    <div id='splash-outer-wrapper'>


      <div className="home_component">
        {showLogin &&
          <Modal>
            <LoginForm setShowLogin={setShowLogin} />
          </Modal>
        }
        {showSignup &&
          <Modal>
            <SignUpForm setShowSignup={setShowSignup} />
          </Modal>
        }
        <div id="splash-nav-bar">
          <a href="/" ><img alt="logo" id="splash-logo" src={logo}></img></a>
        </div>
        <div className="middle-image-streach" style={sectionStyle}>
          <LoginOptions setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
        </div>
        <div id="splash-page-text-full-container">
          <div id='splash-page-text-inner'>
            <p id="splash-page-text-head">Deciding what to read next?</p>
            <p id="splash-page-text-sub">You’re in the right place. Take a look at our titles or genres to find the perfect book for you..</p>
          </div>
          <div id='splash-page-text-inner'>
            <p id="splash-page-text-head">What are you reading?</p>
            <p id="splash-page-text-sub">If you need help keeping track of what books you are reading or want read, we can help you organize your book records. </p>
          </div>
        </div>
        <div id="splash-book-collection-container">
          <p id="splask-book-container-header">What will you discover?</p>
          <div id="spalsh-book-collection-cards">
            {pics}
          </div>
        </div>
      </div>
      <div id="splash-page-footer-container">
        <div id='splash-genre-list-title'>Developers</div>
        <div id='splash-footer-developer-container'>
          <div id='footer-link'>
            <a href='https://github.com/ericgeagan'><img alt='github' className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/eric-geagan-462323195/'><img alt="linkedin" className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/ericgeagan'>Eric Geagan</a>
          </div>
          <div id='footer-link'>
            <a href='https://github.com/stili87'><img alt='github' className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/andrew-stilinovic-94277180/'><img alt="linkedin" className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/stili87'>Andrew Stilinovic</a>
          </div>
          <div id='footer-link'>
            <a href='https://github.com/javidenis'><img alt='github' className='icon' src={gitHub}></img></a>
            <a href='https://www.linkedin.com/in/jorge-denis-9749b1198/'><img alt="linkedin" className='icon' src={linkedin}></img></a>
            <a id='name' href='https://github.com/javidenis'>Jorge Denis</a>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Home;
