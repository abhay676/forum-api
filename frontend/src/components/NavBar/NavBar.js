import { Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffff',
        position: 'fixed',
        top: 0,
        width: '100%',
      }}
    >
      <Nav className="justify-content-center fixed" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/f">Feeds</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/q">My Questions</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/u">My Participation</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
