import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap items-center justify-center">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between items-center">

              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;