import "./App.css";
import Technologies from "./components/technologies/Technologies";
// import Banner from './components/banner/Banner'
// import Footer from './components/footer/Footer'
// import Nav from './components/nav/Nav'

const dataFetch = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};
const data = dataFetch();
function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <div className="md:max-w-[85%] md:mx-auto">{/* <Banner></Banner> */}</div>
      {/* <Footer></Footer> */}
      <div className="md:max-w-[85%] md:mx-auto my-20">
        <Technologies data={data}></Technologies>
      </div>
    </>
  );
}

export default App;
