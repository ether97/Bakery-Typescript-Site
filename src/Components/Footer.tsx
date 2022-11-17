import type * as CSS from "csstype";
import { Container, Stack } from "react-bootstrap";
import { SiCakephp } from "react-icons/si";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const divs: CSS.Properties = {
  width: "50%",
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   lineHeight: "400px",
};

const smallerDivs: CSS.Properties = {
  height: "300px",
  width: "49%",
  position: "relative",
};

const header: CSS.Properties = {
  position: "absolute",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "160px",
  textAlign: "center",
  fontFamily: "Petit Formal Script, cursive",
  fontSize: "2rem",
  fontWeight: "bold",
};

const paragraph: CSS.Properties = {
  position: "absolute",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "200px",
  textAlign: "center",
  fontFamily: "Petit Formal Script, cursive",
};

const socials: CSS.Properties = {
  height: "30px",
  width: "30px",
  margin: "20px",
};

const socialsContainer: CSS.Properties = {
  height: "100px",
  width: "100%",
  display: "flex",
};

const socialsText: CSS.Properties = {
  margin: "20px",
  fontFamily: "Petit Formal Script, cursive",
};

const copyRights: CSS.Properties = {
  margin: "20px",
  fontFamily: "Petit Formal Script, cursive",
};

const contactInfo: CSS.Properties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
  fontFamily: "Petit Formal Script, cursive",
};

type FooterProps = {
  fade: String;
};

export default function Footer({ fade = "white" }: FooterProps) {
  const faded: CSS.Properties = {
    position: "absolute",
    height: "10px",
    top: 0,
    width: "100%",
    // backgroundImage: `linear-gradient(to top, transparent, ${fade})`,
  };

  const footer: CSS.Properties = {
    position: "absolute",
    height: "400px",
    width: "100%",
    backgroundColor: fade === "white" ? "black" : "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: fade === "white" ? "white" : "",
  };

  const thinBlock: CSS.Properties = {
    height: "300px",
    width: "1px",
    backgroundColor: fade === "white" ? "white" : "black",
  };

  const icon: CSS.Properties = {
    height: "100px",
    width: "100px",
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    color: fade === "white" ? "white" : "black",
  };

  return (
    <footer style={footer}>
      <Container>
        <Stack direction="horizontal">
          <div style={divs}>
            <div style={smallerDivs}>
              <SiCakephp style={icon} />
              <h1 style={header}>Mateusz's</h1>
              <p style={paragraph}>----Sweet Delight----</p>
            </div>
            <div style={smallerDivs}>
              <div style={socialsText}>
                <h3 className="fw-bold">Socials</h3>
              </div>
              <div style={socialsContainer}>
                <BsFacebook style={socials} />
                <BsInstagram style={socials} />
              </div>
              <p style={copyRights} className="fw-bold">
                Privacy-Terms
              </p>
              <p style={copyRights}>
                &copy; 2022 Mateusz's. All rights reserved.
              </p>
            </div>
          </div>
          <div style={thinBlock}></div>
          <div style={divs}>
            {" "}
            <div style={smallerDivs}>
              <div style={contactInfo}>
                <h4 className="fw-bold">Contact Information</h4>
                <p>401 E 90th Street</p>
                <p>NY, NY 10029</p>
                <p className="fs-8 fw-bold">sweetdelights@gmail.com</p>
              </div>
            </div>
          </div>
        </Stack>
      </Container>
      <div style={faded}></div>
    </footer>
  );
}
