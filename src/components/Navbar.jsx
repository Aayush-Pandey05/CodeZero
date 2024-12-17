"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Events", href: "#" },
  { name: "Community", href: "#" },
  { name: "Acievements", href: "#" },
  { name: "Discussion", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-black">
        <nav className="flex items-center justify-between p-5 lg:px-8">
          <div className="flex">
            <Link to="#" className="-m-1.5 p-1.5">
              <img alt="CodeZero" src="/utils/logo.jpg" className="h-14 w-auto" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center lg:ml-auto">
            <Link to="#" className="text-sm font-semibold text-white hover:text-black hover:bg-white py-1 px-2 rounded">Events</Link>
            <Link to="#" className="text-sm font-semibold text-white hover:text-black hover:bg-white py-1 px-2 rounded">Community</Link>
            <Link to="#" className="text-sm font-semibold text-white hover:text-black hover:bg-white py-1 px-2 rounded">Achievements</Link>
            <Link to="#" className="text-sm font-semibold text-white hover:text-black hover:bg-white py-1 px-2 rounded">Discussion</Link>
            <Link to="#">
              <button className="rounded bg-gray-100 py-1 px-4 ml-4">
                <span className="text-sm font-semibold text-gray-800">Sign up</span>
              </button>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <img alt="CodeZero" src="/utils/logo.jpg" className="h-14 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white hover:text-black"
                      onClick={() => setMobileMenuOpen(false)} // Close the menu after clicking a link
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white hover:text-black"
                    onClick={() => setMobileMenuOpen(false)} // Close the menu after clicking the Sign up link
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
