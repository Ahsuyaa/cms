import React from "react";

const SideBar = ({ sections }) => {
  return (
    <div className="bg-[#fcf1f0] p-5 ">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl my-3">{section.title}</h2>
          {section.items.map((item, itemIndex) => (
            <h6 className="py-2 text-blue-600" key={itemIndex}>
              {item}
            </h6>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
