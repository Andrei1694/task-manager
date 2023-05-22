import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useUpdateUserMutation } from "../../store/user/user.api";

export default function UserDetailsForm({ user, handleRequest }) {
  const initialValues = {
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    avatarUrl: Yup.string(),
  });

  const handleSubmit = (values) => {
    handleRequest(values);
  };

  return (
    <div className="mx-auto max-w-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="avatarUrl"
                className="block font-medium text-gray-700"
              >
                Avatar URL
              </label>
              <Field
                type="text"
                name="avatarUrl"
                id="avatarUrl"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="avatarUrl"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
