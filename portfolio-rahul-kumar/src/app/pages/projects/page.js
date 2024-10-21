'use client'
import Speedometer from '../../../components/Speedometer';



const currentValue = 75;
const Projects = () => (


    <div className="container my-5" id="projects">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/project1.jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">A brief description of the project.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/project2.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">A brief description of the project.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="/project3.jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Project 3</h5>
              <p className="card-text">A brief description of the project.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Speedometer value={currentValue} />
      </div>
    </div>
  );
  
  export default Projects;
  