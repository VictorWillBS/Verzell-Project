import joi from "joi";
const signUp = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
  confirmPassword: joi.string().min(6).max(30).required()  
})

export default signUp