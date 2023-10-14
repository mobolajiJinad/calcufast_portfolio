import { useState } from "react";
import CloseIcon from "../../assets/hamburgerOpen.svg";

const CertificationContainer = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Wiktionary_small.svg" },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState(" ");

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <div className="mt-[90px] px-2">
      <div
        className={
          model
            ? "w-full h-full fixed top-0 left-0 flex justify-center items-center overflow-hidden z-50 bg-black transition-opacity duration-400 ease-in-out visible opacity-100 scale-100"
            : "w-full h-full fixed top-0 left-0 flex justify-center items-center invisible opacity-0 scale-0 overflow-hidden z-50 bg-black transition-opacity duration-400 ease-in-out"
        }
      >
        <img
          src={tempImgSrc}
          className="w-auto max-w-full h-auto max-h-full block leading-none box-border py-5 mx-auto"
        />

        <img
          src={CloseIcon}
          onClick={() => setModel(false)}
          className="fixed top-3 right-3 w-8 h-8 p-1 bg-black cursor-pointer"
        />
      </div>

      <div className="columns-1 gap-3 sm:columns-2 md:columns-3">
        {images.map((item, index) => {
          return (
            <div
              className="transition-all duration-300 ease-in cursor-pointer mb-3 hover:opacity-80 border rounded-lg"
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
