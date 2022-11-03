import CSS from "csstype";
import { Container } from "react-bootstrap";

const storeStyle: CSS.Properties = {
  backgroundImage: "url('mr-autthaporn-pradidpong-EZt7OJagHyY-unsplash.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  position: "relative",
};

const container: CSS.Properties = {
  height: "30vh",
  width: "40vw",
  background: "linear-gradient(to right, transparent, rgba(0,0,0,0.9))",
  right: "100px",
  position: "absolute",
  top: "300px",
  textAlign: "center",
  color: "white",
  border: "solid 2px white",
};

const blockquote: CSS.Properties = {
  fontSize: "8rem",
  fontFamily: "Shalimar, cursive",
};

const h1Style: CSS.Properties = {};

const pStyle: CSS.Properties = {};

export function Store() {
  return (
    <div style={storeStyle}>
      <div style={container}>
        <div></div>
        <blockquote style={blockquote}>"The best bakery in town"</blockquote>
        <h1 style={h1Style}>The New York Times</h1>
        <p style={pStyle}>New York Times</p>
      </div>
    </div>
  );
}
