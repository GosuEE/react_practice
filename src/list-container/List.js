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

const StyledText = styled(Card.Text)`
  padding-bottom: 150px;
`
const Button_wrapper = styled.div`
  float:right;
`
const Delete_button = styled(Button)`
  margin-right: 15px;
`

function List({ todo, onEditHandler, onDeleteHandler }) {
  return (
    <StyledCard>
      <Card.Header as="h5">{todo.title}</Card.Header>
      <Card.Body>
        <StyledText>
          {todo.contents}
        </StyledText>
        <Button_wrapper>
          <Delete_button variant="outline-danger" onClick={() => onDeleteHandler(todo.id)}>삭제하기</Delete_button>
          <Button variant="outline-primary" onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</Button>
        </Button_wrapper>
      </Card.Body>
    </StyledCard>
  );
}

export default List;