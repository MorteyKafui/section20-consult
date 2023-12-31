/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import ScrollRevealSection from "./ScrollRevealSection";

const FootballTrials = () => {
  return (
    <ScrollRevealSection>
      <div className="max-w-6xl container mx-auto p-4 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between lg:gap-10">
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="text-lg text-primary font-semibold uppercase tracking-wide flex items-center gap-4">
              <span className="font-bold text-3xl bg-[#d2d2cf] p-4 rounded-full text-center">
                04
              </span>
              <span>Football Trial Programs</span>
            </h3>
            <p className="text-dark">
              Unleash your true potential and find the career path that aligns
              with your passions and strengths. Our career counseling services
              provide personalized assessments and in-depth consultations to
              help you discover your unique talents and interests. Armed with
              this understanding, our experienced counselors will assist you in
              identifying suitable career options, setting achievable goals, and
              devising actionable plans for long-term success.
            </p>
          </div>
          <div>
            <Image
              src="/images/fb.jpg"
              width={600}
              height={600}
              alt="school logo"
              className="rounded-xl shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
};

export default FootballTrials;
