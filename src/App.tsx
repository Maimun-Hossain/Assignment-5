import { Suspense, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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

function App() {
  const [data] = useState(async () => dataFetch());
  const [cart, setCart] = useState<techData[]>([]);
  return (
    <>
      <Nav></Nav>
      <div className="md:max-w-[85%] md:mx-auto"><Banner></Banner></div>
      <div className="md:max-w-[85%] md:mx-auto my-20">
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Technologies data={data} cart={cart} setCart={setCart} />
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}

export default App;
