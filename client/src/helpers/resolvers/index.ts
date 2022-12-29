import { string } from "yup"

export const emailResolver = string().required().email()
export const passwordResolver = string().required().min(8).max(32)
