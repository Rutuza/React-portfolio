import React from "react";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div className="left">
          <h2>My creative skills and knowledge about technology</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta adipisci asperiores laboriosam soluta quis omnis nam beatae molestias optio provident, quasi libero! Suscipit eos perspiciatis eaque commodi dolorum aliquam atque provident harum distinctio alias, saepe quos nihil voluptates quo, laudantium corrupti, ratione deserunt voluptatem iure enim maxime? Illo rem dolor officiis voluptatibus ea libero, id nam maiores debitis, doloremque cupiditate repellendus vitae corrupti reiciendis blanditiis sint recusandae, nisi ipsum. Dolores, ex eos. Nam, incidunt voluptatum fugiat eveniet cumque unde voluptatem! Officiis ipsa illum magni omnis dolorem cupiditate vero dolorum nostrum hic, delectus maxime voluptatum mollitia voluptatem eaque ab, impedit nam itaque, maiores nesciunt odio temporibus autem aperiam! A, veniam sed at cumque adipisci accusantium corporis assumenda esse corrupti nemo!</p>

          <button className="readmore-btn"><a href="#">Read More</a></button>
        </div>

        <div className="right">
          <div className="line">
            <div className="info">
              <span>C++</span>
              <span>70%</span>
            </div>
          </div>

          <div className="line">
            <div className="info">
              <span>CSS</span>
              <span>78%</span>
            </div>
          </div>

          <div className="line">
            <div className="info">
              <span>React</span>
              <span>80%</span>
            </div>
          </div>

          <div className="line">
            <div className="info">
              <span>SQL</span>
              <span>90%</span>
            </div>
          </div>

          <div className="line">
            <div className="info">
              <span>Figma</span>
              <span>85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
