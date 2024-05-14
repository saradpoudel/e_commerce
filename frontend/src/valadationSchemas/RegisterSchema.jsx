
import * as yup from "yup"

const RegisterSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    tel: yup.string().min(10, "Invalid phone number").max(10, "Invalid phone number"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    verifyPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Password verification is required"),
}).required();

export default RegisterSchema;