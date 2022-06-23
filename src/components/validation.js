import { ref } from "yup";
import { object, string, number, date, InferType } from "yup";

const validations = object({
  email: string().email().required(),
  password: string().min(6).required(),
  passwordConfirm: string().oneOf([ref('password')]).required(),
});

export default validations;
