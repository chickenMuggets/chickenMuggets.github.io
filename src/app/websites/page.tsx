"use client";
import React from 'react';
import '../styles.css';

const Websites = () => {
  return (
    <div>
      <header className="header">
        <h1>Websites</h1>
      </header>
      <main>
        <p>This is the websites page.</p>
        <button onClick={() => window.location.href = '/'}>Go to Main Page</button>
      </main>
    </div>
  );
};

export default Websites;