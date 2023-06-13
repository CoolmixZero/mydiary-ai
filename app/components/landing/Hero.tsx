"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Button from "./button";

const Hero = () => {
  const registerModal = useRegisterModal();
  return (
    <div className="bottom-100 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Simplify your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {" "}
              workflow
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Cutting-edge todo maestro designed to be set up once, delivering
              exquisite results forever.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <Button
                label="Start free trial"
                onClick={registerModal.onOpen}
                outline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
