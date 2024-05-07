import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GoArrowLeft } from 'react-icons/go';
import { FiAlignJustify } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';
import styles from '../style';
import { navLinks } from '../constants/constant.jsx';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="md:w-[30%] w-[50%] hidden md:flex flex-col p-3 border-r-2">
        <div className="flex items-center p-4">
          <GoArrowLeft size={26} />
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5 ml-2">
          {navLinks.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>

      <div className="flex md:hidden">
        {showSidebar ? (
          <div className="w-screen flex flex-col p-3 border-r-2">
            <div className="flex items-center p-4">
              <GoArrowLeft size={26} onClick={toggleSidebar} />
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5 ml-2">
              {navLinks.map((item) => (
                <SidebarLink key={item.key} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex p-4">
            <FiAlignJustify size={26} onClick={toggleSidebar} />
          </div>
        )}
      </div>
    </>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={`${pathname === item.path ? 'bg-gray-100' : ''} ${
        styles.linkClasses
      } `}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
      <IoIosArrowForward className="ml-auto mr-2" />
    </Link>
  );
}

export default Sidebar;
