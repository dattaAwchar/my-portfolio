// import logo from './logo.svg';
import './App.css';
import profileImage from './profile-image.png'
import ScrollReveal from 'scrollreveal';


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
      
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionsClass.classList.add('active-link')
      }else{
          sectionsClass.classList.remove('active-link')
      }                                                    
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .education__img, .contact__input',{interval: 200}); 

function App() {
  return (
    <>
      <div>
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="/" className="nav__logo">Datta Awchar</a>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                <li className="nav__item"><a href="#education" className="nav__link">Education</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className='bx bx-menu'></i>
            </div>
          </nav>
        </header>

        <main className="l-main">
          {/* ===== HOME ===== */}
          <section className="home bd-grid" id="home">
            <div className="home__data">
              <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Datta</span><br /> Web Developer</h1>
              <a href="mailto:dattaAwchar13@gmail.com" className="button">Email</a>
            </div>

            <div className="home__social">
              <a href="https://www.linkedin.com/in/datta-awchar/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
              <a href="https://github.com/dattaAwchar" className="home__social-icon"><i className='bx bxl-github'></i></a>
            </div>

            <div className="home__img">
              <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  <image x="20" y="-10" width="500" height="500" href={profileImage} />
                </g>
              </svg>

            </div>
          </section>

          {/* ===== ABOUT ===== */}
          <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
              <div className="about__img">
                <img src="assets/img/about.jpg" alt="" />
              </div>

              <div>
                <h2 className="about__subtitle">I'm Datta</h2>
                <p className="about__text">A passionate and motivated fresher Frontend Developer with a strong
                  foundation in HTML, CSS, JavaScript, and React.js. Seeking an opportunity to contribute my
                  skills in a dynamic team while continuously growing and learning in the field of web
                  development.</p>
              </div>
            </div>
          </section>

          {/* ===== SKILLS ===== */}
          <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
              <div>
                <h2 className="skills__subtitle">Professional Skills</h2>
                <p className="skills__text">Dattatray Awchar is a proficient frontend developer skilled in HTML, CSS,
                  JavaScript, and React.js. I am adept at using Git for version control and have experience in
                  developing responsive web applications.</p>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className='bx bxl-html5 skills__icon'></i>
                    <span className="skills__name">HTML5</span>
                  </div>
                  <div className="skills__bar skills__html"></div>
                  <div>
                    <span className="skills__percentage">95%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className='bx bxl-css3 skills__icon'></i>
                    <span className="skills__name">CSS3</span>
                  </div>
                  <div className="skills__bar skills__css"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className='bx bxl-javascript skills__icon'></i>
                    <span className="skills__name">JavaScript</span>
                  </div>
                  <div className="skills__bar skills__js"></div>
                  <div>
                    <span className="skills__percentage">75%</span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__names">
                    <i className='bx bxl-react skills__icon'></i>
                    <span className="skills__name">React.js</span>
                  </div>
                  <div className="skills__bar skills__reactjs"></div>
                  <div>
                    <span className="skills__percentage">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== EDUCATION ===== */}
          <section className="education section" id="education">
            <h2 className="section-title">Education</h2>

            <div className="about__container bd-grid">
              <div className="about__img">
                <img src="assets/img/about.jpg" alt="" />
              </div>

              <div>
                <h2 className="about__subtitle">Bachelor of Computer Application (BCA)</h2>
                <p className="about__text">Modern College, Pune | Percentage: 64.52% | CGPA: 7.79 | Graduate: 2024</p>
                <br /><br />
                <h2 className="about__subtitle">XII Grade (HSC Science)</h2>
                <p className="about__text">Science College, Nanded | Percentage: 87.33% | Pass out: 2021</p>
                <br /><br />
                <h2 className="about__subtitle">X Grade (SSC)</h2>
                <p className="about__text">S.S.K.K.V. Manwath, Parbhani | Percentage: 77.80% | Pass out: 2019</p>
              </div>
            </div>
          </section>

          {/* ===== CONTACT ===== */}
          <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
              <form action="" className="contact__form">
                <input type="text" placeholder="Name" className="contact__input" />
                <input type="email" placeholder="Email" className="contact__input" />
                <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                <input type="button" value="Send Email" className="contact__button button" />
              </form>
            </div>
          </section>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p className="footer__title">Datta Awchar</p>
          <p className="footer__copy">&#169; DattaAwchar. All rights reserved</p>
        </footer>
      </div>
    </>
  );
}

export default App;
