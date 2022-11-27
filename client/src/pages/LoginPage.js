import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const CustomCard = styled(Card)`
  max-width: 300px;
`

export default function LoginPage() {
    return (
        <Container>
            <Row>
                <Col md={12} className="d-flex justify-content-center align-items-center mt-5">
                    <CustomCard>
                        <LoginForm />
                    </CustomCard>
                </Col>
            </Row>
        </Container>
    )
}