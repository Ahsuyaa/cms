import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Banner from "../../components/bannner/Banner";
import image from "../../assets/content.jpg";
import { FaArrowRight, FaDownload, FaSearch } from "react-icons/fa";
import Pagination from "../../components/pagination/Pagination";
const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page

  // Change page
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const sections = [
    {
      title: "Notices",
      items: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
      ],
    },
    {
      title: "Blogs",
      items: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
      ],
    },
    {
      title: "Notice",
      items: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
      ],
    },
    {
      title: "Resources",
      items: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste.",
      ],
    },
  ];
  const NoticesData = [
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Notices Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Notices Open",
      description: "Another Notice description...",
    },
    // Add more Notice objects as needed
  ];

  const indexOfLastNotice = currentPage * itemsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - itemsPerPage;
  const currentNotices = NoticesData.slice(
    indexOfFirstNotice,
    indexOfLastNotice
  );
  return (
    <>
      <Banner imageUrl={image} title="Notices" />
      <section className="container mx-auto">
        <div className="grid grid-cols-3 py-10 gap-10">
          <div className="col-span-2 ">
            {currentNotices.map((Notice, index) => (
              <div className="shadow-lg my-5 p-5">
                <h2 className="text-xl">{Notice.title}</h2>

                <p className="text-gray-500">{Notice.description}</p>
                <div className="flex justify-between">
                  <h6>{Notice.date}</h6>
                  <button className="text-blue-600">
                    <FaDownload />
                  </button>
                </div>
              </div>
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(NoticesData.length / itemsPerPage)}
              onPageChange={onPageChange}
            />
          </div>
          <SideBar sections={sections} />
        </div>
      </section>
    </>
  );
};

export default Notices;
