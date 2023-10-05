const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#bb373c] to-[#07539e]">
      <div className="p-3 flex justify-between items-center">
        <div className="w-[47%]">
          <div className="w-full h-full flex justify-center items-center text-lg text-white uppercase py-4 border-2 border-gray-600 border-solid">
            placeholder
          </div>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit
            <br />
            <br />
            amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="w-[47%]">
          <h3 className="text-center text-xl text-white uppercase">contact me</h3>
          <ul className="text-white">
            <ContactList contact="lorem@gmail.com" />
            <ContactList contact="090 000 000" />
            <ContactList contact="lorem@facebook.com" />
            <ContactList contact="lorem@twitter.com" />
          </ul>
        </div>
      </div>

      <div className="my-1 mx-auto w-5/6 h-px bg-white"></div>
      <p className="text-center p-3 capitalize text-white text-xs">
        &copy; all rights reserved
      </p>
    </footer>
  );
};

const ContactList = ({ contact }) => {
  return <li className="mt-1 px-2 text-sm block text-center">{contact}</li>;
};

export default Footer;
