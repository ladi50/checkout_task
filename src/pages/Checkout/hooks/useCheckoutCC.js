import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  saveCreditCard,
  saveCVV,
  setSelectedCard
} from "store/entities/payment/actions/actions";
import { checkoutCCValidation } from "utils/formValidators/checkoutCCValidation";

export const useCheckoutCC = () => {
  const [showCCForm, setShowCCForm] = useState(false);
  const [shouldClearCVV, setShouldClearCVV] = useState(false);

  const { creditCards, selectedCard } = useSelector((store) => store.payment);

  const dispatch = useDispatch();

  let clearCVVTimeout;

  useEffect(() => {
    return () => {
      clearTimeout(clearCVVTimeout);
    };
  }, []);

  const changeCCFormState = () => {
    setShowCCForm(true);
  };

  const initialValues = {
    cardNumber: "",
    exp: ""
  };

  const formik = useFormik({
    initialValues,
    validationSchema: checkoutCCValidation,
    onSubmit: (values, { setSubmitting }) => saveCard(values, setSubmitting)
  });

  const handleFieldChange = (id, value) => {
    const { touched, setTouched, setFieldValue } = formik;

    if (!touched[id]) {
      setTouched(id, true);
    }
    setFieldValue(id, value);
  };

  const getError = (id) =>
    formik.touched[id] && formik.errors[id] && formik.errors[id];

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  const saveCard = async (values, setSubmitting) => {
    try {
      setSubmitting(true);

      await dispatch(saveCreditCard(values));

      setShowCCForm(false);
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSelectCard = (event) => {
    const { value } = event.target;

    dispatch(setSelectedCard(value));

    setShouldClearCVV(true);
    dispatch(saveCVV(null));

    clearCVVTimeout = setTimeout(() => {
      setShouldClearCVV(false);
    }, 10);
  };

  const handleCVVChange = (value) => {
    dispatch(saveCVV(value));
  };

  return {
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
  };
};
