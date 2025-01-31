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
        </div>
      </main>
    </div>
  );
}
