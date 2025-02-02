"use client";
import React from 'react';
import '../styles.css';
import Link from 'next/link';

const Websites = () => {
  return (
    <div style={{backgroundColor: "#333333"}}>
      <header className="header">
        <h1 className="header"><strong>Welcome to my website</strong></h1>
      </header>
      <div className="buttons">
        <Link href="/">
        <p className="button-1 inline">Projects</p>
        </Link>
        <a className="button-1 inline pageon" href="">Websites</a>
        </div>
      <main>
        <br />
        <br />
        <div className='project-div'>
        <div className="projectthing">
            <a href="https://github.com/chickenmuggets?tab=repositories" className="projectthing" target="blank" style={{textDecoration: "solid", fontSize: "30px"}}><strong>Websites</strong></a>
            <br />
            <input type="search" className="searchbox" id="searchbox" placeholder="search..." autoComplete="off"></input>
          </div>
          <section>
          <br />
          <br />
              <div className="project-box" id="project-box">
                <a href="https://github.com/chickenmuggets/auto-typer" className="project-title">Talk to yourself</a>
                <br />
                <br />
                <p className="project-description">Press the button to begin to talk to yourself</p>
                <a className="project-link" href="https://chickenmuggets.github.io/talk-to-yourself/" target='blank'>Talk to yourself</a>
              </div>
            </section>
        </div>
        <div/>
      </main>

      <div className="footercontainer">
          <footer className="footer">
              <h3 className="footerhead">Additinal info</h3>;[0-l
              ]
              <p className="updatelink">this page is licenced under the CC0-1.0 license for more info click <a href="https://github.com/chickenMuggets/chickenMuggets.github.io/blob/main/LICENSE" target="blank" className="updatelinklink">here</a></p>
          </footer>
        </div>
    </div>
  );
};

export default Websites;