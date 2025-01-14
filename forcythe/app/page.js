"use client";

import { Container } from "@/components/reuseables/Container";
import Paragraph, { Heading } from "@/components/typography";
import { PartnerImages, product, solutions } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Blog from "./Blog";
import { Spotlight } from "@/constants";
import { useState } from "react";
import { Button } from "@/components/reuseables/Button";
import { MdPlayArrow } from "react-icons/md";
import Partners from "./Partners";
import Marquee from "react-fast-marquee";
import Hero from "./Hero";

export default function Home() {
  const [process, setProcess] = useState(0);

  const handleClick = (index) => {
    setProcess(index);
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <Container className="mx-auto text-center my-10">
        <Heading className="z-10">
          Success in <span className="text-blue-500">Motion</span> - Our
          clients' journey
        </Heading>
      </Container>
      <div className="mt-10">
        <Marquee
          speed={100}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={1000}
          loop={0}
        >
          {PartnerImages.map((i, index) => (
            <div
              key={index}
              className="max-w-sm lg:max-w-lg px-10 h-full relative flex items-center"
            >
              <Image
                src={i}
                alt={`partnerImage${index}`}
                className="object-contain "
              />
              <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mt-10">
        <Marquee
          speed={80}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={1000}
        >
          {PartnerImages.map((i, index) => (
            <div
              key={index}
              className="max-w-sm lg:max-w-lg px-10 h-full relative flex items-center"
            >
              <Image
                src={i}
                alt={`partnerImage${index}`}
                className=" object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            </div>
          ))}
        </Marquee>
      </div>
      <Partners />
      <Container className="my-24">
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center">
          <div className="w-full lg:w-3/5 flex flex-col gap-10">
            <Heading className="text-3xl">
              From <span className="text-blue-500">Spark</span> to{" "}
              <span className="text-blue-500">Spotlight: </span>
              we take you every step of the way to success.
            </Heading>

            <div className="w-full lg:w-[80%] flex flex-col gap-10 ">
              <div className="py-3  border-2 border-blue-100 rounded-full flex justify-evenly ">
                {Spotlight.map(({ button }, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleClick(index)}
                      className={`${
                        process === index
                          ? "bg-blue-100 text-black rounded-full"
                          : "bg-transparent text-blue-100"
                      } lg:text-xl font-bold lg:mx-5 py-3 px-4 rounded-full`}
                    >
                      {button}
                    </button>
                  </div>
                ))}
              </div>
              <Heading>{Spotlight[process]?.title}</Heading>
              <Paragraph
                text={Spotlight[process]?.content}
                otherStyles="md:text-[24px] font-medium text-[#AEA9B1]"
              />
              <div>
                <Button className="flex items-center rounded-full space-x-2">
                  Book a Call{" "}
                  <div className="text-xl">
                    <MdPlayArrow />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src={Spotlight[process]?.img}
              alt="spotlight illustration"
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      <Container className="my-24  ">
        <div className="py-10">
          <Heading className="text-blue-200 text-center">
            Your best call for B2B/B2C product innovation
          </Heading>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10  justify-between mt-10">
          {product.map(({ title, content, link, icon }, index) => (
            <div key={index}>
              <BusinessCard
                title={title}
                content={content}
                link={link}
                icon={icon}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center  lg:w-2/3 text-center mx-auto lg:p-16 lg:border-t my-24 rounded-t-full">
          <div className="lg:py-16"></div>
          <div className="w-full lg:w-3/5  my-10">
            <Heading className="text-xl md:text-2xl">
              We build solutions that help{" "}
              <span className="text-blue-500">businesses</span> of all sizes to{" "}
              <span className="text-blue-500">scale</span>{" "}
            </Heading>
          </div>

          <div className="flex gap-10 my-10">
            {solutions.map(({ value, solution }, index) => (
              <div key={index}>
                <Heading className="text-blue-400 md:text-5xl text-start">
                  {value}
                </Heading>
                <Paragraph text={solution} otherStyles="text-start text-base" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Blog />
    </div>
  );
}

const BusinessCard = ({ icon, title, content, link }) => {
  return (
    <Link href={link}>
      <div className=" bg-black shadow-2xl drop-shadow-2xl rounded-2xl flex flex-col gap-4 p-10 hover:border hover:border-blue-800">
        <div className="bg-[#60A6E7] p-2 w-10 rounded-xl ">
          <p className="text-2xl font-bold text-white">{icon}</p>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-[#AEA9B1]">{content}</p>
      </div>
    </Link>
  );
};
