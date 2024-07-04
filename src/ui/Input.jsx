import { ErrorMessage, Field } from "formik";

/**
 * A reusable input component for formik forms.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.type - The type of the input field.
 *
 * @returns {JSX.Element} - A JSX element representing the input field.
 */
const Input = ({ label, name, type }) => {
  return (
    <div className="flex flex-col w-full max-w-xs">
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        name={name}
        className="border border-gray-400 rounded-md h-10 w-full pl-3 outline-none duration-300 focus:border-[2px] focus:border-slate-950"
      />
      <ErrorMessage name={name} component="div" className="text-red-600" />
    </div>
  );
};

export default Input;
