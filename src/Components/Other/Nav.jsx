import { headerLogo } from "../../assets/images";
import { hamburger, x } from "../../assets/icons";
import { navLinks } from "../../constants";
import { useState } from "react";

const Nav = () => {
  let [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      {/* <nav className="md:flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hambuger-menu" width={24} height={25} />
        </div>
      </nav> */}

      <nav className="md:flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        <div
          className="md:hidden absolute right-8 top-8"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img src={x} alt="hambuger-menu" width={30} height={30} />
          ) : (
            <img src={hamburger} alt="hambuger-menu" width={24} height={25} />
          )}
        </div>

        <ul
          className={` md:flex md:items-center md:mr-10 gap-8 md:pb-0 pb-12  max-md:bg-slate-950 max-md:absolute left-0 max-md:w-full max-md:pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className=" md:my-0 my-7">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray max-md:text-white-400 
                hover:text-gray-400 duration-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
