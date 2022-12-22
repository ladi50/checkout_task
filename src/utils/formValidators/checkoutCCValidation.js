import * as Yup from "yup";

import errors from "utils/data/errors";

export const checkoutCCValidation = Yup.object({
  cardNumber: Yup.string().required(errors.REQUIRED),
  exp: Yup.string().required(errors.REQUIRED)
});
