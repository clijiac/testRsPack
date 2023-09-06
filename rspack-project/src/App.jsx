import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Rspack + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Rspack and React logos to learn more
            </p>
            <div style={{ borderWidth: "1px", borderColor: "#333" }}>
                <SignatureCanvas  canvasProps={{   }}   />;
                {/*<SignatureCanvas.default canvasProps={{}}/>;*/}
            </div>
        </div>
    );
}

export default App;
