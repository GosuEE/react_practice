import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './List.module.css'

function List({ todo, onEditHandler, onDeleteHandler }) {
  return (
    <Card className={styles.card}>
      <Card.Header as="h5">{todo.title}</Card.Header>
      <Card.Body>
        <Card.Text className={styles.text}>
          {todo.contents}
        </Card.Text>
        <div className={styles.button_wrapper}>
          <Button className={styles.delete_button} variant="outline-danger" onClick={() => onDeleteHandler(todo.id)}>삭제하기</Button>
          <Button variant="outline-primary" onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default List;