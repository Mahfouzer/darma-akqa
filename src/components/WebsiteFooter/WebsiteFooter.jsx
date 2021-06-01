import logo from "../../assets/images/LEO logo.svg";

export default function WebsiteFooter() {
  return (
    <footer>
      <img src={logo} alt="leo logo"></img>
      <p className="company-copyrights">
        © Copyright LEO Pharma 2020
        <br />
        LEO and the LEO Lion Design
        <br />
        are registered trademarks
        <br />
        of LEO Pharma
        <br />
        All rights reserved
        <br />
        <a href="/">LEO Pharma corporate website</a>
      </p>

      <nav>
        <a className="footer-link" href="/">
          Contacts
        </a>
        <a className="footer-link" href="/">
          Imprint
        </a>
        <a className="footer-link" href="/">
          Conditions
        </a>
        <a className="footer-link" href="/">
          Terms of use
        </a>
        <a className="footer-link" href="/">
          Privacy
        </a>
        <a className="footer-link" href="/">
          Cookie content
        </a>
      </nav>
    </footer>
  );
}
