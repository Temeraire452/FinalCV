import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Temeraire452/repos');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Mina GitHub-projekt</h2>
      {loading ? (
        <p>Laddar projekt...</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </strong>
              : {project.description != null && project.description !== '' ? project.description : 'Ingen beskrivning tillgänglig'}
              {' '}
              [<a href={project.html_url} target="_blank" rel="noopener noreferrer">Öppna på GitHub</a>]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GithubProjects;