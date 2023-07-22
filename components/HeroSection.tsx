import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <header className="py-20 lg:min-h-screen">
      <div className="container max-w-6xl mx-auto flex lg:justify-between justify-center items-center   gap-5 p-8 lg:items-start">
        <div className="flex flex-col lg:items-start  lg:text-left gap-5 text-textColor">
          <h1 className="lg:text-6xl font-bold text-3xl">
            Welcome to <span className="text-primary">Section20 Consult</span>{" "}
            &mdash; Your Path to Success!
          </h1>
          <p className="font-medium text-[#7d7c83] lg:text-xl">
            We are a leading study and work consulting firm dedicated to
            empowering students and professionals in achieving their academic
            and career goals. With our expert guidance and personalized
            approach, we strive to unlock your full potential and pave the way
            for a successful future.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            <Link
              className="px-4 py-2 font-semibold tracking-wide border-none rounded-md border-textColor hover:shadow-2xl hover:translate-y-[-2px] duration-200 transition-all bg-primary text-background text-center"
              href="#contact"
            >
              Contact us
            </Link>
            <Link
              className="px-4 py-2 tracking-wide border-secondary border-2 rounded-md  text-primary  hover:shadow-2xl hover:translate-y-[-2px]  duration-200 transition-all outline-none  font-semibold text-center"
              href="/services"
            >
              Our services
            </Link>
          </div>
        </div>

        <Image
          src="/images/header.jpg"
          width={650}
          height={700}
          alt="header img"
          priority
          className="self-end hidden lg:block  rounded-md"
        />
      </div>
    </header>
  );
};

export default HeroSection;
