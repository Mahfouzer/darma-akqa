import AppLogo from "./assets/images/DermaWorld.svg";
import medicationLogo from "./assets/images/AdtralzaGlobal.svg";
import NavigationList from "./components/NavigationList/NavigationList";

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <div className="logo-search-container">
          <h1>
            <a href="/" className="logo-container">
              Derma world
              <img className="App-logo" src={AppLogo} alt="Derma world" />
            </a>
          </h1>
          <form className="search-form" aria-label="search the website">
            <label>
              <span>search the website</span>
              <input id="search" className="search-bar" name="search" />
            </label>
            <button
              type="submit"
              className="submit-search"
              name="submit search"
              aria-label="submit search"
            ></button>
          </form>
        </div>
        <NavigationList />
      </header>
      <main>
        <section className="medication-info">
          <header className="medication-header">
            <img
              src={medicationLogo}
              alt="Adtralza Global logo"
              className="medication-logo"
            ></img>
            <h2 className="medication-about">
              Adtralza® is a new treatment for adult patients with
              moderate-to-severe atopic dermatitis (eczema) who are candidates
              for systemic therapy.
            </h2>
            <picture>
              <source></source>
            </picture>
          </header>
          <section className="medication-about"></section>
        </section>
      </main>
    </div>
  );
}

export default App;
