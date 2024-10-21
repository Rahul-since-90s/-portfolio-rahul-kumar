// app/components/Skills.js

const Skills = () => (
    <div className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <i className="bi bi-code-slash" style={{ fontSize: '3rem' }}></i>
          <h5>JavaScript</h5>
          <p>Expert in modern JavaScript (ES6+).</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-bootstrap" style={{ fontSize: '3rem' }}></i>
          <h5>Bootstrap 5</h5>
          <p>Responsive, mobile-first design with Bootstrap.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-react" style={{ fontSize: '3rem' }}></i>
          <h5>React.js</h5>
          <p>Building dynamic UIs with React and Next.js.</p>
        </div>
      </div>
    </div>
  );
  
  export default Skills;
  