import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const MyForm = () => {
  return (
    <Formik
      initialValues={{ email: "", phoneNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="border border-slate-500 flex flex-col items-center justify-center max-w-lg gap-5 p-5 py-10 rounded-md min-w-96">
          <div className="flex flex-col w-full max-w-xs">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className="border border-gray-400 rounded-md h-10 w-full pl-3 outline-none duration-300 focus:border-[2px] focus:border-slate-950"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600"
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              type="text"
              name="phoneNumber"
              className="border border-gray-400 rounded-md h-10 w-full pl-3 outline-none duration-300 focus:border-[2px] focus:border-slate-950"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-600"
            />
          </div>
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
