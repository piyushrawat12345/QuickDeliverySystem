import validator from "validator";

const validate = (fullname, email, password) => {
  const errors = [];
  let isError = false;

  if (!fullname.trim() || fullname.trim().length < 3) {
    isError = true;
    errors.push({ field: "fullname", message: "Fullname is required" });
  }

  if (!email || !validator.isEmail(email)) {
    isError = true;
    errors.push({ field: "email", message: "Please provide a valid email" });
  }

  if (
    !password ||
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    })
  ) {
    isError = true;
    errors.push({
      field: "password",
      message: "Password must be at least 8 characters",
    });
  }

  return { isError, errors };
};

export default validate;
