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
            <label>Install the default react library to create website & it's prerequisites</label>
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
            <label>After successfull compilation we ran npm start to check if the site is good to go!</label>
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
