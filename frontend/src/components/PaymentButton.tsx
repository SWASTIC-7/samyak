import React from 'react';
import { useAuth } from '../context/AuthContext';

interface PaymentButtonProps {
  courseId: string;
  courseName: string;
  amount: number;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ courseId, courseName, amount }) => {
  const { user } = useAuth();

  const initializePayment = async () => {
    if (!user) {
      alert('Please sign in to purchase the course');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
      amount: amount * 100, // Amount in smallest currency unit
      currency: 'INR',
      name: 'Your Company Name',
      description: `Purchase ${courseName}`,
      order_id: '', // You'll need to generate this from your backend
      handler: function (response: any) {
        // Handle successful payment
        console.log('Payment successful:', response);
        // Store the purchase in Firebase
        // You can add the purchase record to Firestore here
      },
      prefill: {
        name: user.displayName,
        email: user.email,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <button
      onClick={initializePayment}
      className="payment-button"
      disabled={!user}
    >
      Buy Now - ₹{amount}
    </button>
  );
};

export default PaymentButton; 