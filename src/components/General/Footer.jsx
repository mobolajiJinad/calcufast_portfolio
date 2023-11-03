import { Link } from "react-router-dom";

import WhatsappIcon from "../../assets/WhatsappIcon.svg";
import FacebookIcon from "../../assets/FacebookIcon.svg";
import GmailIcon from "../../assets/GmailIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#bb373c] to-[#07539e]">
      <div className="flex items-center justify-around p-3 md:px-[5%]">
        <div className="w-[42%]">
          <div className="flex h-full w-full items-center justify-center border-2 border-solid border-gray-600 py-4 text-lg uppercase text-white">
            placeholder
          </div>
          <p className="mt-2 text-white">Lorem ipsum dolor sit</p>
          <p className="mt-2 text-white">amet consectetur adipisicing elit.</p>
        </div>

        <div className="w-[50%]" id="contact">
          <h3 className="text-xl uppercase text-white">contact me</h3>
          <div className="text-white">
            <ContactList contact="lorem@gmail.com" icon={GmailIcon} />
            <ContactList contact="090 000 000" icon={WhatsappIcon} />
            <ContactList contact="lo@facebook.com" icon={FacebookIcon} />
          </div>
        </div>
      </div>

      <div className="mx-auto my-1 h-px w-5/6 bg-white"></div>
      <p className="p-3 text-center text-xs capitalize text-white">
        &copy; all rights reserved
      </p>
    </footer>
  );
};

const ContactList = ({ contact, icon, contactAddress }) => {
  return (
    <Link
      to={contactAddress || "#"}
      className="mt-1 flex items-center text-base underline"
    >
      <img src={icon} className="mx-1" />
      {contact}
    </Link>
  );
};

export default Footer;
