import React from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './Hobbies.css';

const hobbies = [
  {
    icon: '📖',
    name: 'Tech Blogs',
    desc: "Always have a few tabs open — engineering blogs from Stripe, Cloudflare, Discord. The kind of writing where you learn how systems actually break in production.",
    tags: ['High Scalability', 'The Morning Paper', 'Eng at Scale'],
  },
  {
    icon: '🔬',
    name: 'Research Papers',
    desc: "Can't let go of a topic until it's fully understood. Distributed systems classics and AI alignment papers. Dynamo, Raft, Attention Is All You Need — the hits.",
    tags: ['Distributed Systems', 'AI / ML', 'Alignment'],
  },
  {
    icon: '🎧',
    name: 'DJing',
    desc: "Because not everything has to compile. Mixing tracks is its own kind of system design — timing, transitions, knowing your audience. The set either flows or it doesn't.",
    tags: ['Electronic', 'House', 'Live Sets'],
  },
];

function HobbyCard({ icon, name, desc, tags, delay }) {
  const [ref] = useReveal(delay);
  return (
    <div className="hobby-card reveal" ref={ref}>
      <div className="hobby-icon">{icon}</div>
      <div className="hobby-name">{name}</div>
      <p className="hobby-desc">{desc}</p>
      <div className="hobby-tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

function Hobbies() {
  return (
    <section id="hobbies" className="hobbies">
      <SectionHeader num="05." title="Beyond the Code" />
      <div className="hobbies-grid">
        {hobbies.map((h, i) => <HobbyCard key={h.name} {...h} delay={i * 0.1} />)}
      </div>
    </section>
  );
}

export default Hobbies;
