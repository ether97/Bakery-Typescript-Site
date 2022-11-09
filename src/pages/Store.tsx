import type * as CSS from "csstype";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../Components/StoreItem";
import { useEffect, useState } from "react";

const imgWrapper: CSS.Properties = {
  backgroundImage: "url('sera-iZgQKxuMRHc-unsplash.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "75vh",
  marginBottom: "100px",
  position: "relative",
  width: "100%",
};

const container: CSS.Properties = {
  height: "200vh",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
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

const storeBtn: CSS.Properties = {
  height: "50px",
  width: "200px",
  marginBottom: "10px",
};

export function Store() {
  const [newStoreItems, setNewStoreItems] = useState(storeItems);
  const [title, setTitle] = useState("Bakery");
  const [flavor, setFlavor] = useState("Filter Flavors");

  function handleBakery(input: string): void {
    if (input === "Cakes") {
      setTitle(input);
      setNewStoreItems(storeItems.filter((item) => item.id <= 9));
    } else if (input === "Cookies") {
      setTitle(input);
      setNewStoreItems(
        storeItems.filter((item) => item.id <= 18 && item.id > 9)
      );
    } else if (input === "Pies") {
      setTitle(input);
      setNewStoreItems(
        storeItems.filter((item) => item.id <= 24 && item.id > 18)
      );
    } else {
      setTitle("Bakery");
      setNewStoreItems(storeItems);
    }
    return setFlavor("Filter Flavors");
  }

  function handleFlavor(input: string): void {
    if (input === "Chocolate") {
      if (title !== "Bakery") {
        setFlavor(input);
        setNewStoreItems(
          newStoreItems.filter((item) => item.name.substring(0, 2) === "Ch")
        );
      } else {
        setFlavor(input);
        setNewStoreItems(
          storeItems.filter((item) => item.name.substring(0, 2) === "Ch")
        );
      }
    } else if (input === "Vanilla") {
      if (title !== "Bakery") {
        setFlavor(input);
        setNewStoreItems(
          newStoreItems.filter((item) => item.name.substring(0, 2) === "Va")
        );
      } else {
        setFlavor(input);
        setNewStoreItems(
          storeItems.filter((item) => item.name.substring(0, 2) === "Va")
        );
      }
    } else if (input === "Carrot") {
      if (title !== "Bakery") {
        setFlavor(input);
        setNewStoreItems(
          newStoreItems.filter((item) => item.name.substring(0, 2) === "Ca")
        );
      } else {
        setFlavor(input);
        setNewStoreItems(
          storeItems.filter((item) => item.name.substring(0, 2) === "Ca")
        );
      }
    }
  }
  return (
    <div style={container}>
      <div style={imgWrapper}>
        <h1 style={cakes}>{title}</h1>
        <div style={imgWrapperCover}></div>
      </div>

      <Container className="mb-5 d-flex g-10 flex-column">
        <div className="d-flex align-items-center w-100">
          <DropdownButton
            align="end"
            title={flavor}
            id="dropdown-menu-align-end"
            variant="dark"
            className="float-right"
            style={{
              marginLeft: "auto",
              marginBottom: "10px",
            }}
          >
            <Dropdown.Item eventKey="1" onClick={() => handleFlavor("Vanilla")}>
              Vanilla
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => handleFlavor("Chocolate")}
            >
              Chocolate
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => handleFlavor("Carrot")}>
              Carrot
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="d-flex justify-content-between">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="outline-dark"
              style={storeBtn}
              onClick={() => handleBakery("All")}
            >
              All
            </Button>
            <Button
              variant="outline-dark"
              style={storeBtn}
              onClick={() => handleBakery("Cakes")}
            >
              Cakes
            </Button>
            <Button
              variant="outline-dark"
              style={storeBtn}
              onClick={() => handleBakery("Cookies")}
            >
              Cookies
            </Button>
            <Button
              variant="outline-dark"
              style={storeBtn}
              onClick={() => handleBakery("Pies")}
            >
              Pies
            </Button>
          </div>
          <div style={{ width: "80%" }}>
            <Row md={2} xs={1} lg={3} className="g-3">
              {newStoreItems.map((item) => (
                <Col>
                  <StoreItem key={item.id} {...item} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
