import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hello world!
        </h2>
        <p>Welcome to your first React JS Website</p>
        
        <ol>
          <li>
            <label>Install the default react library & it's prerequisites to create a website</label>
            <code>
            npm i -g create-react-app
            </code>
          </li>
          <li>
            <label>Create a simple hello world website</label>
            <code>
            create-react-app website_hello
            </code>
          </li>
          <li>
            <label>After a successful compilation we run npm start to check if the site is good to go!</label>
            <code>
            cd website_hello<br />
            npm start
            </code>
          </li>
        </ol>
      </header>
    </div>
  );
}

export default App;
