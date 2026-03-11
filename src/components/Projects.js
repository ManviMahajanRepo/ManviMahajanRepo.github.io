import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    icon: '⚡',
    name: 'CSV-to-DB ETL Pipeline',
    desc: 'Chunk-oriented ETL pipeline using Spring Batch with fault tolerance, skip logic, retry policies, and H2 integration. Processes large datasets reliably with full job monitoring.',
    stack: ['Java', 'Spring Batch', 'H2', 'Maven'],
    github: '#',
  },
  {
    icon: '🔐',
    name: 'Secure REST API',
    desc: 'Full-featured Spring Boot REST API with Spring Security — JWT-based auth, role-based access control, and endpoint protection patterns.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT'],
    github: '#',
  },
  {
    icon: '📡',
    name: 'Event-Driven Microservice',
    desc: 'Kafka-based event streaming system with producer/consumer services, schema validation, and dead letter queue handling for reliable async communication.',
    stack: ['Java', 'Apache Kafka', 'Spring Boot', 'Docker'],
    github: '#',
  },
];

function ProjectCard({ icon, name, desc, stack, github, delay }) {
  const [ref] = useReveal(delay);
  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-top">
        <span className="project-icon">{icon}</span>
        <div className="project-links">
          <a href={github} className="project-link" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="project-name">{name}</div>
      <p className="project-desc">{desc}</p>
      <div className="project-stack">
        {stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeader num="04." title="Projects" />
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.name} {...p} delay={i * 0.1} />)}
      </div>
    </section>
  );
}

export default Projects;
