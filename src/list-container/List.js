import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './List.module.css'

function List({ todo }) {
  return (
    <Card className={styles.card}>
      <Card.Header as="h5">{todo.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {todo.contents}
        </Card.Text>
        <Button variant="outline-danger">삭제하기</Button>
        <Button variant="outline-primary">{todo.isDone?"취소":"완료"}</Button>
      </Card.Body>
    </Card>
  );
}

export default List;