import React from "react";
import { FaDiscord, FaFacebookF, FaSlack, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#fa6559] text-white ">
      <div className="mx-auto container">
        <div className="grid grid-cols-4  text-center py-5">
          <div>
            <h2 className="text-xl font-semibold mb-2">Update</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla
              eligendi nostrum! Impedit eaque quaerat enim. Animi fuga a
              aliquam.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Quick Link</h2>
            <ul>
              <li>Home</li>
              <li>BLogs</li>

              <li>Abouut Us</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <ul>
              <li>News</li>
              <li>Events</li>

              <li>Notice</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              Visit us at: <br />
              Kathmandu ,Nepal
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-5">
          <div>@2024, All right reserved</div>
          <div className="flex gap-10">
            <FaFacebookF />
            <FaDiscord />
            <FaSlack />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
