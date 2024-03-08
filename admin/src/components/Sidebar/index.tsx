import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { BsCart4 } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { FaBorderAll } from "react-icons/fa";
import { TbLayoutDashboard, TbReportSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const sidebarLinks = [
  { path: "/", label: "Dashboard", icon: TbLayoutDashboard },
  { path: "/product", label: "Product", icon: BsCart4 },
  { path: "/userAccount", label: "User Account", icon: LuUsers2 },
  { path: "/order", label: "Order", icon: FaBorderAll },
  { path: "/reports", label: "Reports", icon: TbReportSearch },
  { path: "/profile", label: "Profile", icon: CgProfile },
  { path: "/settings", label: "Settings", icon: IoSettingsOutline },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  useEffect(() => {
    document.querySelector("body")?.classList.toggle(
      "sidebar-expanded",
      sidebarOpen
    );
  }, [sidebarOpen]);

  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-0 px-4  lg:mt-9 lg:px-6">
          <div>
            {/* Wrap the Image component inside a div with padding */}
            <div className="pb-6 mb-2">
              <Image
                src="/images/logo/setec.png"
                alt="Logo"
                width={176}
                height={32}
                priority
              />
            </div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>
            <ul className="mb-64 flex flex-col gap-1.5">
              {sidebarLinks.slice(0, -2).map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      pathname === path && path !== "/" ? "bg-graydark dark:bg-meta-4" : ""
                    }`}
                  >
                    <Icon />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-1.5 ">
            {sidebarLinks.slice(-2).map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === path ? "bg-graydark dark:bg-meta-4" : ""
                }`}
              >
                <Icon />
                {label}
              </Link>
            ))}
          </div>
        </nav>
        <p className="mt-14 p-3"> Version 1.0.0 || <span>COPYRIGHT-SS20</span></p>
      </div>
    </aside>
  );
};

export default Sidebar;
