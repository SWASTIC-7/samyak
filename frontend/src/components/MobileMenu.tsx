import { useAuth } from '../context/AuthContext';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const { user, signInWithGoogle, logout } = useAuth();

  const handleAuth = async () => {
    if (user) {
      await logout();
    } else {
      await signInWithGoogle();
    }
    onClose();
  };

  const handleNavigation = (section: string) => {
    onNavigate(section);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="mobile-menu-items">
          <div className="mobile-menu-item" onClick={() => handleNavigation('home')}>Home</div>
          <div className="mobile-menu-item" onClick={() => handleNavigation('mentors')}>Team</div>
          <div className="mobile-menu-item" onClick={() => handleNavigation('courses')}>Pricing</div>
          <div className="mobile-menu-item" onClick={() => handleNavigation('mentors')}>Mentors</div>
          <div className="mobile-menu-item" onClick={() => handleNavigation('contact')}>About Us</div>
          <button className="mobile-signin-button" onClick={handleAuth}>
            {user ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 