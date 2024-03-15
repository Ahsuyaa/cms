import { useQuery } from "@tanstack/react-query";
import React from "react";

const Update = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/api/v1/getNews").then((res) => res.json()),
  });
  // console.log(data.data[1]);
  if (isPending) return "Loading...";
  if (error) {
    const errorMessage = error ? error.message : "Unknown error";
    return "An error has occurred: " + errorMessage;
  }

  return (
    <div className="bg-white relative z-10">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-3 gap-10 text-justify">
          <div className="col-span-2">
            <h2 className="text-3xl my-4 ">
              {" "}
              Welcome to{" "}
              <span className="uppercase text-[#fa6559]">updates</span>
            </h2>
            <div className="grid grid-cols-3 gap-5">
              {data &&
                data.length > 0 &&
                data.map((event, index) => (
                  <div key={index} className="shadow-lg p-10">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p>{event.content}</p>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl my-4">
              Update{" "}
              <span className="uppercase text-[#fa6559]">Activities</span>
            </h2>
            {/* <div>
              {data.map((item, index) => (
                <div key={index} className=" my-2 ">
              
                  <h6 className="text-lg font-semibold">{item.title}</h6>
                  <p className="text-md">{item.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
