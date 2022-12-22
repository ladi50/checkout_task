import React from "react";
import { RadioGroup } from "@mui/material";

import { useCheckoutCC } from "./hooks/useCheckoutCC";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Radio from "components/Radio/Radio";

import "./Checkout.scss";

const CheckoutCC = () => {
  const {
    formik,
    handleFieldChange,
    getError,
    changeCCFormState,
    showCCForm,
    handleSubmit,
    creditCards,
    selectedCard,
    handleSelectCard,
    handleCVVChange,
    shouldClearCVV
  } = useCheckoutCC();

  return (
    <div className="checkoutCC">
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedCard}
        onChange={handleSelectCard}
      >
        {creditCards.map((card, index) => (
          <div className="checkoutCC__radio-wrapper" key={index}>
            <Radio
              item={{
                value: card.cardNumber,
                label: card.cardNumber.slice(-4)
              }}
            />

            <div className="checkoutCC__radio-exp">exp. {card.exp}</div>

            {card.cardNumber === selectedCard && (
              <Input
                id="cvv"
                label="CVV"
                type="password"
                onChange={handleCVVChange}
                error={getError("cvv")}
                inputValidation="digits"
                maxLength={4}
                clearInput={shouldClearCVV}
              />
            )}
          </div>
        ))}
      </RadioGroup>

      {showCCForm && (
        <form className="checkoutCC_form" onSubmit={handleSubmit}>
          <Input
            id="cardNumber"
            label="Card Number"
            onChange={(value) => handleFieldChange("cardNumber", value)}
            error={getError("cardNumber")}
            inputValidation="digits"
          />

          <Input
            id="exp"
            label="Exp"
            onChange={(value) => handleFieldChange("exp", value)}
            error={getError("exp")}
            inputValidation="exp"
            maxLength={5}
          />

          <Button
            type="submit"
            title="Save Card"
            disabled={formik.isSubmitting}
          />
        </form>
      )}

      <Button
        className="checkoutCC__addCard"
        type="button"
        title="+ Add New Card"
        onClick={changeCCFormState}
        disabled={showCCForm}
      />
    </div>
  );
};

export default CheckoutCC;
