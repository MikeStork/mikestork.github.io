import React, { useState } from "react";
import "./Window.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
  FaFacebookMessenger,
} from "react-icons/fa";

const Window = () => {
  const email = "programmer@mikestork.pl";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <main className="hero-shell">
      <section className="windowoutline hero-card">
        <div className="window hero">

          <div className="hero-top">
            <img
              src="/avatar.png"
              alt="avatar"
              className="avatar"
            />

            <div className="hero-text">
              <h1 className="hero-title">Michał Bocian</h1>

              <p className="hero-subtitle">
                Fullstack - ML - Embedded
              </p>
            </div>
          </div>

          <p className="hero-description">
            Tworzę projekty łączące software, hardware i ML.
            Interesuję się systemami embedded, aplikacjami webowymi oraz rozwiązaniami,
            które mają realne zastosowanie.
          </p>

          <div className="hero-links">

            <a
              href="https://github.com/MikeStork/Welcome"
              target="_blank"
              rel="noreferrer"
              className="hero-link hero-link-wide primary"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/mikhaelstork"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <button onClick={handleCopy} className="hero-link">
              <FaEnvelope />
              {copied ? "Copied!" : "Email"}
            </button>

            <a
              href="https://discord.com/users/255758779608465412"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <FaDiscord /> Discord
            </a>

            <a
              href="https://m.me/MikhaelStork"
              target="_blank"
              rel="noreferrer"
              className="hero-link"
            >
              <FaFacebookMessenger /> Messenger
            </a>

          </div>

        </div>
      </section>
    </main>
  );
};

export default Window;