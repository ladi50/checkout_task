import * as Yup from "yup";

import errors from "utils/data/errors";

export const checkoutValidation = Yup.object({
  cvv: Yup.string().required(errors.REQUIRED),
  agreeTerms: Yup.boolean()
    .test("check if true", errors.REQUIRED, (value) => value)
    .required(errors.REQUIRED)
});
