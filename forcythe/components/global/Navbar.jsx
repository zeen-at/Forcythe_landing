"use client";

import { navLinks } from "@/constants";
import React, { useState } from "react";
import { Button } from "../reuseables/Button";
import { Container } from "../reuseables/Container";
import { Heading } from "../typography";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="my-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-24 items-center">
          <div>
            <Heading className="">Forcythe</Heading>
          </div>
          <div className="hidden lg:flex gap-6 font-medium text-md ">
            {navLinks.map(({ title, link }, index) => (
              <div key={index}>
                <Link href={link}>{title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <Button className="rounded-full">Book a call</Button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <svg
              className={`h-6 w-6 transform transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden ">
          {navLinks.map(({ title, link }, index) => (
            <div key={index} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href={link}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Navbar;
