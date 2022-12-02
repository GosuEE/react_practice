import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from "styled-components"

const StyledCard = styled(Card)`
  margin-top:10px;
  margin-right: 15px;
  width: 300px;
  min-width:300px;
  height: 300px;
`
const Button_wrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
`
const Delete_button = styled(Button)`
  margin-right: 15px;
`

function List({ todo, onEditHandler, onDeleteHandler }) {
  return (
    <StyledCard>
      <Card.Header as="h5">{todo.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {todo.contents}
        </Card.Text>
        <Button_wrapper>
          <Delete_button variant="outline-danger" onClick={() => onDeleteHandler(todo.id)}>삭제하기</Delete_button>
          <Button variant="outline-primary" onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</Button>
        </Button_wrapper>
      </Card.Body>
    </StyledCard>
  );
}

export default List;