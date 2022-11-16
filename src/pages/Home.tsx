import type * as CSS from "csstype";
import { Button } from "react-bootstrap";

const storeStyle: CSS.Properties = {
  backgroundImage: "url('mr-autthaporn-pradidpong-EZt7OJagHyY-unsplash.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  position: "relative",
};

const container: CSS.Properties = {
  height: "295px",
  width: "745px",
  background: "linear-gradient(to right, transparent, rgba(0,0,0,0.9))",
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  right: "100px",
  position: "absolute",
  top: "300px",
  gap: "20px",
  borderRadius: "10px",
  // border: "solid 2px white",
};

const blockquote: CSS.Properties = {
  fontSize: "3.8rem",
  fontFamily: "Playfair Display, serif",
};

const h1Style: CSS.Properties = {
  fontFamily: "Chomsky",
  fontSize: "3rem",
  textShadow: "5px 5px black",
};

const containerWrapper: CSS.Properties = {
  height: "300px",
  width: "750px",
  background: "linear-gradient(to right, transparent, rgba(255,255,255,0.8))",
  right: "100px",
  position: "absolute",
  top: "300px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const btn: CSS.Properties = {
  position: "absolute",
  right: "320px",
  bottom: "280px",
  outline: "none",
  padding: "10px 50px 10px 50px",
  fontFamily: "Playfair Display, serif",
  fontSize: "2rem",
  color: "black",
};

export function Home() {
  return (
    <div style={storeStyle}>
      {/* <div style={containerWrapper}> */}
      <div style={container}>
        <div></div>
        <blockquote style={blockquote}>"The best bakery in town"</blockquote>
        <h1 style={h1Style}>The New York Times</h1>
        <p>New York Times</p>
      </div>
      {/* </div> */}
      <Button href={"/store"} variant="outline-light" style={btn}>
        Shop Pastries
      </Button>
    </div>
  );
}
