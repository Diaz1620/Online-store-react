import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
// import QuantityPicker from "./components/quantityPicker";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container-fluid">
        <Catalog></Catalog>
      </div>

      <Footer></Footer>
    </div>
  );
}

// research REACT Virtual DOM

export default App;
