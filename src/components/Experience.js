import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './Experience.css';

const jobs = [
  {
    date: '2022 — Present',
    role: 'Software Engineer',
    company: '// Your Current Company',
    bullets: [
      'Built and maintained Java/Spring Boot microservices powering core product features at scale',
      'Designed ETL pipelines using Spring Batch for high-volume data processing with fault tolerance',
      'Implemented authentication and authorization layers with Spring Security',
      'Collaborated cross-functionally to ship features end-to-end, from API design to deployment',
    ],
  },
  {
    date: '2020 — 2022',
    role: 'Software Engineer I',
    company: '// Previous Role',
    bullets: [
      'Developed REST APIs and backend services in Java with comprehensive test coverage',
      'Optimized SQL queries and database schemas to improve performance across critical workflows',
      'Contributed to cloud migration efforts on AWS, containerizing services with Docker',
    ],
  },
];

function ExpItem({ date, role, company, bullets, delay }) {
  const [ref] = useReveal(delay);
  return (
    <div className="exp-item reveal" ref={ref}>
      <div className="exp-date">{date}</div>
      <div>
        <div className="exp-role">{role}</div>
        <div className="exp-company">{company}</div>
        <ul className="exp-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <SectionHeader num="03." title="Experience" />
      <div className="exp-list">
        {jobs.map((j, i) => <ExpItem key={i} {...j} delay={i * 0.1} />)}
      </div>
    </section>
  );
}

export default Experience;
