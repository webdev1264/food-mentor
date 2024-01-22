import visa from "../assets/logos/visa-svgrepo-com 1.svg";
import mc from "../assets/logos/Mastercard-logo 1.svg";
import paypal from "../assets/logos/paypal-svgrepo-com 1.svg";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-description">
        <p>Netpeak eood, 47 cherni vruh Blvd, fl. 5 Lozenets, Sofia, Bulgaria</p>
        <div className="contacts-wrapper">
          <div>
            <a href="mailto:support@food-mentor.com">support@food-mentor.com</a>
          </div>
          <div className="logos-wrapper">
            <div>
              <img className="payment-icon" src={visa} alt="Visa" />
            </div>
            <div>
              <img className="payment-icon" src={mc} alt="Mastercard" />
            </div>
            <div>
              <img className="payment-icon" src={paypal} alt="PayPal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
