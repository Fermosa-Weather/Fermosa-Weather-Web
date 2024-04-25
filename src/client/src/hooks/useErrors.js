
import { useState } from "react";

export const useErrors = () => {
  const [errors, setErrors] = useState({});

  const setFieldError = (fieldName, errorMessage) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  return { errors, setFieldError, clearErrors };
};

