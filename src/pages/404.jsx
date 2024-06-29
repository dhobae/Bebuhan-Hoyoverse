import { useEffect } from "react";
import { Link } from "react-router-dom";
import Kiana from "/img/kiana.png";

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 pb-[100px]">
      <div className="mb-6 p-3">
        <img
          src={Kiana}
          alt="404 Not Found"
          className="mx-auto w-[200px] h-auto rounded-full"
        />
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 hover:underline mt-2"
        >
          Go Home?
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
