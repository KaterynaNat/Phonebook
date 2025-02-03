import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short!").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-purple-100 shadow-md rounded-lg border border-glitterPink">
      <h2 className="text-2xl font-semibold text-hotPink text-center mb-4">Register</h2>
      <Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form className="flex flex-col space-y-4">
            {/* Name Field */}
            <div>
              <Field name="name" placeholder="Name" className="w-full p-2 border rounded-lg text-hotPink bg-white focus:ring-2 focus:ring-glitterPink" />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Email Field */}
            <div>
              <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded-lg text-hotPink bg-white focus:ring-2 focus:ring-glitterPink" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border rounded-lg text-hotPink bg-white focus:ring-2 focus:ring-glitterPink"
              />
              <button type="button" className="absolute right-3 top-3 text-pink-300" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-pink-300 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-300">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;


