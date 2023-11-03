import { useState } from "react";
import CloseIcon from "../../assets/hamburgerOpen.svg";

const CertificationContainer = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(" ");

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <div className="mb-[15px] mt-[90px] px-2">
      <div
        className={
          model
            ? "duration-400 visible fixed left-0 top-0 z-50 flex h-full w-full scale-100 items-center justify-center overflow-hidden bg-black opacity-100 transition-opacity ease-in-out"
            : "duration-400 invisible fixed left-0 top-0 z-50 flex h-full w-full scale-0 items-center justify-center overflow-hidden bg-black opacity-0 transition-opacity ease-in-out"
        }
      >
        <img
          src={tempImgSrc}
          className="mx-auto box-border block h-auto max-h-full w-auto max-w-full py-5 leading-none"
        />

        <img
          src={CloseIcon}
          onClick={() => setModel(false)}
          className="fixed right-3 top-3 h-8 w-8 cursor-pointer bg-black p-1"
        />
      </div>

      <div className="columns-1 gap-3 sm:columns-2 md:columns-3">
        {images.map((item, index) => {
          return (
            <div
              className="mb-3 cursor-pointer rounded-lg border transition-all duration-300 ease-in hover:opacity-80"
              key={index}
              onClick={() => getImg(item.src)}
            >
              <img src={item.src} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationContainer;
