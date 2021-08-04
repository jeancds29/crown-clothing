import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JKs87JIFx3aKCsqIICy4VfvPtqVPm0m1a6JHnwOFF0fpwRR8ugduR5H25FaQen6GIIlPC8aur0gsK6We0NGQSDR00Kto7uacp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltda"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
