import ScrollProgressIndicator from "../../components/Scroller/Scroller";
import {
  Testimonial,
  Impact,
  Header,
  Footer,
  TutorialSection,
} from "../../components/Tutorial";

const divider = {
  margin: "2rem 0",
  marginLeft: "auto",
  width: "70%",
  height: "0.125rem",
  background: "linear-gradient(90deg, #ff4d54 0%, #007fff 100%)",
};

const Tutorial = () => {
  return (
    <div className="bg-[#0C0F16]">
      <Header />
      <div className="mt-[88px]"></div>
      <Impact />
      <div className="mt-[88px]"></div>
      <Testimonial />
      <div style={divider}></div>
      <TutorialSection />
      <div style={divider}></div>
      <Footer />
      <ScrollProgressIndicator />
    </div>
  );
};
export default Tutorial;
