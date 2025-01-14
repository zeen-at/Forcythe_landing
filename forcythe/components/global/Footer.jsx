"use client";

import React from "react";
import { Button } from "../reuseables/Button";
import { Container } from "../reuseables/Container";
import Link from "next/link";
import { companyDetails, SocialLinks } from "@/constants";

const Footer = () => {
  return (
    <Container className="py-10  ">
      <div className="flex flex-col  md:flex-row gap-10 items-start  py-10">
        <div className="flex flex-col gap-3  ">
          <div className="w-full rounded-full border border-white flex justify-between mb-8">
            <input
              placeholder="Your Email Address"
              value=""
              onChange={(e) => e.target.value}
              className="w-full bg-transparent px-4 text-[16px] border-none outline-none"
            />
            <Button className=" rounded-r-full">Subscribe</Button>
          </div>
          <div className="space-x-3">
            <input type="radio" value="agree" id="agree" />
            <label htmlFor="agree">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </div>

        <div className="flex flex-col flex-wrap gap-3 max-w-md">
          <h1 className="font-bold text-2xl mb-8">Forcythe</h1>
          <div className="text-[#AEA9B1] text-base">
            <p>We are the growth company for businesses looking to scale.</p>
            <p>
              We are dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
          </div>
          <div className="flex gap-2 mt-10">
            {SocialLinks.map(({ link, icon, title }) => (
              <div key={title}>
                <SocialIcons link={link} icon={icon} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-8">Company</h1>
          <div className="flex flex-col gap-2">
            {companyDetails.map(({ title, link }, index) => (
              <ul key={index}>
                <li className="text-base text-blue-300">
                  <Link href={link}>{title}</Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className=" border-b border-blue-400 my-3"></div>
      <div className="my-4">
        <p className="text-blue-200 text-[14px]">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;

const SocialIcons = ({ link, icon }) => {
  return (
    <div className=" p-2 rounded-full text-xl text-blue-500 border border-blue-500 cursor-pointer ">
      <Link href={link}>{icon}</Link>
    </div>
  );
};
