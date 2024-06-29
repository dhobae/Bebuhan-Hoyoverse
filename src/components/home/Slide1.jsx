/* eslint-disable no-unused-vars */
import Kiana from "/img/kiana.png";

import FireFly from "/img/fireflyown.jpeg";
import { Link } from "react-router-dom";

const Slide1 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto pt-3 px-3 pb-12 lg:p-0">
        {/* card */}
        {/* bg-slate-100 bg-opacity-15 shadow-lg rounded-lg  border-[1.5px] border-sky-500*/}
        <div className="overflow-hidden flex flex-col md:flex-row md:items-center p-10">
          {/* card header */}
          <div className="md:w-1/2">
            <div className="relative">
              <img
                className="block w-60 h-60 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-lg"
                src={FireFly}
                alt="errors"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 font-bold text-[12px] text-dark">
                capcaitumisart
                <span className="block text-center">(twitter)</span>
              </div>
            </div>
          </div>
          {/* card body */}
          <div className="p-6 md:w-2/4 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-center">
              Welcome To Our Website!
            </h3>
            <p className="text-center">
              Website{" "}
              <Link
                target="_blank"
                to={"https://chat.whatsapp.com/K2JjRlT3LZ61zWbsGOteIr"}
                className="font-semibold underline"
              >
                Bebuhan Hoyoverse
              </Link>{" "}
              <span className="block">
                Banjarmasin,Banjarbaru,Martapura, Dll.
              </span>
              <span className="block">Kalimantan Selatan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
