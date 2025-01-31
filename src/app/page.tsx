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
          </div>
        </div>
      </main>
    </div>
  );
}
