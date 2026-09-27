import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Login from "./components/Login";
//import Register from "./components/Register";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="auth-main">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default App;