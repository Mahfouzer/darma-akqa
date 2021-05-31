import AppLogo from "./assets/images/DermaWorld.svg";

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <img className="App-logo" src={AppLogo} alt="Derma world" />
        <form className="search-form">
          <input id="search" className="search-bar" />
          <button type="submit" className="submit-search"></button>
        </form>
      </header>
    </div>
  );
}

export default App;
