/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useEffect } from "react";

// const ListAnggota = () => {
//   return (
//     <>
//       <div className="mx-auto p-4  pt-6 h-screen lg:pt-12">
//         {/* bg-gray-400 */}
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-3">
//             <Link
//               target="_blank"
//               to={
//                 "https://docs.google.com/spreadsheets/d/1e02ID-UiyOgT7xqCCCWEaV1acKZ4mEuX3Vx24_o_1rA"
//               }
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-200 flex gap-3 items-center max-w-[9rem]"
//             >
//               <FaEye />
//               <div>See Details</div>
//             </Link>
//           </div>
//           <iframe
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//             src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRVGm7r2IfyrmDXZut4isbebeLrtboRUzz9t78Loz-uE6CaiSzKmCJQ4UxeQifPTaptJ9HJjbCFilWX/pubhtml?gid=0&single=true&widget=true&headers=false"
//             className="w-full h-[45rem] border-0"
//             allowFullScreen
//             title="Google Spreadsheet"
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

const ListAnggota = () => {
  const spreadsheetLink =
    "https://docs.google.com/spreadsheets/d/1yv2vuHs57fIVjItJoXHGQ3UCuJcVI3FRE6yO5QiHUNA/edit?gid=1940467538#gid=1940467538";

  useEffect(() => {
    window.location.href = spreadsheetLink;
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center text-md font-semibold underline">
        Kamu Diarahkan Ke Link List Anggota Spreadsheet ...
      </div>
    </>
  );
};

export default ListAnggota;
