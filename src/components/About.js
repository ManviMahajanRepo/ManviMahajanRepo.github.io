import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './About.css';

function About() {
  const [ref1] = useReveal();
  const [ref2] = useReveal();

  return (
    <section id="about" className="about">
      <SectionHeader num="01." title="About Me" />
      <div className="about-grid">
        <div className="about-text reveal" ref={ref1}>
          <p>I'm a <span className="hl">software engineer</span> with a strong foundation in backend development — Java, Spring Boot, and distributed systems are my comfort zone. I like understanding things deeply, not just making them work.</p>
          <p>Currently navigating the job market and leveling up my <span className="hl">DSA and system design</span> skills. I'm drawn to companies solving hard problems at scale — where architecture decisions actually matter.</p>
          <p>Off the clock: I think a lot about <span className="hl">AI, alignment, and whether LLMs can really reason</span>, read too many things at once, and have strong opinions about code quality.</p>
        </div>
        <div className="terminal-box reveal" ref={ref2}>
          <div className="terminal-bar">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="terminal-title">manvi@dev ~ bash</span>
          </div>
          <div className="terminal-body">
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> whoami</span></div>
            <div className="t-line"><span className="t-out green">manvi — software engineer</span></div>
            <br />
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> cat skills.txt</span></div>
            <div className="t-line"><span className="t-out gold">→ Java / Spring Boot</span></div>
            <div className="t-line"><span className="t-out gold">→ Python, SQL, C++, Shell</span></div>
            <div className="t-line"><span className="t-out gold">→ Kafka, Redis, Docker, AWS</span></div>
            <div className="t-line"><span className="t-out gold">→ System Design, DSA</span></div>
            <br />
            <div className="t-line"><span className="t-prompt">$</span><span className="t-cmd"> echo $STATUS</span></div>
            <div className="t-line"><span className="t-out purple">open to opportunities ✦</span></div>
            <br />
            <div className="t-line"><span className="t-prompt">$</span><span className="cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
