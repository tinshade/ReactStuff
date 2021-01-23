import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <br/>
      <h2>You have reached the Custom Snippets HOME PAGE</h2>
      <div>
        <h3>Here are the links to all of the custom snippets!</h3>
        <div>
          <ul type="disc">
            <li>
              <a href="/modernav" title="Check out the modern navbar!">Modern NavBar</a>
            </li>
            <li>
              <a href="/typeanim" title="Check out the typing indicator!">Typing Indicator</a>
            </li>
            <li>
              <a href="/takinginput" title="Check out the dynamic-input color block!">Taking Input</a>
            </li>
            <li>
              <a href="/Basics" title="Check out the basics">Basics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
