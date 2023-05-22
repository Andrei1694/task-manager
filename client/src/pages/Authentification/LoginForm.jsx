import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLoginUserMutation } from "../../store/user/user.api";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
>>>>>>> fb442058bddccaa49c67322149d8f4da0e5ce3b1

function LoginForm({ toggleForm }) {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await loginUser(values).unwrap();
            setCookie("loginToken", response.token);
            navigate("/profile");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </button>
              <button
                type="button"
                className="text-gray-700 text-sm focus:outline-none hover:text-gray-900"
                onClick={toggleForm}
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
