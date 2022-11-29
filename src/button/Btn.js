import Button from 'react-bootstrap/Button';

function Btn({ disabled, submit }) {

  return (
    <>
      <Button variant="outline-success" onClick={submit} disabled={disabled}>버킷리스트 추가</Button>{' '}
    </>
  );
}

export default Btn;