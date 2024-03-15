import React from "react";
import img from "../../assets/content.jpg";
const CTA = () => {
  return (
    <div className="py-6 px-8 rounded-lg shadow-md text-center">
      <div>
        <img
          src={img}
          alt="CTA Image"
          className="fixed inset-0 w-full z-0 opacity-65 "
        />
      </div>

      <div className="relative z-10">
        <img
          src="https://w0.peakpx.com/wallpaper/626/472/HD-wallpaper-vijay-devarakonda.jpg"
          alt="CTA Image"
          className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
        />
        <h2 className=" text-3xl font-semibold ">Bom bahadur khatri</h2>
        <h3 className=" text-xl font-semibold mb-4">Ceo updates</h3>

        <button className="bg-[#fa6559] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300">
          View Message
        </button>
      </div>
    </div>
  );
};

export default CTA;
