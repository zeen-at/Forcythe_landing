import React from "react";
import { Container } from "@/components/reuseables/Container";
import { Heading } from "@/components/typography";
import { PartnerCompanies } from "@/constants";
import { useState } from "react";
import Image from "next/image";

const Partners = () => {
  const [active, setActive] = useState(0);
  return (
    <Container className="my-10">
      <div className="my-24 mx-auto text-center items-center w-full md:w-3/5 justify-center">
        <Heading>
          Discover the{" "}
          <span className="text-blue-500">transformative stories</span> of
          startups that scaled new heights with us
        </Heading>
      </div>
      <div className="my-6 border borber-blue-700 rounded-full flex ">
        {PartnerCompanies.map((i, index) => (
          <div
            key={index}
            className={`${
              active === index ? "bg-[#071626] " : "bg-transparent "
            } first:rounded-s-full last:rounded-e-full relative py-4 text-center w-full h-full font-bold md:text-2xl overflow-x-scroll inset-0 z-0`}
          >
            <button onClick={() => setActive(index)} className="z-10 ">
              {i.company}
            </button>
          </div>
        ))}
      </div>
      <div className={`${active === "" ? "" : ""} my-6`}>
        {PartnerCompanies[active] && (
          <PartnerCard
            position={PartnerCompanies[active]?.position}
            review={PartnerCompanies[active]?.review}
            reviewer={PartnerCompanies[active]?.reviewer}
            img={PartnerCompanies[active]?.img}
          />
        )}
      </div>
    </Container>
  );
};

export default Partners;

const PartnerCard = ({ position, review, reviewer, img }) => {
  return (
    <div className="rounded-2xl bg-[#071626] md:w-1/2 text-white flex flex-col lg:flex-row items-center gap-4 p-8">
      <div className="space-y-6 ">
        <h4 className="md:text-xl font-bold">{position}</h4>
        <p className="text-base md:text-md font-medium leading-relaxed">
          {review}
        </p>
        <h4 className="md:text-xl font-bold">{reviewer}</h4>
      </div>
      <div className="rounded-xl ">
        <Image
          src={img}
          alt={reviewer}
          className="object-contain rounded-xl "
        />
      </div>
    </div>
  );
};
