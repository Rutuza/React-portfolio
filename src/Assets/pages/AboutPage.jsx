import React from "react";
import Navbar from "../components/Navbar";
// import Aboutme from '../components/Aboutme';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div id="about">
        <div className="pagename">About Me</div>
        <div id="flex-container">
          <div className="card"></div>
          <div className="about-content">
            <div className="inv-comma">"</div>
            <div className="intro">
              As a Final Year Computer Science student at Amity University,
              Gwalior (M.P), I get to combine my love for technology with my
              passion for art and design. I have strong passion for Web
              Development, UI/UX Designing and Database. I enjoy using my
              creativity and problem-solving skills to create digital
              experiences that do not only look great but also work seamlessly
              for the user. I believe that continuous learning is the key to
              success and I'm always on the lookout for fresh challenges to keep
              me motivated and engaged.
              <div className="prs-info">
                <div className="name">
                  <b>Name: </b>Jyotika Dalal
                </div>
                <div className="phn">
                  <b>Phone: </b>(+91)8319278208
                </div>
                <div className="email">
                  <b>Email: </b>dalal.jyotika05@gmail.com
                </div>
                <div className="add">
                  <b>Address: </b>Prabhatam Heights, Raisen road, Bhopal, 462022
                </div>
                <div className="social">
                  <b>Social: </b>
                  <a
                    href="https://www.linkedin.com/in/jyotika-dalal-2bb242240/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  <a href="https://github.com/Rutuza" target="_blank">
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/rxtu_004/?next=%2F"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <button type="button" className="dwn-btn">
              Download CV
            </button>
          </div>
        </div>

        {/* Education section starts here */}
        <div id="edu">
          <div className="sec-name">
            Education <span className="hr-line"></span>
          </div>
          <div className="edu_container">
            <div className="row">
              <div className="">
                <b className="uni-name">
                  Ryan International School, Bhopal (M.P)
                </b>{" "}
                <br />
                <b className="year">2017 - 2018</b>
              </div>
              <div className="side-by-side">
                <h3 className="edu-type">Higher Secondary Education</h3>
                <div className="grade-info">
                  I received a divisional grade of 72.4% for my matriculation in
                  the 2017-2018 school year at Ryan International School,
                  Bhopal, Madhya Pradesh.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="">
                <b className="uni-name">R.D Public School, Betul (M.P)</b>{" "}
                <br />
                <b className="year">2019 - 2020</b>
              </div>
              <div className="side-by-side">
                <h3 className="edu-type">
                  Senior Secondary Education {"| "}
                  <span className="stream">PCM</span>
                </h3>
                <div className="grade-info">
                  I received a divisional grade of 78.3% for my +2 in the
                  2019-2020 school year at RD Public School, Betul, Madhya
                  Pradesh.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="">
                <b className="uni-name">Amity University, Gwalior (M.P)</b>{" "}
                <br />
                <b className="year">2020 - Present</b>
              </div>
              <div className="side-by-side">
                <h3 className="edu-type">
                  Bachelor's of Technology (B.Tech) {"| "}
                  <span className="stream">Computer Science</span>
                </h3>
                <div className="grade-info">
                  Pursuing B. Tech. CSE at Amity University in Madhya Pradesh
                  with a cumulative GPA of 7.69 as of the sixth semester.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="exp">
          <div className="sec-name">
           Experience <span className="hr-line"></span>
           
          </div>
          <div className="edu_container">
            <div className="row">
              <div className="">
                <b className="uni-name">Teachnook Ed.Tech firm, Bangalore</b>
                <br />
                <b className="year">01 Jul - 31 Sep'22</b>
              </div>
              <div className="side-by-side">
                <h3 className="edu-type">Frontend development {"| "}   <span className="stream">HTML, CSS3, JavaScript, Sass</span>
                </h3>
                <div className="grade-info">
                  Collaborated with the front-end development team to implement
                  responsive and user-friendly web interfaces. Gained hands-on
                  experience in optimizing website performance and ensuring
                  cross-browser compatibility.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="">
                <b className="uni-name">Nullclass Ed.tech firm, Bangalore</b>
                <br />
                <b className="year">07 Jul - Present</b>
              </div>
              <div className="side-by-side">
                <h3 className="edu-type">
                  MERN Stack {"| "}
                  <span className="stream">MongoDB, Express.js, React.js, Node.js</span>
                </h3>
                <div className="grade-info">
                Worked on building web applications using the MERN stack.Developed RESTful APIs and integrated them with the frontend components. Contributed to database design, data modeling, and efficient data storage using MongoDB.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
