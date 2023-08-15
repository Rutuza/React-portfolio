import React from "react";

function Aboutme() {
  return (
    <div className="about-container">
      <div className="about-heading">About Me</div>

      <div className="page-content">
        <div className="inv-comma">"</div>

        <div className="content">
          <div className="text">
            Mauris et purus sit amet nulla rutrum aliquet. Morbi pellentesque
            odio ipsum, at sodales neque luctus vel. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Ut ut nisl velit. Sed eget felis
            nibh. Fusce faucibus eros dolor, quis sagittis nisi fringilla id.
            Vivamus eu nulla non risus cursus rutrum. Nunc hendrerit posuere
            lectus sit amet malesuada. Fusce faucibus eros dolor, quis sagittis
            nisi fringilla id. Vivamus eu nulla non risus cursus rutrum. Nunc
            hendrerit posuere lectus sit amet malesuada.
          </div>
          <div className="info">
            <ul>
              <li>
                <b>Name: </b>Jyotika Dalal
              </li>
              <li>
                <b>Phone: </b>(+91) 8319278208
              </li>
              <li>
                <b>Email: </b>dalal.jyotika05@gmail.com
              </li>
              <li>
                <b>Address: </b>Bhopal, India 462022
              </li>
              <li>
                <b>Social Media: </b>
              </li>
            </ul>
          </div>
          <div className="downloadcv">
            <a href="#">
              <button className="cv_btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Aboutme;
