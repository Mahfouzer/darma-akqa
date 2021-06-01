import videoImg from "../../assets/images/videoImage.png";

export default function MedicationMainVideo() {
  return (
    <section className="medication-main-video-container">
      <div className="main-video-about-container">
        <header>
          <h3 className="main-video-about">
            Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
            and symptoms.
          </h3>
        </header>
        <p>
          By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
          interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2). Adtralza® selectively
          modulates the dysregulated immune system by(1):
          <br /> — Reducing markers of skin inflammation <br /> — Improving
          markers of skin barrier integrity <br /> — Reducing epidermal
          thickness
          <a className="watch-the-video-button" href="/">
            Watch the video
          </a>
          Duration: 2:43
        </p>
      </div>
      <img
        className="video-representitive-img"
        src={videoImg}
        alt="a video representaion by an img"
      />
    </section>
  );
}
