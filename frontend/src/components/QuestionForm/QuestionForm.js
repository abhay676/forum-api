import { Form, Button } from 'react-bootstrap';
import Editor from '../Editor/Editor';
import styles from './QuestionForm.module.css';
const QuestionForm = () => {
  return (
    <div className={styles.wrapper}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Heading</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Label>Description</Form.Label>
        <Editor />
        <div className={styles.btn}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default QuestionForm;
