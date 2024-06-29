import { Link } from "react-router-dom";
import MarchOwnArt from "/img/march-art-komunitas.jpeg";
import { FaWhatsapp, FaPen } from "react-icons/fa";

const Slide3 = () => {
  const whatsappLink = "https://chat.whatsapp.com/K2JjRlT3LZ61zWbsGOteIr";

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="pt-3 px-3 pb-12">
          <div className="max-w-4xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 items-center px-3">
              <div className="flex justify-center flex-col items-center relative">
                <img
                  src={MarchOwnArt}
                  alt="errors"
                  className="w-60 h-60 md:w-70 md:h-80 lg:w-80 lg:h-80 rounded-md"
                />
                <div className="absolute left-2 top-1 fw-bold text-[12px]">
                  art by : sayed
                </div>
              </div>
              <div className="flex justify-center flex-col items-center gap-4 w-full">
                <Link
                  target="_blank"
                  to="/daftar"
                  className="w-full flex gap-2 items-center justify-center bg-orange-500  font-bold px-4 py-2 rounded-md border-2 border-orange-500 hover:bg-transparent transition-all ease-in-out duration-300"
                >
                  <FaPen className="text-[17px]" />
                  <span>Daftar Disini</span>
                </Link>
                <Link
                  to={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex gap-2 items-center justify-center bg-green-500  font-bold px-4 py-2 rounded-md border-2 border-green-500 hover:bg-transparent transition-all ease-in-out duration-300"
                >
                  <FaWhatsapp className="text-[23px]" />
                  <span>Link Grup</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide3;
