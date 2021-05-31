import AppLogo from "./assets/images/DermaWorld.svg";
import NavigationList from "./components/NavigationList/NavigationList";

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <div className="logo-search-container">
          <img className="App-logo" src={AppLogo} alt="Derma world" />
          <form className="search-form">
            <input id="search" className="search-bar" />
            <button type="submit" className="submit-search"></button>
          </form>
        </div>
        <NavigationList />
      </header>
    </div>
  );
}

export default App;
