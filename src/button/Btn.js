import Button from 'react-bootstrap/Button';
import styles from './Btn.module.css'

function Btn({ submit }) {

  return (
    <>
      <Button className={styles.btn} variant="outline-success" onClick={submit}>버킷리스트 추가</Button>{' '}
    </>
  );
}

export default Btn;