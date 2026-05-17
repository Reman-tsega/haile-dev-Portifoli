"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    desc: "A large-scale fintech platform developed for Dashen Bank, one of Ethiopia’s leading financial institutions. The app seamlessly integrates digital banking and lifestyle services into one ecosystem. It provides secure digital payments, e-commerce, chat banking, budgeting and analytics tools, as well as lottery and gaming features-offering customers a unified, user-friendly financial experience.",
    img: "/dashen_super_app.PNG",
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
  const [activeItem, setActiveItem] = useState(null);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-slate-900"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-violet-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl lg:text-6xl text-slate-900">
            Selected projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 md:text-base">
            A clean, responsive showcase of recent work with polished card
            layouts.
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.id}-${item.title}`}
              className="flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/30"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain transition duration-500 ease-in-out hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-violet-500">
                    {item.sub}
                  </p>
                </div>

                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  {item.desc}
                </p>

                <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700">
                    Preview Mode
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-violet-500"
                  >
                    Open Preview
                  </button>
                  {/*
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-violet-400"
                  >
                    View Project
                  </Link>
                  */}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/95 p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4 p-6 md:p-8 lg:flex-row lg:gap-8">
              <div className="relative h-80 w-full overflow-hidden bg-gray-100 lg:h-[28rem] lg:w-1/2">
                <Image
                  src={activeItem.img}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 text-slate-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-violet-300">
                      Project Preview
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                      {activeItem.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">
                      {activeItem.sub}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveItem(null)}
                    className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-900 transition duration-300 hover:bg-slate-200"
                  >
                    Close
                  </button>
                </div>

                <p className="text-sm leading-7 text-slate-700 md:text-base">
                  {activeItem.desc}
                </p>

                {/*
                <Link
                  href={activeItem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-violet-400"
                >
                  Open Live Site
                </Link>
                */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-white/10 bg-slate-950/95 px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Do you have a project?
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            I build responsive and polished web solutions that are easy to use,
            fast, and visually compelling. Let&apos;s bring your idea to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-slate-200"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
