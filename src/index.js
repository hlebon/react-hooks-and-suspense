import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Counter from "./examples/01-use-basic-hook";

import "./styles.css";

function Index() {
  return <div>Home</div>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"use-react-hook"}>React Basic Hook</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Index} />
          <Route path="/use-react-hook" component={Counter} />
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
