"use client";
import React from 'react';
import '../styles.css';
import Link from 'next/link';

const Websites = () => {
  return (
    <div>
      <header className="header">
        <h1>Websites</h1>
      </header>
      <div className="buttons">
        <Link href="/">
        <p className="button-1 inline">Projects</p>
        </Link>
        <a className="button-1 inline pageon" href="">Websites</a>
      </div>
      <main>

        <p>This is the websites page.</p>
      </main>
    </div>
  );
};

export default Websites;