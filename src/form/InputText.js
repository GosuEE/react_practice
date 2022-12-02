import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import styled from "styled-components"

const StyledText = styled(Form.Control)`
    margin-bottom: 15px;
`

function InputText({ name, text, setText }) {
    const onChange = (event) => {
        setText((current) => event.target.value)
    }
    return (
        <>
            <StyledText as={Row}>
                <Form.Label htmlFor="inputName" column sm="2">{name}</Form.Label>
                <Col sm="10">
                    <Form.Control value={text} onChange={onChange} />
                </Col>
            </StyledText>
        </>
    );
}

export default InputText;