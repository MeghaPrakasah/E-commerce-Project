// PaymentForm.js
import './Payment.css'

import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make an API request to your payment gateway
      // Example: Stripe API request
      const response = await axios.post('/api/payment', {
        cardNumber,
        expiryDate,
        cvv,
      });

      // Handle success response
      setPaymentSuccess(true);
    } catch (error) {
      // Handle error response
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {paymentSuccess ? (
        <p>Thank you for your order!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {/* Other input fields (expiry date, CVV, etc.) */}
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
