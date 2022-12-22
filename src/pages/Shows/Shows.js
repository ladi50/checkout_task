import React from "react";

import Button from "components/Button/Button";
import Select from "components/Select/Select";

import { useShows } from "./hooks/useShows";

import "./Shows.scss";

const Shows = () => {
  const { formik, handleFieldChange, getError, fields } = useShows();

  return (
    <form className="shows__form" onSubmit={formik.handleSubmit}>
      {fields.map(({ id, label, data }, index) => (
        <Select
          key={index}
          id={id}
          label={label}
          data={data}
          onChange={(value) => handleFieldChange(id, value)}
          error={getError(id)}
        />
      ))}

      <Button type="submit" title="Continue" disabled={formik.isSubmitting} />
    </form>
  );
};

export default Shows;
