import React from "react";
import logo from "/Images/Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-6 p-10 md:p-16 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <div className="flex flex-col items-center">
            <img src={logo} alt="Joobs logo" className="mb-4 h-10" />
            <p className="text-sm md:text-base">
              Joobs is the largest talent platform in Southeast Asia and Taiwan for career development and recruitment.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Employer</h2>
            <ul className=" text-sm md:text-base">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Blog</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Find Vacancy Based On</h2>
            <ul className="text-sm md:text-base">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Address</h2>
            <ul className="text-sm md:text-base">
              <li>hello@jobbb.com</li>
              <li>JL. Setiabudhi No. 193 Sukasari, Bandung
              West Java, Indonesia</li>
            </ul>
          </div>
        </div>
        <p className="text-sm md:text-base">Copyright © 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
