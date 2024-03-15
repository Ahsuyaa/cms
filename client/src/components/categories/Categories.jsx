import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Categories = () => {
  const [selectedTitle, setSelectedTitle] = useState("Events");

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  const {
    isPendingNews,
    errorNews,
    data: dataNews,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/api/v1/getNews").then((res) => res.json()),
  });
  console.log("news", dataNews);
  const {
    isPendingNotice,
    errorNotice,
    data: dataNotice,
  } = useQuery({
    queryKey: ["repoDatas"],
    queryFn: () =>
      fetch("http://localhost:8000/api/v1/getNotices").then((res) =>
        res.json()
      ),
  });
  console.log("notice", dataNotice);
  let selectedData = [];
  if (selectedTitle === "News") {
    selectedData = dataNews?.data || [];
  } else if (selectedTitle === "Notices") {
    selectedData = dataNotice?.data || [];
  }

  if (isPendingNews || isPendingNotice) return "Loading...";

  if (errorNews || errorNotice) {
    const errorMessage = errorNews ? errorNews.message : errorNotice.message;
    return "An error has occurred: " + errorMessage;
  }

  return (
    <div className="bg-white z-10 relative">
      <div className="container mx-auto py-20">
        <div>
          <div className="flex gap-20 text-3xl py-5">
            <h6
              className={`${
                selectedTitle === "Events"
                  ? "border-b-[2px] border-b-[#fa6559] pb-2"
                  : ""
              } cursor-pointer`}
              onClick={() => handleTitleClick("Events")}
            >
              Events
            </h6>
            <h6
              className={`${
                selectedTitle === "News"
                  ? "border-b-[2px] border-b-[#fa6559] pb-2"
                  : ""
              } cursor-pointer`}
              onClick={() => handleTitleClick("News")}
            >
              News
            </h6>
            <h6
              className={`${
                selectedTitle === "Notices"
                  ? "border-b-[2px] border-b-[#fa6559] pb-2"
                  : ""
              } cursor-pointer`}
              onClick={() => handleTitleClick("Notices")}
            >
              Notices
            </h6>
            <h6
              className={`${
                selectedTitle === "Download"
                  ? "border-b-[2px] border-b-[#fa6559] pb-2"
                  : ""
              } cursor-pointer`}
              onClick={() => handleTitleClick("Download")}
            >
              Download Resources
            </h6>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {selectedData.map((item, index) => (
            <div key={index} className="shadow-lg p-10">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
