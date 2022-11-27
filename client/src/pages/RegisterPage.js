import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const CustomCard = styled(Card)`
  max-width: 300px;
`

export default function RegisterPage() {
    return (
        <Container>
            <Row>
                <Col md={12} className="d-flex justify-content-center align-items-center mt-5">
                    <CustomCard>
                        <RegisterForm />
                    </CustomCard>
                </Col>
            </Row>
        </Container>
    )
}