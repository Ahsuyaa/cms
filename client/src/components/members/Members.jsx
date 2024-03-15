import React from "react";

const Members = () => {
  return (
    <div className="relative z-10  bg-white py-20">
      <div className="grid grid-cols-2  container mx-auto">
        <div>
          <img
            src="https://jango.nikadevs.com/assets/base/img/content/stock3/6.jpg"
            alt="img"
            className="h-[350px] w-full object-cover"
          />
        </div>
        <div className="bg-[#fa6559] px-20">
          <h2 className="text-3xl my-4 text-white">
            Life Member's <span className="uppercase ">Area</span>
          </h2>
          <ul className=" text-xl  list-disc text-white space-y-5 px-5 ">
            <li>Membership Benefits</li>
            <li>Becoming a member</li>
            <li>Browse the member</li>
            <li>Download membership form</li>
          </ul>
          <button className=" inline-flex px-10 py-2 font-semibold bg-white my-5">
            Login to membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
