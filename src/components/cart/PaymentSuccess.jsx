import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirm</h1>
        <p>Order Placed Successfully!! Check out the order status.</p>
        <Link to="/myorders">Check States </Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
