import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../ui/Input";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be at only 10 digits")
    .required("Phone number is required"),
});

/**
 * MyForm is a functional component that renders a form using Formik and Yup for form validation.
 * It includes two input fields for email and phone number, and a submit button.
 *
 * @returns {JSX.Element} - A JSX element representing the form.
 */
const MyForm = () => {
  return (
    // Formik component for handling form state and validation
    <Formik
      // Initial form values
      initialValues={{ email: "", phoneNumber: "" }}
      // Validation schema using Yup
      validationSchema={validationSchema}
      // Submission handler
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {/*  Render prop function to access form state and methods */}
      {({ isSubmitting }) => (
        // Form element with custom styles
        <Form className="border border-slate-500 flex flex-col items-center justify-center max-w-lg gap-5 p-5 py-10 rounded-md min-w-96">
          {/* Input component for email field */}
          <Input label="Email" type="email" name="email" />
          {/* Input component for phone number field */}
          <Input label="Phone Number" type="text" name="phoneNumber" />
          {/* Submit button with custom styles and disabled state based on form
          submission status */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-slate-700 text-white px-4 py-2 rounded-md w-full max-w-xs duration-300 hover:bg-slate-900"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
