import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [successToken, setSuccessToken] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerMutation = useMutation({
    mutationFn: (data) =>
      axios.post(`http://localhost:8000/api/register`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess: (data) => {
      setSuccessToken(data.token);
      toast.success("Registration successful!"); // Show success toast
    },
    onError: (error) => {
      console.error("Registration error:", error.message);
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        const errorData = error.response.data;
        if (errorData && errorData.errors) {
          // Display validation errors to the user
          console.error("Validation errors:", errorData.errors);
        }
      } else {
        // Handle other types of errors
        console.error("An unexpected error occurred. Please try again later.");
      }
    },
  });

  const onSubmit = (formData) => {
    registerMutation.mutate(formData);
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto mt-8 flex flex-col justify-center my-20"
      >
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role:</label>
          <select
            {...register("role")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#fa6559] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
