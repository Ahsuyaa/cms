import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Banner from "../../components/bannner/Banner";
import image from "../../assets/content.jpg";
import { FaArrowRight, FaDownload, FaSearch } from "react-icons/fa";
import Pagination from "../../components/pagination/Pagination";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items to display per page

  // Change page
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const sections = [
    {
      title: "Blogs",
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
      title: "Blog",
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
  const BlogsData = [
    {
      date: "2001-10-2",
      img: image,
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      img: image,
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      img: image,
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      img: image,
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      img: image,
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    {
      date: "2001-10-2",
      title: "Title 1",
      status: "Blogs Closed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur nobis. Dolore at, recusandae laborum ipsam esse tempora aut velit.",
    },
    {
      date: "2002-11-3",
      title: "Title 2",
      status: "Blogs Open",
      description: "Another Blog description...",
    },
    // Add more Blog objects as needed
  ];

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = BlogsData.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <>
      <Banner imageUrl={image} title="Blogs" />
      <section className="container mx-auto">
        <div className="grid grid-cols-3 py-10 gap-10">
          <div className="col-span-2 ">
            <div className="grid grid-cols-2">
              {currentBlogs.map((Blog, index) => (
                <div className=" m-5  shadow-md">
                  <img src={Blog.img} alt="image" />
                  <div className="p-2">
                    <h2 className="text-xl">{Blog.title}</h2>

                    <p className="text-gray-500">{Blog.description}</p>
                    <div className="">
                      <button className="text-blue-600">Read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(BlogsData.length / itemsPerPage)}
              onPageChange={onPageChange}
            />
          </div>
          <SideBar sections={sections} />
        </div>
      </section>
    </>
  );
};

export default Blogs;
