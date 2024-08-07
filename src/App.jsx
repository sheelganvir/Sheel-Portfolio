import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { Project } from "./components/Project/Project";
import { SkillCard } from "./components/Cards/";

function App() {
  return (
    <>
      <Menu />
      <Header />

      <main>
        <section className="about" id="About">
          <div className="center">
            <figure className="about__imgContainer">
              <img className="about__img" src="./imgs/me3.png" alt="Me" />
            </figure>
            <article className="about__info">
              <h2 className="about__subtitle">Hello I am Sheel Ganvir</h2>
              <h1 className="about__title">MERN-Stack Developer</h1>
              <p className="about__parraf">I am a MERN-stack developer with skills in C & C++. I am currently focused on learning Web Development and Data Structures and Algorithms. I am eager to contribute to a variety of engaging projects and actively seeking internships in Web Development or Software Development. I am excited to collaborate on Web Development projects and actively exploring opportunities to expand my potential.
              </p>
              <button className="button" type="button">
                <a href="mailto:sheelganvir2805@gmail.com">
                  Send me an email
                </a>
              </button>
            </article>
          </div>
        </section>

        <section className="skills" id="Skills">
          <div className="skills__background z__1">
            <div className="bg__2"></div>
            <div className="bg__1"></div>
          </div>
          <div className="skills__roles center z__2">
            <article className="skills__roles__item bg__3 ">
              <figure>
                <img src="./svgs/roles_ux-ui.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>General Front end Developer</h2>
                <p>
                This role involves a broad array of responsibilities, from
                  implementing designs and crafting visual components to
                  overseeing user interaction and collaborating with the
                  backend.
                </p>
              </div>
            </article>
            <article className="skills__roles__item bg__3">
              <figure>
                <img src="./svgs/roles_programming.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Backend Developer</h2>
                <p>This role involves developing and maintaining server-side logic, databases, and APIs, ensuring performance and scalability, and collaborating with frontend developers.
                </p>
              </div>
            </article>
            <article className="skills__roles__item bg__3">
              <figure>
                <img src="/svgs/roles_responsive.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Responsive Developer</h2>
                <p>
                  I specialize in creating designs that seamlessly adjust to
                  various screen sizes, guaranteeing that the application
                  appears and operates smoothly across mobile devices, tablets,
                  and desktop computers.
                </p>
              </div>
            </article>
          </div>
          <div className="skills__experience center z__2">
            <div className="skills__experience__item __years">
              <span><figure><img src="./logos/college.png" alt="College" /></figure></span>
              <h2>National Institute of Technology, Agartala</h2>
              <h1>B.Tech, Electronics and Communication Engineering</h1>
            </div>
            <div className="skills__experience__item bg__3">
              <span>3+</span>
              <p>Languages</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>10+</span>
              <p>Projects</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>5+</span>
              <p>Skills</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>20+</span>
              <p>Certificates</p>
            </div>
          </div>
          <h2 className="skills__techs center z__2">My technologies</h2>
          <div className="skills__techs center z__2">
            <SkillCard name="HTML" icon="html" />
            <SkillCard name="CSS" icon="css" />
            <SkillCard name="JS" icon="js" />
            <SkillCard name="Git" icon="git" />
            <SkillCard name="Github" icon="github" />
            <SkillCard name="React JS" icon="react" />
            <SkillCard name="Node JS" icon="node" />
            <SkillCard name="Tailwind CSS" icon="tailwind" />
            <SkillCard name="MongoDB" icon="mongodb" />
            <SkillCard name="Express JS" icon="express" />
          </div>
        </section>

        <section className="projects bg__1" id="Projects">
          <article className="projects__info center">
            <div className="projects__info__text">
              <h2>FEATURED PROJECTS</h2>
              <p>Here you can see my principal projects</p>
            </div>
            <button className="button inactive" type="button">
              <a href="/projects">View all</a>
            </button>
          </article>
          <div className="projects__box center">
            <Project
              img="./imgs/projects/alignment.png"
              project="Alignment-Checker-ChromeExtension"
              repo="https://github.com/sheelganvir/Alignment-Checker-ChromeExtension"
              live="https://drive.google.com/file/d/1lh-FvjS8aUPxKaK2cT5tl05duvjaxvtQ/view?usp=drive_link"
            />
            <Project
              img="./imgs/projects/My-Music-Player.png"
              project="My-Music-Player"
              repo="https://github.com/sheelganvir/My-Music-Player"
              live="https://my-music-player-zeta.vercel.app/"
            />
            <Project
              img="./imgs/projects/file_sharing.png"
              project="File-Sharing-Application"
              repo="https://github.com/sheelganvir/File-Sharing-Application"
              live="https://file-sharing-application-thop.vercel.app/"
            />
            <Project
              img="./imgs/projects/gmail-clone.png"
              project="Gmail-Clone"
              repo="https://github.com/sheelganvir/Gmail-Clone"
              live="https://gmail-ten.vercel.app/"
            />
            
            <Project
              img="./imgs/projects/youtube.jpg"
              project="MyYoutube-Clone"
              repo="https://github.com/sheelganvir/MyYoutube-Clone"
              live="/"
            />
            
            <Project
              img="./imgs/projects/pwskills.png"
              project="PWSkills-Clone"
              repo="https://github.com/sheelganvir/PWskills-homepage"
              live="https://sheelganvir.github.io/PWskills-homepage/"
            />
            <Project
              img="./imgs/projects/simon.png"
              project="The-Simon-Game"
              repo="https://github.com/sheelganvir/The-Simon-Game"
              live="https://sheelganvir.github.io/The-Simon-Game/"
            />
            
            <Project
              img="./imgs/projects/Old-portfolio.png"
              project="Old-portfolio"
              repo="https://github.com/sheelganvir/Portfolio"
              live="https://sheelganvir.github.io/Portfolio/"
            />
            
            
            
          </div>
        </section>

        <section className="contact bg__2">
          <div>
            <div className="contact__box center bg__3 z__2">
              <article className="contact__text">
                <h3>Lets work on your next project</h3>
                <p>
                  You can send me an email where you can explain the detail of
                  your project
                </p>
              </article>
              <button className="button" type="button">
                <a href="mailto:sheelganvir2805@gmail.com">Contact</a>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export { App };
