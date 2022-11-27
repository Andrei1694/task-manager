import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik'
import axios from 'axios';
import { useCookies } from 'react-cookie';
export default function RegisterForm() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            const { name, email, password } = values
            register(email, password, name)
        },
    });
    const register = async (email, password, name) => {
        const response = await axios.post('http://localhost:3000/v1/user', {
            email,
            password,
            name
        })
        const token = response.data.token
        setCookie('token', token)
        console.log(cookies)
        axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.token}`;
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
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
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name} />

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