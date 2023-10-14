import { Header, Footer } from "../../components/General";
import CertificationContainer from "../../components/Certifications/CertificationContainer";
import ScrollProgressIndicator from "../../components/Scroller/Scroller";

const Certifications = () => {
  return (
    <>
      <Header />
      <CertificationContainer />
      <Footer />
      <ScrollProgressIndicator />
    </>
  );
};

export default Certifications;
