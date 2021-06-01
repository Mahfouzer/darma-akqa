import nineOutOftenImage from "../../assets/images/nineOutOften.svg";
import handShiledImage from "../../assets/images/handShiled.svg";
import handHeartImage from "../../assets/images/handHeart.svg";

export default function MedicationBenifits() {
  return (
    <section className="medication-benifits">
      <dl>
        <dt className="benifit-short-description">
          Long term sustained improvement
        </dt>
        <dd className="benifit-img">
          <img src={nineOutOftenImage} alt="nine out of ten" />
        </dd>
        <dd className="benifit-long-description">
          9 out of 10 respondents experienced sustained disease control in
          clinical trials 10, providing sustained improvements in the burden of
          disease(1,2, 1, 8*†‡).
        </dd>
        <dd>
          <a href="/">See efficacy and trial data </a>
        </dd>
      </dl>

      <dl>
        <dt className="benifit-short-description">
          Improvements in the burden of disease
        </dt>
        <dd className="benifit-img">
          <img src={handHeartImage} alt="nine out of ten" />
        </dd>
        <dd className="benifit-long-description">
          Patients in clinical trials saw an improvement in Quality of Life with
          early symptom relief and sustained improvements in burden of disease
          from week 16 to 32(12,13).
        </dd>
        <dd>
          <a href="/">Learn more about quality of life improvements</a>
        </dd>
      </dl>

      <dl>
        <dt className="benifit-short-description">Good safety profile </dt>
        <dd className="benifit-img">
          <img src={handShiledImage} alt="nine out of ten" />
        </dd>
        <dd className="benifit-long-description">
          The overall frequency and severity of adverse events with Adtralza®
          were comparable to placebo at 16 weeks* and 52 weeks(19).
        </dd>
        <dd>
          <a href="/">See safety profile </a>
        </dd>
      </dl>
    </section>
  );
}
