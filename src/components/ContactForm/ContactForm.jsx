import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string()
    .matches(/^\+[1-9]\d{7,14}$/, "Enter a valid phone number")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find((c) => c.name.toLowerCase() === values.name.toLowerCase())
    ) {
      toast.error(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    toast.success("Contact added successfully");
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col space-y-4 bg-purple-100 p-6 shadow-md rounded-lg">
          <div>
            <Field
              name="name"
              placeholder="Name"
              className="w-full p-2 border rounded-lg"
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <Field
              name="number"
              placeholder="Phone number"
              className="w-full p-2 border rounded-lg"
            />
            {errors.number && touched.number && (
              <p className="text-red-500 text-sm">{errors.number}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-300 text-white p-2 rounded-lg hover:bg-pink-400"
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
