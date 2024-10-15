"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-violet-300 to-purple-300",
    title: "Addis Pay",
    sub:"payment gateway",
    desc: "A versatile payment gateway that simplifies integration with banking systems and digital wallets. It supports smooth transactions, easy checkout processes, and robust payment management for businesses.",
    img: "/addispay.PNG",
    link: "https://addispay.et/",
  },
  {
    id: 2,
    color: "from-purple-300 to-red-300",
    title: "Addis Systems",
    sub:"landing page and ordering system",
    desc: "A visually appealing landing page designed to showcase software company services and products. It effectively promotes the company’s offerings and enhances online visibility.",
    img: "/public.PNG",
    link: "https://www.addissystems.et/"
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Bizify Spot",
    sub:"business social media",
    desc: "A comprehensive business social media platform designed for businesses. It facilitates business integration, advertising, messaging, and product sales, enabling enhanced engagement and networking.",
    img: "/bizifyspot.PNG",
    link: "https://devbizfy.bizfyspot.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Dir Link",
    sub:"shipping connector dashboard",
    desc: "A shipping connector providing a comprehensive dashboard for delivery companies. It enables efficient order administration and management of deliveries, streamlining logistics operations.",
    img: "/dirlink.PNG",
    link: "https://dirlink.addissystems.et/dashboard",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Mak Beauty Salon",
    sub:"landing page",
    desc: "A visually appealing landing page designed to showcase beauty services and products. It effectively promotes the salon’s offerings and enhances online visibility.",
    img: "/mak_bauty_salon.PNG",
    link: "https://www.makbeautysalonandspa.com/",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Dingo Restaurant",
    sub:"landing page",
    desc: "A visually appealing landing page designed to showcase restaurant services and products. It effectively promotes the restaurant’s offerings and enhances online visibility.",
    img: "/restorant.PNG",
    link: "https://reman-tsega.github.io/dingo-restaurant/",
  },
  {
    id: 7,
    color: "from-purple-300 to-red-300",
    title: "Cafe Coffee",
    sub:"landing page",
    desc: "A visually appealing landing page designed to showcase coffee shop services and products. It effectively promotes the shop’s offerings and enhances online visibility.",
    img: "/coffee_web.PNG",
    link: "https://reman-tsega.github.io/cake_zone/",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Addis Systems",
    sub:"landing page and ordering system",
    desc: "A visually appealing landing page designed to showcase software company services and products. It effectively promotes the company’s offerings and enhances online visibility.",
    img: "/public.PNG",
    link: "https://www.addissystems.et/",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",
    title: "Noliga Engineering",
    sub:"business social media",
    desc: "A visually appealing landing page designed to showcase engineering services and products. It effectively promotes the company’s offerings and enhances online visibility.",
    img: "/noliga.PNG",
    link: "https://reman-tsega.github.io/noligaengineering/index.html",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-2 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-2 py-2 text-white">
                  <Link href={item.link} target="_blank" passHref>
                    <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl">
                      {item.title}
                    </h1>
                  </Link>
                  <h6>{item.sub}</h6>
                  <Link
                    href={item.link}
                    target="_blank" passHref
                    className="relative block group"
                  >
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] 2xl:w-[1000px] 2xl:h-[500px]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-50 transform group-hover:scale-105 transition-opacity duration-900 ease-in-out flex items-center justify-center">
                      <span className="text-white">See Demo</span>
                    </div>
                  </Link>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  {/* <Link href={item.link} target="_blank" passHref>
                      <button className="p-2 text-sm md:p-2 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold mx-4 py-2 rounded transition-transform duration-300 ease-in-out hover:scale-105">
                        See Demo
                      </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-7xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Developer and Team Leader
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
