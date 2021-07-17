import "./App.css";
import Header from "./components/Header"
import Topic from "./components/Topic"
import Footer from "./components/Footer"

function App() {
  return <div className="app">
    <div className="topics-container">
      <Header />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Footer />
    </div>
  </div>;
}

export default App;
