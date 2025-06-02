import "./Footer.css";
import { FaDiscord, FaTwitter, FaReddit, FaYoutube } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const { user, signInWithGoogle, logout, error } = useAuth();

  const handleAuth = async () => {
    if (user) {
      await logout();
    } else {
      await signInWithGoogle();
    }
  };

  return (
    <footer id="contact" className="footer">
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
          <p>Email: samyak.official.in@gmail.com</p>
          <p>Phone: +91 8764710030</p>
        </div>

        {/* Right Section - Social Links & Auth */}
        <div className="footer-links">
          <div><h3>Follow Us</h3></div>
          
          <div className="social-icons">
            <a href="#" className="social-link"><FaDiscord /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaReddit /></a>
            <a href="#" className="social-link"><FaYoutube /></a>
          </div>

          <div className="auth-buttons">
            {error && <div className="auth-error">{error}</div>}
            <button className="signup-btn" onClick={handleAuth}>
              {user ? 'Sign Out' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
