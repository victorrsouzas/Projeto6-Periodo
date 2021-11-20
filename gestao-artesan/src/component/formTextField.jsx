import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";
import InputMask from "react-input-mask";

function FormTextField({ name, mask, ...props }) {
  const [field, meta] = useField(name);
  const settings = {
    ...field,
    mask,
    ...props,
    size: "small",
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: { shrink: true },
  };
  if (meta && meta.touched && meta.error) {
    settings.error = true;
    settings.helperText = meta.error;
  }
  return (
    <>
      {mask ? (
        <InputMask {...settings}>{() => <TextField {...settings} />}</InputMask>
      ) : (
        <TextField
          {...settings}
        />
      )}
    </>
  );
}

export default FormTextField;