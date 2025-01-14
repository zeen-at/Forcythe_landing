import { Button } from "@/components/reuseables/Button";
import Paragraph from "@/components/typography";
import Image from "next/image";
import React from "react";
import Map from "../public/map.png";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" md:max-h-[70vh]">
      <div className="relative ">
        <Image
          src={Map}
          alt="map_img"
          className="object-cover w-full h-[80vh] md:h-[70vh] "
        />

        <div className="absolute bg-white inset-0 bg-opacity-10 top-14 md:bottom-14 z-10 rounded-3xl p-4 md:p-10 flex my-10 mx-10 md:mx-24">
          <div className="w-full lg:w-3/4 flex flex-col gap-6 ">
            <motion.h1 className="text-xl md:text-3xl lg:text-7xl font-bold">
              We build <span className="text-blue-500">products</span> that
              shape a better future
            </motion.h1>
            <Paragraph
              otherStyles="text-[#AEA9B1] text-base md:text-lg font-medium w-2/3"
              text={
                "We are the architects of digital excellence accross industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation"
              }
            />
            <div>
              <Button className="flex items-center rounded-full space-x-2 relative">
                Book a Call{" "}
                <span className="text-xl">
                  <MdPlayArrow />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-black "></div>
    </div>
  );
};

export default Hero;
