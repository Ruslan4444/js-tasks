import Joi from "joi";

const passwordSchema = Joi.string().min(3).max(10);
export default function validate(password) {
  return passwordSchema.validate(password);
}
