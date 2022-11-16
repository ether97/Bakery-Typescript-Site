import { Container } from "react-bootstrap";
import type * as CSS from "csstype";
import Footer from "../Components/Footer";

const aboutContainer: CSS.Properties = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "url('about.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const aboutHeader: CSS.Properties = {
  color: "black",
  fontFamily: "Petit Formal Script, cursive",
  fontSize: "8rem",
  textAlign: "center",
};

const aboutParagraph: CSS.Properties = {
  fontFamily: "Petit Formal Script, cursive",
  width: "80%",
  textAlign: "justify",
  color: "black",
};

const infoContainer: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "rgb(255,255,255,0.5)",
  border: "solid 3px black",
  padding: "50px",
  borderRadius: "20px",
};

const text: CSS.Properties = {
  height: "400px",
  width: "100vw",
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
};

const team: CSS.Properties = {
  height: "70vh",
  width: "100vw",
  backgroundImage: "url('team.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
};

const missionHeader: CSS.Properties = {
  color: "white",
  fontFamily: "Petit Formal Script, cursive",
  fontSize: "4rem",
  fontWeight: "bold",
};

export function About() {
  return (
    <>
      <div style={aboutContainer}>
        <Container
          className="d-flex justify-content-center flex-column align-items-center"
          style={{ height: "60%" }}
        >
          <div style={infoContainer}>
            <h1 style={aboutHeader}>
              Mateusz's
              <br />
              Sweet Delights
            </h1>
            <p className="" style={aboutParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id estsss
            </p>
          </div>
        </Container>
      </div>
      <div style={text}>
        <h1 style={missionHeader}>My Mission</h1>
        <div
          style={{ height: "3px", width: "30%", backgroundColor: "white" }}
        ></div>
        <p className="text-light w-50 m-4 ta-justify" style={aboutParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id estssss
        </p>
      </div>
      <div style={team}></div>
      <div style={text}>
        <p className="text-light w-50 m-4 ta-justify" style={aboutParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex easasass
        </p>
        <p className="text-light w-50 m-4 ta-justify" style={aboutParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex easasass
        </p>
        <p className="text-light w-50 m-4 ta-justify" style={aboutParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex easasass
        </p>
      </div>
      <Footer fade="black" />
    </>
  );
}
