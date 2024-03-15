import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FaDumpster, FaPenAlt, FaPlus, FaRegTrashAlt } from "react-icons/fa";
const DashboardNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateModal, setShowCreateModal] = useState(false); // State to control modal visibility
  const [showEditModal, setShowEditModal] = useState(false);
  const [newPostData, setNewPostData] = useState({
    title: "",
    content: "",
    bannerImage: "",
    slug: "",
    status: "draft",
  });
  const [newEditData, setNewEditData] = useState({
    title: "",
    content: "",
    bannerImage: "",
    slug: "",
    status: "draft",
  });
  const [editItemId, setEditItemId] = useState(null);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData", currentPage],
    queryFn: () =>
      fetch(`http://localhost:8000/api/v1/admin/news?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(data);
  const PostNewsMutation = useMutation({
    mutationFn: (formData) => {
      return axios
        .post(`http://localhost:8000/api/v1/admin/news`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Specify content type for file upload
          },
        })
        .then((response) => response.data);
    },
    onSuccess: () => {
      alert("Post successful");
      refetch(); // Refresh the data after posting
    },
    onError: (error) => {
      if (error.response && error.response.status === 422) {
        alert("Validation failed. Please check your input data.");
      } else {
        alert("Failed to create post. Please try again later.");
      }
      console.error("Posting error:", error);
    },
  });
  const EditNewsMutation = useMutation({
    mutationFn: (id, formData) => {
      // Accept ID separately
      return axios
        .post(`http://localhost:8000/api/v1/admin/news/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => response.data);
    },
    onSuccess: () => {
      alert("Edit successful");
      refetch();
    },
    onError: (error) => {
      if (error.response && error.response.status === 422) {
        alert(error);
      } else {
        alert(error);
      }
      console.error("Edit error:", id);
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(`http://localhost:8000/api/v1/admin/news/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    onSuccess: () => {
      console.log("Deletion successful");
      refetch(); // Refresh the data after deletion
    },
    onError: (error) => {
      console.error("Deletion error:", error);
    },
  });
  useEffect(() => {
    setCurrentPage(1); // Reset page to 1 whenever searchQuery changes
  }, [searchQuery]);

  const handleCreatePost = () => {
    setShowCreateModal(true); // Show the create post modal
  };

  const handleCloseModal = () => {
    setShowCreateModal(false); // Close the create post modal
  };
  const handleCreateEdit = (id) => {
    setEditItemId(id); // Set the ID of the item being edited
    setShowEditModal(true); // Show the edit post modal
  };

  const handleCloseEdit = () => {
    setShowEditModal(false); // Close the edit post modal
    setEditItemId(null); // Reset the editItemId state
  };

  useEffect(() => {
    if (editItemId !== null) {
      const itemToEdit = data.data.find((item) => item.id === editItemId);
      if (itemToEdit) {
        setNewEditData(itemToEdit);
      }
    }
  }, [editItemId, data]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "bannerImage" ? files[0] : value;
    setNewPostData({ ...newPostData, [name]: newValue });
  };
  const handleChangeEdit = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "bannerImage" ? files[0] : value;
    setNewEditData({ ...newEditData, [name]: newValue });
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", newPostData.title);
    formData.append("content", newPostData.content);
    formData.append("bannerImage", newPostData.bannerImage);
    formData.append("slug", newPostData.slug);
    formData.append("status", newPostData.status);
    PostNewsMutation.mutate(formData);
    setShowCreateModal(false);
    setNewPostData({
      title: "",
      content: "",
      bannerImage: null,
      slug: "",
      status: "draft",
    });
  };
  // const handleSubmitEdit = (id) => {
  //   const formData = new FormData();
  //   formData.append("title", newEditData.title);
  //   formData.append("content", newEditData.content);
  //   formData.append("bannerImage", newEditData.bannerImage);
  //   formData.append("slug", newEditData.slug);
  //   formData.append("status", newEditData.status);
  //   formData.append("_method", "put");
  //   EditNewsMutation.mutate({ id, formData }); // Pass id along with formData
  //   setShowEditModal(false);
  //   setEditItemId(null);
  //   setNewEditData({
  //     title: "",
  //     content: "",
  //     bannerImage: null,
  //     slug: "",
  //     status: "draft",
  //   });
  // };
  // Change the handleSubmitEdit function signature to accept both id and event
  const handleSubmitEdit = (id, e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData();
    formData.append("title", newEditData.title);
    formData.append("content", newEditData.content);
    formData.append("bannerImage", newEditData.bannerImage);
    formData.append("slug", newEditData.slug);
    formData.append("status", newEditData.status);
    formData.append("_method", "put");

    // Send the id along with the formData
    EditNewsMutation.mutate(id, formData); // Pass id as the first argument
    console.log("idddddd", id);
    setShowEditModal(false);
    setEditItemId(null);
    setNewEditData({
      title: "",
      content: "",
      bannerImage: null,
      slug: "",
      status: "draft",
    });
  };

  if (isLoading) return "Loading...";
  if (error) {
    const errorMessage = error ? error.message : "Unknown error";
    return "An error has occurred: " + errorMessage;
  }

  const filteredNews = data.data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this id ${id}?`)) {
      deleteNewsMutation.mutate(id);
    }
  };

  return (
    <div className="dashboard-news m-10">
      <div className="flex justify-between align-middle items-center ">
        <div>
          {" "}
          <input
            type="text"
            className="border p-2 my-2"
            placeholder="Search by title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <h6
            onClick={handleCreatePost}
            className="mr-5 bg-[#fa6559] py-2 px-5 text-white rounded-full flex items-center gap-2"
          >
            <span>
              <FaPlus />
            </span>{" "}
            Create post
          </h6>
        </div>
      </div>
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded max-w-md">
            <button onClick={handleCloseModal}>&times;</button>
            <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                name="title"
                value={newPostData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="border rounded px-3 py-2"
              />
              <textarea
                name="content"
                value={newPostData.content}
                onChange={handleChange}
                placeholder="Content"
                required
                className="border rounded px-3 py-2"
              ></textarea>
              <input
                type="file"
                name="bannerImage"
                onChange={handleChange}
                accept="image/*"
                required
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                name="slug"
                value={newPostData.slug}
                onChange={handleChange}
                placeholder="Slug"
                className="border rounded px-3 py-2"
              />
              <select
                name="status"
                value={newPostData.status}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <button
                type="submit"
                className="bg-[#fa6559] text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="w-full text-center">
        <thead className="border-b-2 bg-red-100">
          <tr>
            <th className="w-[10%] py-2">SN</th>
            <th className="w-[25%] py-2">Title</th>
            <th className="w-[35%] py-2">Content</th>
            <th className="w-[15%] py-2">Image</th>
            <th className="w-[20%] py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((item, index) => (
            <tr key={index} className="newstable shadow-sm">
              <td className="w-[10%] py-2">{index + 1}</td>
              <td className="w-[25%] py-2">{item.title}</td>
              <td className="w-[35%] py-2">{item.content}</td>
              <td className="w-[15%] py-2">
                <img src={item.bannerImage} alt={item.title} />
              </td>
              <td className="w-[20%] py-2 ">
                <button
                  onClick={() => handleCreateEdit(item.id)}
                  className="p-2 text-[#047ab9]"
                >
                  <FaPenAlt />
                </button>
                {showEditModal && (
                  <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded max-w-md">
                      <button onClick={handleCloseEdit}>&times;</button>
                      <h2 className="text-lg font-semibold mb-4">Edit Post</h2>
                      <form
                        onSubmit={(e) => {
                          console.log("Submitting with ID:", item.id); // Add this line to check if ID is passed correctly
                          handleSubmitEdit(item.id, e);
                        }}
                        className="flex flex-col space-y-4"
                      >
                        <input
                          type="text"
                          name="title"
                          value={newEditData.title}
                          onChange={handleChangeEdit}
                          placeholder="Title"
                          required
                          className="border rounded px-3 py-2"
                        />
                        <textarea
                          name="content"
                          value={newEditData.content}
                          onChange={handleChangeEdit}
                          placeholder="Content"
                          required
                          className="border rounded px-3 py-2"
                        ></textarea>
                        <input
                          type="file"
                          name="bannerImage"
                          onChange={handleChangeEdit}
                          accept="image/*"
                          required
                          className="border rounded px-3 py-2"
                        />
                        <input
                          type="text"
                          name="slug"
                          value={newEditData.slug}
                          onChange={handleChangeEdit}
                          placeholder="Slug"
                          className="border rounded px-3 py-2"
                        />
                        <select
                          name="status"
                          value={newEditData.status}
                          onChange={handleChangeEdit}
                          className="border rounded px-3 py-2"
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                        <button
                          type="submit"
                          className="bg-[#fa6559] text-white py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-2 text-red-600"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-links flex justify-center m-5">
        {data.meta.links.slice(1, -1).map((link, index) => (
          <Link
            key={index + 1}
            onClick={() => handlePageChange(link.label)}
            className="border p-2"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* <div className="pagination-links">
        {data.meta.links.map((item, index) => (
          <Link key={index} to={item.url}>
            {index === 0
              ? "&laquo;"
              : index === data.length - 1
              ? "&raquo;"
              : item.label}
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default DashboardNews;
