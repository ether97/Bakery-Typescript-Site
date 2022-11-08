import type * as CSS from "csstype";
import { Container, Row, Col } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../Components/StoreItem";

const imgWrapper: CSS.Properties = {
  backgroundImage: "url('sera-iZgQKxuMRHc-unsplash.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "75vh",
  marginBottom: "100px",
  position: "relative",
};

const container: CSS.Properties = {
  height: "200vh",
};

const imgWrapperCover: CSS.Properties = {
  height: "10vh",
  position: "absolute",
  bottom: "0px",
  left: "0px",
  width: "100%",
  backgroundImage:
    "linear-gradient(to bottom, transparent, rgb(255,255,255,1))",
};

const cakes: CSS.Properties = {
  fontFamily: "Petit Formal Script, cursive",
  lineHeight: "75vh",
  fontSize: "10rem",
  color: "white",
  textShadow: "5px 5px black",
  textAlign: "center",
};

export function Store() {
  return (
    <div style={container}>
      <div style={imgWrapper}>
        <h1 style={cakes}>Cakes</h1>
        <div style={imgWrapperCover}></div>
      </div>

      <Container className="mb-5">
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col>
              <StoreItem key={item.id} {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
