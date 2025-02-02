"use client";
import Image from "next/image";
import "./styles.css";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Projects() {

  


  //display and hide versions
  function showversions(number: number) {
    let element = document.getElementById("versions" + number);
    let showbutton = document.getElementById("moreversions" + number);
    if (element && showbutton) {
      if (element.style.display == "none") {
        element.style.display = "block";
        showbutton.className = "versions goback";
        showbutton.style.display = "inline";
        showbutton.innerHTML = "go back";
      } else {
        element.style.display = "none";
        showbutton.className = "moreversions";
        showbutton.innerHTML = "view more versions";
      }
    }
  }

  //download files

  function downloadProject(project: string, version:number) {
    if (project == "autotyper") {
        window.location.href = 'https://github.com/chickenMuggets/auto-typer/releases/download/v' + version + '/Autotyper.v' + version + '.py';
    }
    else if (project == "keyboard-shortcuts") {
      if (version != 2) {
        window.location.href = 'https://github.com/chickenMuggets/keyboard-shortcuts/releases/download/v' + version + '/shortcuts.v' + version + '.py'
      }
      else {
          window.location.href = 'https://github.com/chickenMuggets/keyboard-shortcuts/releases/download/v2/crash.v2.py'
      }
    }
    else if (project == "education-perfect-spammer") {
    
    }
  }

  return (
    <div style={{backgroundColor: "#333333"}}>
      <header className="header">
        <h1 className="header"><strong>Welcome to my website</strong></h1>
      </header>
      <div className="buttons">
        <a href="" className="button-1 pageon">Projects</a>
        <Link href="/websites">
          <p className="button-1 inline">Websites</p>
        </Link>
      </div>
      <main>
        <br />
        <br />
        <div className="project-div">
          <div className="projectthing">
            <a href="https://github.com/chickenmuggets?tab=repositories" className="projectthing" target="blank" style={{textDecoration: "solid", fontSize: "30px"}}><strong>Projects</strong></a>
            <br />
            <input type="search" className="searchbox" id="searchbox" placeholder="search..." autoComplete="off"></input>
          </div>
          <section>
            <div className="project-box" id="project-box">
              <a href="https://github.com/chickenmuggets/auto-typer" className="project-title">Autotyper v5</a>
              <br />
              <br />
              <p className="project-description">Automatically types whatever placed into box</p>
              <a className="project-link" href="https://github.com/chicken-muggets/auto-typer/archive/refs/heads/main.zip" download>Download latest Autotyper</a>
              <div id="versions1" className="versionscontainer"><button className="versions" onClick={() => downloadProject("autotyper",4)}>Download Autotyper v4</button> <button className="versions" onClick={() => downloadProject("autotyper",3)}>Download Autotyper v3</button> <button className="versions" onClick={() => downloadProject("autotyper",2)}>Download Autotyper v2</button> <button className="versions" onClick={() => downloadProject("autotyper",1)}>Download Autotyper v1</button></div><button className="moreversions" id="moreversions1" onClick={() => showversions(1)}>view more versions</button>
            </div>
          </section>
          <section>
            <div className="project-box" id="project-box">
              <a href="https://github.com/chickenmuggets/keyboard-shortcuts" className="project-title">Keyboard Shortcuts</a>
              <br />
              <br />
              <p className="project-description">Adds more shortcuts to keyboard. read the README.MD file for a list of them</p>
              <a className="project-link" href="https://github.com/chicken-muggets/keyboard-shortcuts/archive/refs/heads/main.zip" download>Download latest Keyboard Shortcuts</a>
              <div id="versions2" className="versionscontainer"><button className="versions" onClick={() => downloadProject("keyboard-shortcuts",3.1)}>Download Keyboard Shortcuts v3.1</button> <button className="versions" onClick={() => downloadProject("keyboard-shortcuts",3)}>Download Keyboard Shortcuts v3</button> <button className="versions" onClick={() => downloadProject("keyboard-shortcuts",2)}>Download Keyboard Shortcuts v2</button></div><button className="moreversions" id="moreversions2" onClick={() => showversions(2)}>view more versions</button>
            </div>
          </section>
          <section>
            <div className="project-box" id="project-box">
              <a href="https://github.com/chickenmuggets/education-perfect-spammer" className="project-title">Education perfect spammer</a>
              <br />
              <br />
              <p className="project-description">Uses color detection to see when you are on a information slide and automatically presses enter when required</p>
              <a className="project-link" href="https://github.com/chicken-muggets/education-perfect-spammer/archive/refs/heads/main.zip" download>Download latest Education Perfect Spammer</a>
              <a className="inline" style={{color: "lime"}}>Education perfect spammer will now get future versions</a>
            </div>
          </section>
        </div>
        <div className="footercontainer">
          <footer className="footer">
              <h3 className="footerhead">Additinal info</h3>
              <p className="updatelink">this page is licenced under the CC0-1.0 license for more info click <a href="https://github.com/chickenMuggets/chickenMuggets.github.io/blob/main/LICENSE" target="blank" className="updatelinklink">here</a></p>
          </footer>
        </div>
      </main>
    </div>
  );
}