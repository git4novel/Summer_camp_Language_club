import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = ({price}) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
          return;
        }
        console.log(card);

        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setCardError(error.message)
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          setCardError('')
        }
      };
    return (
       <>
        <form className="w-2/3 m-8 mb-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-600 ml-8">{cardError}</p>
      }
       </>
    );
};

export default CheckOutForm;