import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsList.css'

const ProjectsList = ({projects}) => {

  return (
    <div className="ProjectsList">
      {projects.map((project, index) => (
        <div className="ProjectsList-project">
          <img src={project.img } key={index}/>
        </div>
      ))}
    </div>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectsList