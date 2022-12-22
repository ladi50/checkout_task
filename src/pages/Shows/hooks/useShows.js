import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowData } from "store/entities/shows/actions/actions";

import { chooseShowValidation } from "utils/formValidators/chooseShowValidation";
import shows from "utils/data/shows";
import quantity from "utils/data/quantity";

export const useShows = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fields = [
    {
      id: "show",
      label: "Choose a show",
      data: shows
    },
    {
      id: "qty",
      label: "Choose quantity",
      data: quantity
    }
  ];

  const initialValues = {
    show: "",
    qty: ""
  };

  const formik = useFormik({
    initialValues,
    validationSchema: chooseShowValidation,
    onSubmit: (values, { setSubmitting }) =>
      moveToCheckout(values, setSubmitting)
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

  const moveToCheckout = async (values, setSubmitting) => {
    try {
      setSubmitting(true);

      const showData = shows.find((show) => show.name === values.show);

      await dispatch(setShowData({ ...showData, qty: values.qty }));

      navigate("/checkout");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return { moveToCheckout, formik, handleFieldChange, getError, fields };
};
