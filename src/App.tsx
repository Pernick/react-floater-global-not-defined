import React, { useState } from "react";
import Joyride, { Step } from "react-joyride";
import Floater from "react-floater";
import "./App.css";

const steps: Step[] = [
  {
    target: ".first-step",
    content: <div>First Step</div>,
  },
  {
    target: ".second-step",
    content: <div>Second Step</div>,
  },
  {
    target: ".third-step",
    content: <div>Third Step</div>,
  },
  {
    target: ".fourth-step",
    content: <div>Fourth Step</div>,
  },
];

export function App() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      {tourOpen && <Joyride steps={steps} />}
      <header>
        <h2 className="first-step">Cities</h2>
        <button onClick={() => setTourOpen((s) => !s)}>Take Tour</button>
        <Floater content="This is the Floater content">
          <span>click me</span>
        </Floater>
      </header>

      <section>
        <nav className="second-step">
          <ul>
            <li>
              <a href="#">London</a>
            </li>
            <li>
              <a href="#">Paris</a>
            </li>
            <li>
              <a href="#">Tokyo</a>
            </li>
          </ul>
        </nav>

        <article>
          <h1>London</h1>
          <p className="third-step">
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </p>
          <p className="fourth-step">
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
          </p>
        </article>
      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
