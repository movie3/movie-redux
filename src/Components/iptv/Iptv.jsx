import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

import { names } from "./ch";
import bg from "../img/bg-c.jpg";
import { BsCollectionFill } from "react-icons/bs";
import { Title } from "@mantine/core";
import PageHeader from "../page-header/PageHeader";
const Iptv = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  },[])

  return (
    <>
      <PageHeader>IPTV</PageHeader>
      <div className="my-16">
        <Title title="TV Movies" Icon={BsCollectionFill} />
        <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {names.map((name, i) => (
            <div key={i} className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
              <a href={name.url} className="w-full">
                <img src={name.img} className="w-full h-64 object-cover" />
              </a>
              <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
                <h3 className="font-semibold truncate">{name.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Iptv;
