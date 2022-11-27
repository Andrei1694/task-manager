import { useFormik } from "formik";
import { useState } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import styled from "styled-components";

export default function TaskPage() {
    const formik = useFormik({
        initialValues: {
            description: '',
        },
        onSubmit: values => {


            console.log(formik.values.description)
            addTask(formik.values.description)
            // addTask(values.description)
        },
    });
    const [tasks, setTasks] = useState([{ id: 1, description: "1", completed: true }, { id: 1, description: "2", completed: false }, { id: 1, description: "3", completed: true }])
    const renderCompletedTasks = () => {
        const arr = [...tasks]
        const completed = arr.filter(task => task.completed)
        return completed.map(task => <Row>{task.description}</Row>)
    }
    const renderActiveTasks = () => {
        const arr = [...tasks]
        const completed = arr.filter(task => !task.completed)
        return completed.map(task => <Row>{task.description}</Row>)
    }
    const addTask = (description) => {
        const arr = [...tasks, { id: 1, description, completed: false }]
        setTasks(arr)
    }
    return (
        <Container>
            <Row>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add Task</Form.Label>
                        <Form.Control as="textarea"
                            rows={3}
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.des} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
            <Row>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <h5>Active Tasks</h5>
                    {renderActiveTasks()}
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center mt-5">
                    <h5>Completed Tasks</h5>

                    {renderCompletedTasks()}

                </Col>
            </Row>
        </Container>
    )
}