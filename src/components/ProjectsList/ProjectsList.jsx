import "./ProjectsList.css";

//ASSETS

import LikeFilled from "../../assets/like-filled.svg";
import Like from "../../assets/like.svg";

export default function ProjectsList(props) {
  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="projects-grid">
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={LikeFilled} alt="LikeFilled" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
        <div className="projects-card d-flex jc-center al-center fd-column">
          <div className="thumb tertiary-background"></div>
          <h3>João Silva</h3>
          <p>BR, Brasil</p>
          <img src={Like} alt="Like" height="20px" />
        </div>
      </div>
    </div>
  );
}
