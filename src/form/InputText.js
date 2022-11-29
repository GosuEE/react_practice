import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import styles from './inputText.module.css'

function InputText({ name, text, setText }) {
    const onChange = (event) => {
        setText((current) => event.target.value)
    }
    return (
        <>
            <Form.Group as={Row} className={styles.text}>
                <Form.Label htmlFor="inputName" column sm="2">{name}</Form.Label>
                <Col sm="10">
                    <Form.Control value={text} onChange={onChange} />
                </Col>
            </Form.Group>
        </>
    );
}

export default InputText;