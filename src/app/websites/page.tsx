"use client";
import React from 'react';
import '../styles.css';
import Link from 'next/link';

const Websites = () => {
  return (
    <div>
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

      </main>

      <div className="footercontainer">
          <footer className="footer">
              <h3 className="footerhead">Additinal info</h3>
              <p className="updatelink">this page is licenced under the CC0-1.0 license for more info click <a href="https://github.com/chickenmuggets/projects/blob/main/LICENSE" target="blank" className="updatelinklink">here</a></p>
              <a href="updatelog.md" target="_blank" className="viewupdate">view updatelog</a>
          </footer>
        </div>
    </div>
  );
};

export default Websites;