import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const News = () => {
  const [selectedTitle, setSelectedTitle] = useState("Events");

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8000/api/v1/notice").then((res) => res.json()),
  });
  console.log(data);
  if (isPending) return "Loading...";
  if (error) {
    const errorMessage = error ? error.message : "Unknown error";
    return "An error has occurred: " + errorMessage;
  }

  return (
    <div className="bg-white z-10 relative">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-3 gap-5">
          {data.data.map((news, index) => (
            <div key={index} className="shadow-lg p-10">
              <img src={news.bannerImage} alt="image" />
              <h3 className="text-lg font-semibold">{news.title}</h3>
              <p>{news.content}</p>
              <h6>{news.status}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
