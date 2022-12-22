export const onlyDigits = (value) => !/[^0-9]+/g.test(value);

export const keepOnlyDigits = (value) => value.replace(/[^0-9]+/g, "");

export const keepOnlyDigitsAndSlash = (value) => value.replace(/[^0-9/]+/g, "");

