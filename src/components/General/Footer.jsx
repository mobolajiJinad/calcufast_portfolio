import { Link } from "react-router-dom";

import WhatsappIcon from "../../assets/WhatsappIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import GmailIcon from "../../assets/GmailIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#bb373c] to-[#07539e]">
      <div className="p-3 flex justify-around items-center md:px-[5%]">
        <div className="w-[42%]">
          <div className="w-full h-full flex justify-center items-center text-lg text-white uppercase py-4 border-2 border-gray-600 border-solid">
            placeholder
          </div>
          <p className="text-white mt-2">Lorem ipsum dolor sit</p>
          <p className="text-white mt-2">amet consectetur adipisicing elit.</p>
        </div>

        <div className="w-[50%]" id="contact">
          <h3 className="text-xl text-white uppercase">contact me</h3>
          <div className="text-white">
            <ContactList contact="lorem@gmail.com" icon={GmailIcon} />
            <ContactList contact="090 000 000" icon={WhatsappIcon} />
            <ContactList contact="lo@facebook.com" icon={FacebookIcon} />
          </div>
        </div>
      </div>

      <div className="my-1 mx-auto w-5/6 h-px bg-white"></div>
      <p className="text-center p-3 capitalize text-white text-xs">
        &copy; all rights reserved
      </p>
    </footer>
  );
};

const ContactList = ({ contact, icon, contactAddress }) => {
  return (
    <Link to={contactAddress || "#"} className="mt-1 text-base flex items-center underline">
      <img src={icon} className="mx-1" />
      {contact}
    </Link>
  );
};

export default Footer;
