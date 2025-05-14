import "./Footer.css";
import { FaDiscord, FaTwitter, FaReddit, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-logo">
          <img src="/logo2.svg" alt="Company Logo" className="logo" />
          <p className="tagline">Made with ❤️ by IITians</p>
        </div>

        <div className="footer-contact">
          <h3>Stay Updated</h3>
          {/* <div className="email-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div> */}
          <p>Email: contact@company.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Right Section - Social Links & Auth */}
        <div className="footer-links">

         <div> <h3>Follow Us</h3></div>
         
          <div className="social-icons">
            <a href="#" className="social-link"><FaDiscord /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaReddit /></a>
            <a href="#" className="social-link"><FaYoutube /></a>
          </div>

          <div className="auth-buttons">
            <button className="signup-btn">SingIn</button>
            {/* <button className="login-btn">Login</button> */}
          </div>

        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
