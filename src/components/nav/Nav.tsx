import logo from "../../assets/logo-text.png";
import burger from "../../assets/hamburger.png";

const Nav = () => {
  const textColor = {
    color: `#475569`,
    fontWeight: `600`,
  };
  return (
    <>
      <nav className=" border-b-2 border-[#F1F5F9]">
        <div className="navbar relative max-w-[97%] md:max-w-[85%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-2.5 lg:hidden"
              >
                <img src={burger} alt="Menu" />
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
              >
                <li>
                  <a className="text-[#DB2777] font-semibold">Home</a>
                </li>
                <li>
                  <a style={textColor}>Technologies</a>
                </li>
                <li>
                  <a style={textColor}>Projects</a>
                </li>
                <li>
                  <a style={textColor}>About</a>
                </li>
                <li>
                  <a style={textColor}>Contact</a>
                </li>
              </ul>
            </div>
            <img src={logo} alt="Logo" className="hidden sm:block" />
            <img
              src={logo}
              alt="Logo"
              className="absolute left-1/3 h-8 w-24 sm:hidden"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-[#DB2777] font-semibold">Home</a>
              </li>
              <li>
                <a style={textColor}>Technologies</a>
              </li>
              <li>
                <a style={textColor}>Projects</a>
              </li>
              <li>
                <a style={textColor}>About</a>
              </li>
              <li>
                <a style={textColor}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn btn-ghost rounded-4xl h-8 min-h-8 px-2 sm:h-10 sm:min-h-10 sm:px-4"
              style={textColor}
            >
              Sign In
            </a>
            <a className="btn h-8 rounded-4xl bg-[#D91B7E] px-2 font-semibold text-white sm:h-10 sm:min-h-10 sm:px-4">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
