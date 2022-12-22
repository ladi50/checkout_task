import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setAgreeTerms } from "store/entities/payment/actions/actions";

export const useCheckout = () => {
  const dispatch = useDispatch();

  const handleAgreementChange = (e) => {
    dispatch(setAgreeTerms(e.target.check));
  };

  const placeOrder = async () => {
    try {
      // Process payment logic
    } catch (err) {
      console.log(err);
    }
  };

  return { placeOrder, handleAgreementChange };
};
