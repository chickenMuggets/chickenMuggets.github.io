import Image from "next/image";
import "./styles.css"

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="header">Welcome to my website</h1>
      </header>
      <div className="buttons">
        <a href="" className="button-1 pageon">Projects</a>
        <a href="" className="button-1">Websites</a>
      </div>

    </div>
  );
}
