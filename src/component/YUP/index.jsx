const USER_SCHEMA = yup.object({
  login: yup.string().email().required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(64)
    .matches(/(?=.*[A-Z].*)(?=.*[a-z].*).*/)
    .required()
})

const AUTO_SCHEMA = yup.object({
  model: yup.string().trim().required(),
  productionYear: yup.number().min(1900).max(new Date().getFullYear()),
  km: yup.number().trim().min(0).max(999999).required(),
  number: yup
    .string()
    .matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/)
    .trim()
    .required()
})
