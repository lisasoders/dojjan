import './App.css';
import Header from './components/header';
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Product from "../src/pages/product"


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Router>
            <Routes>
          <Route path="/product/:productId" exact component={Product} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
