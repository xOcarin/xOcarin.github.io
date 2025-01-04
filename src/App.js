import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function App() {
  // Add state for modal
  const [selectedImage, setSelectedImage] = useState(null);
  // Add new state for controlling animation
  const [isVisible, setIsVisible] = useState(false);
  // Add new state for selected description
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  // Add new state for intro overlay
  const [showIntro, setShowIntro] = useState(true);
  const [mainContentVisible, setMainContentVisible] = useState(false);

  const imageRef = useRef(null);
  const hoverSound = useRef(new Audio('/hover.wav'));
  const clickSound = useRef(new Audio('/select.wav'));
  const pingSound = useRef(new Audio('/highPing.wav'));
  const closeSound = useRef(new Audio('/nodisc.wav'));
  const fadeSound = useRef(new Audio('/skkk.wav'));
  const fade2Sound = useRef(new Audio('/fadeIn.wav'));

  useEffect(() => {
    if (selectedImage && imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        transition: true,
        speed:400,
        max:2
      });

      return () => {
        if (imageRef.current) {
          imageRef.current.vanillaTilt.destroy();
        }
      };
    }
  }, [selectedImage]);

  // Add handler for opening modal
  const handleImageClick = (imageSrc, description) => {
    playClickSound();
    playFadeSound();
    setSelectedImage(imageSrc);
    setSelectedDescription(description);
    // Trigger fade-in
    setTimeout(() => setIsVisible(true), 10);
  };

  // Add handler for closing modal
  const handleCloseModal = () => {
    playCloseSound();
    // Trigger fade-out
    setIsVisible(false);
    // Remove modal after animation completes
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleAboutClick = () => {
    playPingSound();
    setShowAbout(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleCloseAbout = () => {
    playCloseSound();
    setIsVisible(false);
    setTimeout(() => setShowAbout(false), 300);
  };

  const playHoverSound = () => {
    //hoverSound.current.play();
  };

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  };

  const playPingSound = () => {
    pingSound.current.currentTime = 0;
    pingSound.current.play();
  };

  const playCloseSound = () => {
    closeSound.current.currentTime = 0;
    closeSound.current.play();
  };

  const playFadeSound = () => {
    fadeSound.current.currentTime = 0;
    fadeSound.current.play();
  };
  const playFade2Sound = () => {
    fade2Sound.current.currentTime = 0;
    fade2Sound.current.play();
  };

  // Add handler for intro click
  const handleIntroClick = () => {
    playFade2Sound();
    document.querySelector('.intro-overlay').classList.add('fade-out');
    setTimeout(() => {
      setShowIntro(false);
      setMainContentVisible(true);
    }, 250);
  };

  return (
    <>
      {showIntro && (
        <div className={`intro-overlay ${!showIntro ? 'fade-out' : ''}`} onClick={handleIntroClick}>
          <div className="intro-text">Click to Enter</div>
        </div>
      )}
      
      <div className={`main-content ${mainContentVisible ? 'visible' : ''}`}>
        <div className="App">
          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button className="nav-button" onMouseEnter={playHoverSound}  onClick={handleAboutClick}>
              About
            </button>
            <a 
              href="https://bsky.app/profile/ocarin.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-button"
            >
              BlueSky
            </a>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className={`modal-overlay ${isVisible ? 'active' : ''}`} onClick={handleCloseModal}>
              <div className={`modal-content ${isVisible ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
                <img 
                  ref={imageRef}
                  src={selectedImage} 
                  alt="Selected artwork" 
                  className={`modal-image ${isVisible ? 'active' : ''}`}
                />
                <div className="modal-text">
                  {selectedDescription}
                </div>
                <button className="close-button" onClick={handleCloseModal}>×</button>
              </div>
            </div>
          )}

          {/* About Modal */}
          {showAbout && (
            <div id={"aboutModal"} className={`modal-overlay ${isVisible ? 'active' : ''}`} onClick={handleCloseAbout}>
              <div className={`modal-content about-modal-content ${isVisible ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
                <h2>Hello, I'm Ocarin.</h2>
                <p>
                  Welcome to a collection of my creative works. This gallery serves as both a showcase and personal motivation to continue creating.

                  To develop my artistic skills, I've set a goal to create 50 pieces that I'm proud of by the end of 2025.
                  <br />
                  <br />
                  I hope you enjoy!
                </p>
                <button className="close-button" onClick={handleCloseAbout}>×</button>
              </div>
            </div>
          )}

          <div>
            <h1 id='header'>Ocarin's Gallery</h1>
          </div>
          <div id='gallery'>
            <div className='piecesDiv'>
              <img className='piecesimg' src="/piece1.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece1.png", "001- Dark Mountain Concept Art")}/>
              <img className='piecesimg' src="/piece2.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece2.png", "002- Windows Cielo Concept Art")} />
              <img className='piecesimg' src="/piece3.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece3.png", "003- Digital Picture Frame for Windows")} />
              <img className='piecesimg' src="/piece4.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece4.png", "004- Nintendo Switch 2 Home Menu Concept")} />
              <img className='piecesimg' src="/piece5.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece5.png", "005- SONY's IOS 2008 ")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/piece1.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg' src="/shelf2.png" alt="Description" />

            <div className='piecesDiv'>
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
              <img className='piecesimg' src="/empty.png" alt="Description" onMouseEnter={playHoverSound} onClick={() => handleImageClick("/empty.png", "Coming Soon!")} />
            </div>
            <img className='shelfimg  lastshelf' src="/shelf2.png" alt="Description" />
          </div>
          <div>
            <img className='logoimg' src="/melogo.png" alt="Description" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
