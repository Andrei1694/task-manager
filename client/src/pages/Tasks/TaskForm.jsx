import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
  });

  const initVal = initialValues ?? {
    description: "",
  };
  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <Field
                as="textarea"
                type="text"
                id="description"
                name="description"
                placeholder="Enter task description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="description">
                {(msg) => <p className="text-red-500 text-xs italic">{msg}</p>}
              </ErrorMessage>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                // disabled={!isValid || isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
