import React from 'react';
import './SignInCheckModal.css';

interface SignInCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
}

const SignInCheckModal: React.FC<SignInCheckModalProps> = ({ isOpen, onClose}) => {
  if (!isOpen) return null;

  return (
    <div className="signin-check-overlay" onClick={onClose}>
      <div className="signin-check-modal" onClick={e => e.stopPropagation()}>
        <button className="signin-check-close" onClick={onClose}>×</button>
        <div className="signin-check-content">
          <h2>Sign In Required</h2>
          <p>Please sign in to join the WhatsApp group and access course materials.</p>
          {/* <button className="signin-check-button" onClick={onSignIn}>
            Sign In with Google
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SignInCheckModal; 