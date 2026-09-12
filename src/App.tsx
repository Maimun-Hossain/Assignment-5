import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Technologies from "./components/technologies/Technologies";
import type { techData } from "./types";
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

const dataFetch = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
const data = dataFetch();

function App() {
  const [cart, setCart] = useState<techData[]>([]);
  return (
    <>
      <Nav></Nav>
      <div className="md:max-w-[85%] md:mx-auto"><Banner></Banner></div>
      <div className="md:max-w-[85%] md:mx-auto my-20">
        <Technologies data={data} cart={cart} setCart={setCart}></Technologies>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;
