import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useSelector } from "react-redux";

import { useCheckout } from "./hooks/useCheckout";

import Accordion from "components/Accordion/Accordion";
import CardText from "components/Card/CardText";
import Checkbox from "components/Checkbox/Checkbox";
import Card from "components/Card/Card";
import CardTitle from "components/Card/CardTitle";
import Cardsubtitle from "components/Card/CardSubtitle";
import Button from "components/Button/Button";
import CheckoutCC from "./CheckoutCC";

import "./Checkout.scss";

const Checkout = () => {
  const show = useSelector((store) => store.shows.show);
  const { handleAgreementChange, placeOrder } = useCheckout();

  const calculateTotalPrice = () =>
    show.price * show.qty + show.serviceFee * show.qty + show.orderFee;

  const renderAccordionTitle = () => {
    return (
      <div className="checkout__accordion-title">
        <div>Total</div>
        <div>${calculateTotalPrice()}</div>
      </div>
    );
  };

  const renderAccordionDetails = () => {
    return (
      <div>
        <Cardsubtitle subtitle={"Tickets"} style={{ marginBottom: "10px" }} />

        <CardText
          left={`Resale Tickets: $${show.price} x ${show.qty}`}
          right={`$${show.price * show.qty}`}
          style={{ marginBottom: "10px" }}
        />

        <Cardsubtitle
          subtitle={"Notes From Seller"}
          style={{ marginBottom: "10px" }}
        />

        <CardText
          left={`Stuff about COVID-19`}
          style={{ marginBottom: "10px" }}
        />

        <Cardsubtitle subtitle={"Fees"} style={{ marginBottom: "10px" }} />

        <CardText
          left={`Service Fee: $${show.serviceFee} x ${show.qty}`}
          right={`$${show.serviceFee * show.qty}`}
        />

        <CardText
          left={`Order Processing Fee $${show.orderFee}`}
          right={`$${show.orderFee}`}
          style={{ marginBottom: "10px" }}
        />

        <Cardsubtitle subtitle={"Delivery"} style={{ marginBottom: "10px" }} />

        <CardText
          left={`Mobile Entry`}
          right={"Free"}
          style={{ marginBottom: "10px" }}
        />

        <a className="checkout__cancelOrder" href="#">
          Cancel Order
        </a>

        <div className="checkout__noRefunds">*All Sales Final - No Refunds</div>

        <Checkbox
          label={
            <div>
              I have read and agree to the current <a href="#">Terms of Use</a>.
            </div>
          }
          onChange={handleAgreementChange}
        />

        <Button
          className="checkout__placeOrder"
          type="submit"
          title="Place Order"
          onClick={placeOrder}
        />
      </div>
    );
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <Card>
          <CardTitle
            title={"Delivery"}
            icon={<CheckCircleOutlineIcon color="success" />}
            style={{ marginBottom: "20px" }}
          />

          <Cardsubtitle
            subtitle={"Mobile Entry - Free"}
            style={{ marginBottom: "10px" }}
          />

          <div className="checkout__availability">
            {`Tickets Available by ${
              show?.availability ?? ""
            } \nThese mobile tickets will be transferred directly to you from a trusted seller. We'll email you instructions on how to accept them on the original ticket provider's mobile app.`}
          </div>
        </Card>

        <Card>
          <CardTitle
            title={"Payment"}
            icon={<CheckCircleOutlineIcon color="success" />}
            style={{ marginBottom: "20px" }}
          />

          <Cardsubtitle subtitle={"Use Credit / Debit Card"} />

          <CheckoutCC />

          <Cardsubtitle
            subtitle={"Or Pay With"}
            style={{
              marginBottom: "10px",
              paddingTop: "8px",
              borderTop: "1px solid lightgray"
            }}
          />

          <div>
            By using a digital wallet and continuing past this page, you have
            read and are accepting the <a href="#">Terms of Use</a>.
          </div>
        </Card>
      </div>

      <div className="checkout__right">
        <Accordion
          defaultExpanded={true}
          title={renderAccordionTitle()}
          details={renderAccordionDetails()}
        />
      </div>
    </div>
  );
};

export default Checkout;
