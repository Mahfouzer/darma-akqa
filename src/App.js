import AppLogo from "./assets/images/DermaWorld.svg";
import MedicationInfo from "./components/MedicationInfo/MedicationInfo";
import MedicationBenifits from "./components/MedicationBenifits/MedicationBenifits";
import NavigationList from "./components/NavigationList/NavigationList";
import MedicationMainVideo from "./components/MedicationMainVideo/MedicationMainVideo";
import MedicationArticles from "./components/MedicationArticles/MedicationArticles";
import MedicationVideos from "./components/MedicationVideos/MedicationVideos";
import WebsiteFooter from "./components/WebsiteFooter/WebsiteFooter";

function App() {
  document.title = "Derma world";

  return (
    <div className="App-container">
      <header className="App-header">
        <div className="logo-search-container">
          <h1 className="logo-container">
            <a href="/">
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
        <MedicationInfo />
        <MedicationBenifits />
        <MedicationMainVideo />
        <MedicationArticles />
        <MedicationVideos />

        <WebsiteFooter />
      </main>
    </div>
  );
}

export default App;
