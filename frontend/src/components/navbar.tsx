import './navbar.css'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { scrollToSection } from '../utils/scroll';

function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuth = async () => {
    if (user) {
      await logout();
    } else {
      await signInWithGoogle();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (section: string) => {
    switch(section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'mentors':
        scrollToSection('mentors');
        break;
      case 'courses':
        scrollToSection('courses');
        break;
      case 'contact':
        scrollToSection('contact');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='Navbar'>
        <img className='logo' width={10} height={30} src="/logo.svg" alt="logo" />

        <div className='opts'>
          <div className='opt' onClick={() => handleNavigation('home')}>Home</div>
          <div className='opt' onClick={() => handleNavigation('mentors')}>Team</div>
          <div className='opt' onClick={() => handleNavigation('courses')}>Pricing</div>
          <div className='opt' onClick={() => handleNavigation('mentors')}>Mentors</div>
          <div className='opt' onClick={() => handleNavigation('contact')}>About Us</div>
        </div>

        <div className='auth-section'>
          <div className='signin' onClick={handleAuth}>
            <button>{user ? 'Sign Out' : 'Sign In'}</button>
          </div>
        </div>
        <div className='hamburger' onClick={toggleMobileMenu}>
          <img width={40} height={40} src="hamburger3.svg" alt="menu" />
        </div>
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigation}
      />
    </>
  )
}

export default Navbar