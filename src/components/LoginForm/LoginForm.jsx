import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await dispatch(login(values)).unwrap();
      resetForm();
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-purple-100 shadow-md rounded-lg border ">
      <h2 className="text-2xl font-semibold text-hotPink text-center mb-4">
      </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            {/* Email Field */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="E-mail"
                className="w-full p-2 border rounded-lg text-hotPink focus:ring-2 focus:ring-glitterPink "
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Password Field */}
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-lg text-hotPink focus:ring-2 focus:ring-glitterPink "
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-pink-300 text-white p-2 rounded-lg hover:bg-pink-400 transition duration-300"
              disabled={isSubmitting} 
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
