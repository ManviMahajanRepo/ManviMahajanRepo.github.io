import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './Skills.css';

const skillsData = [
  { cat: 'Languages',        tags: ['Java', 'Python', 'SQL', 'C++', 'Shell'] },
  { cat: 'Backend',          tags: ['Spring Boot', 'Spring Batch', 'Spring Security', 'REST', 'Apache Kafka'] },
  { cat: 'Databases',        tags: ['PostgreSQL', 'MySQL', 'H2', 'Redis'] },
  { cat: 'Cloud & DevOps',   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git'] },
  { cat: 'CS Fundamentals',  tags: ['DSA', 'System Design', 'OS', 'Distributed Systems'] },
  { cat: 'Currently Learning', tags: ['Event-Driven Architecture', 'LeetCode 150', 'Advanced System Design'] },
];

function SkillCard({ cat, tags, delay }) {
  const [ref] = useReveal(delay);
  return (
    <div className="skill-card reveal" ref={ref}>
      <div className="skill-cat">{cat}</div>
      <div className="skill-tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionHeader num="02." title="Skills" />
      <div className="skills-grid">
        {skillsData.map((s, i) => (
          <SkillCard key={s.cat} {...s} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
