import React from "react";
import { Container } from "@/components/reuseables/Container";
import { Heading } from "@/components/typography";
import { Button } from "@/components/reuseables/Button";
import { MdPlayArrow } from "react-icons/md";
import Image from "next/image";
import { CompanyBlog } from "@/constants";
import Link from "next/link";

const Blog = () => {
  return (
    <Container>
      <div className="flex justify-between items-center">
        <Heading>Read our articles, news and product blog</Heading>
        <Button className="flex items-center rounded-full space-x-2">
          Visit Blog{" "}
          <div className="text-xl">
            <MdPlayArrow />
          </div>
        </Button>
      </div>
      <div className="w-full justify-between flex flex-wrap flex-col md:flex-row ">
        {CompanyBlog.map(({ blog, link, img }, index) => (
          <div key={index}>
            <Card link={link} img={img} blog={blog} />
          </div>
        ))}
      </div>

      <div className="my-24 mx-auto text-center items-center w-full md:w-1/2 justify-center">
        <Heading className="text-blue-500">Ready to Scale?</Heading>
        <Heading>
          Join Successful brands that choose us as their{" "}
          <span className="text-blue-500">growth accelerator</span>
        </Heading>
        <div className="my-6">
          <Button className="rounded-full ">Book a Call</Button>
        </div>
      </div>
    </Container>
  );
};

export default Blog;

const Card = ({ img, blog, link }) => {
  return (
    <Link href={link} className="">
      <div className="w-full hover:border-b rounded-2xl hover:border-blue-500 py-10">
        <div className="rounded-2xl">
          <Image
            src={img}
            alt={blog}
            className="rounded-2xl w-full md:w-[372px] h-[224px] object-cover"
          />
        </div>
        <div className="border-l px-3 mt-8 space-y-3">
          <h3 className="text-lg font-bold">Blog</h3>
          <div className="text-base text-[#AEA9B1] flex space-x-2 items-center">
            <p>The Reformist </p>
            <div className="bg-white rounded-full w-2 h-2"></div>
            <p className="list-disc">May 29th, 2024</p>
          </div>
          <div className="text-2xl font-bold ">{blog}</div>
        </div>
      </div>
    </Link>
  );
};
