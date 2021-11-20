import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const SubmitButton = ({ children, loading, ...props }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
    //window.location.reload(false);
  };

  const settings = {
    variant: "contained",
    color: "secondary",
    onClick: handleSubmit,
  };

  return <Button {...settings}>{children}</Button>;
};

export default SubmitButton;
