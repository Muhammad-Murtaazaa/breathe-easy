import React from "react";
export default function About() {
  return (
    <section className="info-page glass info-glass-bright">
      <h2 style={{marginTop:0, marginBottom:"1rem"}}>About BreatheEasy</h2>
      <p>
        <strong>BreatheEasy</strong> is an <span style={{color:"#7ecafc",fontWeight:700}}>open-source</span> web app for calm, guided mindful breathing.<br /><br />
        Source code:{" "}
        <a href="https://github.com/muhammadmurtaza/breathe-easy" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
        <br /><br />
        Made by{" "}
        <a href="https://muhammadmurtaza.netlify.app/#home" target="_blank" rel="noopener noreferrer">
          Muhammad Murtaza
        </a>
        <br /><br />
        Choose a pattern, set your time, and let the relaxing animation guide your breath.
      </p>
    </section>
  );
}
