import React from "react";
import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t-2 border-[#E2E8F0]">
      <div className="w-[85%] mx-auto">
        <div className="footer sm:footer-horizontal text-base-content">
          <aside className="flex flex-col text-center items-center md:flex md:flex-col md:text-start md:items-start">
            <img src={logo} alt="Logo" />
            <p className="my-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="flex gap-4">
              <li>
                <a className="text-[#475569] font-bold" href="">GitHub</a>
              </li>
              <li>
                <a className="text-[#475569] font-bold" href="">Twitter</a>
              </li>
              <li>
                <a className="text-[#475569] font-bold" href="">LinkedIn</a>
              </li>
            </ul>
          </aside>
          <nav>
            <h6 className="footer-title">PRODUCT</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Technologies</a>
            <a className="link link-hover">Projects</a>
          </nav>
          <nav>
            <h6 className="footer-title">COMPANY</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <h6 className="footer-title">LEGAL</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
          </nav>
        </div>
        <div className="footer sm:footer-horizontal mt-8 text-base-content items-center">
          <aside className="grid-flow-col items-center">
            <p>© 2026 Dev Stack. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
