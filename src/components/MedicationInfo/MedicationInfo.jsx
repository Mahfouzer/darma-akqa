import medicationLogo from "../../assets/images/AdtralzaGlobal.svg";
import medicationPackShot from "../../assets/images/adtralza-packshot.png";

export default function MedicationInfo() {
  return (
    <section className="medication-info">
      <header className="medication-header">
        <img
          src={medicationLogo}
          alt="Adtralza Global logo"
          className="medication-logo"
        ></img>
        <h2 className="medication-about">
          Adtralza® is a new treatment for adult patients with severe atopic
          dermatitis (eczema) who are candidates for systemic therapy.
        </h2>
        <picture>
          <source></source>
        </picture>
      </header>
      <section className="medication-package-information">
        <img
          src={medicationPackShot}
          alt="medication pack shot"
          width="445px"
          height="350"
        />
        <div className="medication-description">
          <p>
            It is the first and only biologic developed to specifically
            neutralize IL-13, a key driver of atopic dermatitis signs and
            symptoms(1,2)
          </p>
          <a href="/">
            Learn more about how Adtralza® works and how to use it in treatment.
          </a>
        </div>
      </section>
    </section>
  );
}
