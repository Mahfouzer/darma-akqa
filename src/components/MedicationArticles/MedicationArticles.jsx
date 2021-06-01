import nurse from "../../assets/images/nurse.png";

export default function MedicationArticles() {
  return (
    <section className="articles-section">
      <header>
        <h3>Clinical tools - at a glance</h3>
      </header>
      <ol>
        <li className="article">
          <div>
            <img src={nurse} alt="nurse of the article" />
            <div>
              <h4>Dosign Guide</h4>
              <p>
                Adtralza® has a straightforward dosing regimen, with 150 mg
                prefilled syringes(1).
              </p>
              <a href="/">Learn more about application and dosing</a>
            </div>
          </div>
        </li>

        <li className="article">
          <div>
            <img src={nurse} alt="nurse of the article" />
            <div>
              <h4>Dosign Guide</h4>
              <p>
                Adtralza® has a straightforward dosing regimen, with 150 mg
                prefilled syringes(1).
              </p>
              <a href="/">Learn more about application and dosing</a>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
