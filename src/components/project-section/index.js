import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function ProjectSection({ projects }) {
  if (!projects || projects.length < 2) return null;
  return (
    <div className="timestamp-section">
      <SectionHeader title="Projects" />
      <div className="body">
        {projects.map((project, index) =>
          index === 0 ? null : (
            <div className="timestamp" key={index}>
              <div className="date" style={{ fontWeight: 600 }}>{project.title}</div>
              <div className="activity">
                {project.techStack && (
                  <div className="tech-stack" style={{ marginBottom: 6 }}>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech" style={{
                        display: 'inline-block',
                        background: '#eee',
                        borderRadius: '8px',
                        padding: '2px 10px',
                        marginRight: 6,
                        fontSize: 14,
                        color: '#444',
                      }}>{tech}</span>
                    ))}
                  </div>
                )}
                <div className="description">{project.description}</div>
                {project.links && <IconButtonBar links={project.links} style={{ color: '#a8a8a8', fontSize: 24, marginTop: 4 }} />}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
