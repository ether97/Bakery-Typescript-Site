import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./Components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShoppingCartButton } from "./Components/ShoppingCartButton";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ShoppingCartButton />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
