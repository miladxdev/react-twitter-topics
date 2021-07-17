import "./App.css";
import Header from "./components/Header"
import Topic from "./components/Topic"
import Footer from "./components/Footer"

function App() {
  return <div className="app">
    <div className="topics-container">
      <Header />

      <Topic title={"NBA"}  subtitle={"Basketball league"}/>
      <Topic title={"Football"} subtitle={"Sport"}/>
      <Topic title={"Starship"} subtitle={"space"}/>
      <Topic title={"Bitcoin"}  subtitle={"Currency"}/>
      <Topic title={"Metallica"}  subtitle={"music band"}/>

      <Footer />
    </div>
  </div>;
}

export default App;
