import "./App.css";

import components from "./components";

const { Header, MainSection, ServiceSection, ValueSection, Footer } = components;

function App() {
  return (
    <div className="bg-[#0C0F16]">
      <Header />
      <MainSection />
      <div className="divider"></div>
      <ValueSection />
      <div className="divider"></div>
      <ServiceSection />
      <div className="divider"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
