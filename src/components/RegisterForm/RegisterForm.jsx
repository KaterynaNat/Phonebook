import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "Too short!").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    try {
      const result = await dispatch(register(values)).unwrap();
      toast.success(`Welcome, ${result.user.name}!`);
      resetForm();
    } catch (error) {
      console.error("Registration Error:", error);
      setErrors({ server: error }); 
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-purple-100 shadow-md rounded-lg border ">
      <h2 className="text-2xl font-semibold text-hotPink text-center mb-4">
      </h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="flex flex-col space-y-4">
            <div>
              <Field name="name" placeholder="Name" className="w-full p-2 border rounded-lg text-hotPink focus:ring-2 focus:ring-glitterPink " />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded-lg text-hotPink focus:ring-2 focus:ring-glitterPink " />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded-lg text-hotPink focus:ring-2 focus:ring-glitterPink " />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            {}
            {errors.server && <p className="text-red-500 text-sm text-center">{errors.server}</p>}

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


