
import Image from "next/image";
import { logo } from "../../../public/images";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen z-50 bg-white p-10 flex items-center justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dotted border-gray-400 animate-spin"></div>

        <Image
          src={logo}
          alt="loaderImage"
          width={200} 
          height={200}
          className="w-14 h-14 object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
