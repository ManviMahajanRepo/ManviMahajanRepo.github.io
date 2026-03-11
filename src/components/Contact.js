import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const socials = [
  { label: 'GitHub',   href: 'https://github.com/ManviMahajanRepo' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'LeetCode', href: 'https://leetcode.com' },
  { label: 'Email',    href: 'mailto:your@email.com' },
];

function Contact() {
  const [ref] = useReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <SectionHeader num="06." title="Contact" />
      <div className="contact-wrap reveal" ref={ref}>
        <p className="contact-intro">
          Open to new opportunities — full-time roles, interesting conversations, or collaborating on something cool.
          Send a message and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea placeholder="What's on your mind?" rows={5} value={message} onChange={e => setMessage(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">→ Send Message</button>
        </form>

        <div className="social-links">
          {socials.map(s => (
            <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
              ⌥ {s.label}
            </a>
          ))}
        </div>
        <p className="empowerment-note">💜 Proud woman in tech — building the future, one commit at a time.</p>
      </div>
    </section>
  );
}

export default Contact;
