import * as Yup from "yup";

import errors from "utils/data/errors";

export const chooseShowValidation = Yup.object({
  show: Yup.string().required(errors.REQUIRED),
  qty: Yup.number().required(errors.REQUIRED)
});
