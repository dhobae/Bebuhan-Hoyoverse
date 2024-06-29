import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Slide4 = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="pt-3 px-3 pb-12">
          <div className="max-w-5xl text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">
              List Anggota
            </h1>
            <div className="overflow-hidden rounded-lg shadow-lg relative">
              <iframe
                className="w-auto h-[250px] md:w-[350px] md:h-[300px] lg:w-[650px] lg:h-[350px] pointer-events-auto"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSRtGfo5JhWdfx2pkh0AXylTyNa4KnfNdpeA5ZT1sItRNmPhwTeWd2CiAEQHx0fOxj6Fa84qRPfnErk/pubhtml?gid=1940467538&amp;single=true&amp;widget=false&amp;headers=false"
                title="List Anggota"
                loading="lazy"
              ></iframe>
              <Link
                to="/list-anggota"
                target="_blank"
                className="hover:opacity-90 absolute bottom-[6px] right-[6px] bg-blue-500 rounded-md px-3 py-1 flex gap-1 justify-center items-center"
              >
                <FaEye />
                <span className="font-bold text-[12px]">See Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide4;
