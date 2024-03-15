import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Banner from "../../components/bannner/Banner";
import image from "../../assets/content.jpg";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Pagination from "../../components/pagination/Pagination";
const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items to display per page

  // Change page
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const sections = [
    {
      title: "Events",
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
  const eventsData = [
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
   
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Events Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Events Open",
      description: "Another event description...",
    },
    // Add more event objects as needed
  ];

  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);
  return (
    <>
      <Banner imageUrl={image} title="Events" />
      <section className="container mx-auto">
        <div className="grid grid-cols-3 py-10 gap-10">
          <div className="col-span-2 ">
            <button className="border border-[#fa6559] text-[#fa6559] px-4 py-1 my-2">
              {" "}
              Create Event
            </button>
            <div className="flex gap-5  items-center">
              <div>
                {" "}
                <label className="font-semibold " for="title">
                  Title:
                </label>
                <input type="text" className="border px-2 py-1 my-2" />
              </div>
              <div>
                <label className="font-semibold " for="fromDate">
                  From Date:
                </label>

                <input type="date" className="border px-2 py-1  my-2" />
              </div>
              <div>
                <label className="font-semibold " for="toDate">
                  To Date:
                </label>

                <input type="date" className="border  px-2 py-1 my-2" />
              </div>
              <div className="mt-5 ">
                <button className="bg-[#fa6559] flex items-center gap-2 px-5 rounded-md py-2 font-semibold text-white ">
                  Search <FaSearch />
                </button>
              </div>
            </div>
            {currentEvents.map((event, index) => (
              <div className="shadow-lg my-5 p-5">
                <h2 className="text-xl">{event.title}</h2>
                <h4 className="text-red-600 font-bold">{event.status}</h4>
                <p>{event.description}</p>
                <div className="flex justify-between">
                  <h6>{event.date}</h6>
                  <button className="flex items-center gap-2 border p-1">
                    Learn more{" "}
                    <span className="text-gray-400">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(eventsData.length / itemsPerPage)}
              onPageChange={onPageChange}
            />
          </div>
          <SideBar sections={sections} />
        </div>
      </section>
    </>
  );
};

export default Events;
