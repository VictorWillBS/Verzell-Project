import joi from "joi";
const signIn = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
})

export default signIn