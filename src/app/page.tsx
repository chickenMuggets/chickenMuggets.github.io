import Image from "next/image";
import "./styles.css"

export default function Home() {
  return (
    <div style={{backgroundColor: "#333333"}}>
      <header>
        <h1 className="header">Welcome to my website</h1>
      </header>
      <div className="buttons">
        <a href="" className="button-1 pageon">Projects</a>
        <a href="" className="button-1">Websites</a>
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
              <a className="project-link" href="https://github.com/chicken-muggets/auto-typer/archive/refs/heads/main.zip" download>Download latest Auto Spammer</a>
            </div>
          </section>
          <section>
            <div className="project-box" id="project-box">
              <a href="https://github.com/chickenmuggets/keyboard-shortcuts" className="project-title">Keyboard Shortcuts</a>
              <br />
              <br />
              <p className="project-description">Adds more shortcuts to keyboard. read the README.MD file for a list of them</p>
              <a className="project-link" href="https://github.com/chicken-muggets/keyboard-shortcuts/archive/refs/heads/main.zip" download>Download latest Keyboard Shortcuts</a>
            </div>
          </section>
          <section>
            <div className="project-box" id="project-box">
              <a href="https://github.com/chickenmuggets/auto-typer" className="project-title">Education perfect spammer</a>
              <br />
              <br />
              <p className="project-description">Uses color detection to see when you are on a information slide and automatically presses enter when required</p>
              <a className="project-link" href="https://github.com/chicken-muggets/auto-typer/archive/refs/heads/main.zip" download>Download latest Education Perfect Spammer</a>
              <a className="inline" style={{color: "lime"}}>Education perfect spammer will now get future versions</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
