import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import nav_logo from "../assets/nav_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <>
      <header className="border-b">
        {menuStatus && (
          <nav className="">
            <div className=" md:hidden absolute bg-white w-full opacity-95 text-lg h-screen py-5 px-8 ">
              <div className="left-0" onClick={toggleMenu}>
                <CloseIcon />
              </div>
              <ul className="flex flex-col py-36 space-y-4  items-center">
                <li>
                  <Link
                    to="home"
                    className="hover:text-green-950"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    className="hover:text-green-950"
                    onClick={toggleMenu}
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <button className="border px-4 py-1 rounded-full space-x-2 flex items-center">
                    <LocalMallIcon /> <span>Cart</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        )}
        <div
          className="flex justify-between px-8  py-2
         items-center"
        >
          <nav>
            <button className="md:hidden" onClick={toggleMenu}>
              <MenuIcon />
            </button>
            <ul className=" hidden md:flex space-x-8 px-12    items-center">
              <li>
                <Link to="home" className="hover:text-green-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="products" className="hover:text-green-800">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
          <Link to={"home"}>
            <img
              src={nav_logo}
              alt="header_nav"
              className="w-40 md:w-44 lg:w-52"
            />
          </Link>
          <div className="md:hidden">
            <button>
              <PersonIcon />
            </button>
          </div>
          <div className="hidden md:flex md:pl-16 lg:pl-24">
            <ul className="flex space-x-8">
              <li>
                <Link>
                  <FavoriteIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <LocalMallIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <PersonIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
