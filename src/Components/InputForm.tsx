import { Form, InputGroup, Button } from "react-bootstrap";

type InputFormProps = {
  handleClick: () => void;
};

export function InputForm({ handleClick }: InputFormProps) {
  return (
    <Form className="m-3 w-100">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Information</Form.Label>
        <Form.Label style={{ float: "right" }}>
          Already have an account? <a href="/">Log in</a>
        </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Keep me up to date on news and exclusive offers"
        />
      </Form.Group>
      <Form.Group></Form.Group>
      <Form.Group style={{}}>
        <InputGroup className="mt-2">
          <Form.Control
            style={{ marginRight: "2px" }}
            aria-label="First name"
            placeholder="First name"
          />
          <Form.Control
            style={{ marginLeft: "2px" }}
            aria-label="Last name"
            placeholder="Last name"
          />
        </InputGroup>
        <Form.Control
          className="mt-2"
          type="email"
          placeholder="Company (optional)"
        />
        <Form.Control className="mt-2" type="email" placeholder="Address" />
        <Form.Control
          className="mt-2"
          type="email"
          placeholder="Apartment, suite, etc. (optional)"
        />
        <Form.Control className="mt-2" type="email" placeholder="City" />
        <InputGroup className="mt-2">
          <Form.Control
            style={{ marginRight: "2px" }}
            aria-label="Country"
            placeholder="Country"
          />
          <Form.Control
            style={{ marginLeft: "2px" }}
            aria-label="Postal Code"
            placeholder="Postal Code"
          />
        </InputGroup>
        <Form.Control
          className="mt-2"
          type="email"
          placeholder="Phone (optional)"
        />
      </Form.Group>
      <div
        className="d-flex align-items-center justify-content-between mt-3"
        style={{ height: "75px", width: "100%" }}
      >
        <p>
          <a
            onClick={(e) => handleClick(e)}
            href=""
            style={{ textDecoration: "none" }}
          >
            &lt;Return to cart
          </a>
        </p>
        <Button
          variant="primary"
          type="submit"
          style={{ padding: "20px", float: "right" }}
        >
          Continue to Shipping Method
        </Button>
      </div>
    </Form>
  );
}
