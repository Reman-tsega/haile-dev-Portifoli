"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  //   {
  //   id: 0,
  //   color: "from-blue-300 to-indigo-300",
  //   title: "Dashen Super App",
  //   sub: "Digital Banking & Lifestyle",
  //   desc: "A large-scale fintech platform developed for Dashen Bank, one of Ethiopia’s leading financial institutions. The app seamlessly integrates digital banking and lifestyle services into one ecosystem. It provides secure digital payments, e-commerce, chat banking, budgeting and analytics tools, as well as lottery and gaming features—offering customers a unified, user-friendly financial experience.",
  //   img: "/dashen-super-app.PNG",
  //   link: "https://www.dashensuperapp.com//", // official bank/app link
  // },
  {
    id: 1,
    color: "from-violet-300 to-purple-300",
    title: "Addis Pay",
    sub: "payment gateway",
    desc: "A versatile payment gateway that simplifies integration with banking systems and digital wallets. It supports smooth transactions, easy checkout processes, and robust payment management for businesses.",
    img: "/addispay.PNG",
    link: "https://addispay.et/",
  },
  {
    id: 0,
    color: "from-blue-300 to-indigo-300",
    title: "Dashen Super App",
    sub: "Digital Banking & Lifestyle",
    desc: "A large-scale fintech platform developed for Dashen Bank, one of Ethiopia’s leading financial institutions. The app seamlessly integrates digital banking and lifestyle services into one ecosystem. It provides secure digital payments, e-commerce, chat banking, budgeting and analytics tools, as well as lottery and gaming features—offering customers a unified, user-friendly financial experience.",
    img: "/dashen-super-app.PNG",
    link: "https://www.dashensuperapp.com//", // official bank/app link
  },
  {
    id: 2,
    color: "from-purple-300 to-red-300",
    title: "Addis Systems",
    sub: "landing page and ordering system",
    desc: "A visually appealing landing page designed to showcase software company services and products. It effectively promotes the company’s offerings and enhances online visibility.",
    img: "/addissystems.png",
    link: "https://www.addissystems.et/",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Blue Clerk",
    sub: "Housing Broker",
    desc: "BlueClerk is designed specifically for the new housing industry. Unlike most CRM’s which have a wide range features, BlueClerk has zeroed in on the housing industry’s specific needs.",
    img: "/blueclerk.png",
    link: "https://blueclerk.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Addis Bike Rental System",
    sub: "Bicycle rental system in Addis Ababa",
    desc: "A bicycle rental platform with an admin dashboard and mobile app for efficient bike, user, and transaction management.",
    img: "/addisbikedashboard.png",
    link: "https://admin.addisbike.org/",
  },

  {
    id: 7,
    color: "from-purple-300 to-red-300",
    title: "Aurora General PLC Management System",
    sub: "Company profile and management",
    desc: "A platform for managing company portfolios, products, job postings, applicants, and CRM with dynamic blog features.",
    img: "/Aurora.png",
    link: "https://www.auroraplc.com/",
  },

  {
    id: 9,
    color: "from-purple-300 to-red-300",
    title: "ChuChu Beauty School",
    sub: "School management system",
    desc: "A streamlined platform for student administration, course management, and financial tracking.",
    img: "/chuchu.png",
    link: "http://196.188.249.33:6053/",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Mak Beauty Salon",
    sub: "landing page",
    desc: "A visually appealing landing page designed to showcase beauty services and products. It effectively promotes the salon’s offerings and enhances online visibility.",
    img: "/mak_bauty_salon.PNG",
    link: "https://www.makbeautysalonandspa.com/",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Dir Link",
    sub: "shipping connector dashboard",
    desc: "A shipping connector providing a comprehensive dashboard for delivery companies. It enables efficient order administration and management of deliveries, streamlining logistics operations.",
    img: "/dirlink.PNG",
    link: "https://dirlink.addissystems.et/dashboard",
  },

  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Cafe Coffee",
    sub: "landing page",
    desc: "A visually appealing landing page designed to showcase coffee shop services and products. It effectively promotes the shop’s offerings and enhances online visibility.",
    img: "/coffee_web.PNG",
    link: "https://reman-tsega.github.io/cake_zone/",
  },
  {
    id: 10,
    color: "from-purple-300 to-red-300",
    title: "Noliga Engineering",
    sub: "business social media",
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
                    target="_blank"
                    passHref
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
                  <p className="w-80  lg:w-[900px] lg:text-lg xl:w-[900px]">
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
        <div className="relative flex items-center justify-center">
          {/* Rotating circle text */}
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

          {/* Hire Me button (always clickable) */}
          <Link
            href="/contact"
            className="z-50 w-24 h-24 md:w-32 md:h-32 absolute 
                 bg-black text-white text-lg md:text-xl 
                 rounded-full flex items-center justify-center 
                 shadow-lg hover:scale-110 hover:bg-gray-800 
                 transition-transform duration-300 ease-in-out"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
