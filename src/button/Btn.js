import Button from 'react-bootstrap/Button';

function Btn({ submit }) {

  return (
    <>
      <Button variant="outline-success" onClick={submit}>버킷리스트 추가</Button>{' '}
    </>
  );
}

export default Btn;