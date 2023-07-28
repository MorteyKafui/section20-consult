import EhacServices from "@/components/EhacServices";
import GetInTouch from "@/components/GetInTouch";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import Link from "next/link";

const EhacPage = () => {
  return (
    <>
      <ScrollRevealSection>
        <div className="max-w-6xl p-4 container mx-auto flex mt-10 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-6xl font-bold text-3xl">
              Welcome to <span className="text-primary">EAHAC </span> (Education
              Abroad Health Awareness Club)
            </h1>
            <p className="font-medium text-dark lg:text-md">
              Are you a student or an aspiring traveler looking to explore the
              world through educational opportunities abroad? At EAHAC, we
              understand that embarking on an international journey can be an
              exhilarating experience, but it also comes with its unique
              challenges and health considerations.
            </p>
            <Link
              className="py-3 px-10 bg-gradient-to-tr from-primary to-accent self-start rounded-xl text-background font-bold text-xl tracking-wide shadow-xl hover:opacity-90 hover:translate-y-[-2px] duration-200"
              href="#contact"
            >
              Get Started Today
            </Link>
          </div>
          <Image
            src="/images/ehac-logo.jpg"
            width={500}
            height={300}
            alt="ehac logo"
            className="rounded-xl shadow-xl hidden lg:block"
          />
        </div>
      </ScrollRevealSection>
      <WhoWeAre />
      <EhacServices />
      <GetInTouch />
    </>
  );
};

export default EhacPage;
