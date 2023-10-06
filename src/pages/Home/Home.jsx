import "./Home.css";

import components from "../../components/Home";

const { Header, MainSection, ServiceSection, ValueSection, TutorialSection, Footer } =
  components;

const Home = () => {
  return (
    <div className="bg-[#0C0F16]">
      <Header />
      <MainSection />
      <div className="divider"></div>
      <ValueSection />
      <div className="divider"></div>
      <ServiceSection />
      <div className="divider"></div>
      <TutorialSection />
      <div className="divider"></div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
