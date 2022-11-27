import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik'
import axios from 'axios';

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            const { email, password } = values
            register(email, password)
        },
    });
    const register = async (email, password) => {
        await axios.post('http://localhost:3000/v1/user/login', {
            email,
            password
        })
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <h5>Login Form</h5>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}