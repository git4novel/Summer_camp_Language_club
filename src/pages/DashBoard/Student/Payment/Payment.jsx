import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  const location = useLocation();
  const paymentValue = location.state?.amount || 0;

  const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
  return (
    <div className="m-4">
      <h3>Payment here: ${paymentValue}</h3>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={paymentValue}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
