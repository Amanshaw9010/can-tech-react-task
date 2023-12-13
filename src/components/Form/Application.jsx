import React from "react";
import StreetImage from "./assets/street.svg";
import "./assets/CSS/FormLayout.css";
import Typewriter from "typewriter-effect";

const Application = () => {
  return (
    <div className="max-sm:min-h-[530px] form-second-container z-[2] p-6 flex flex-col overflow-hidden  bg-[#f0f0f0] relative  w-2/5">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">
          <Typewriter
            options={{
              delay: 40,
              cursor: "",
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Application Form").pauseFor(0).start();
            }}
          />
        </h1>
      </div>
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-lg font-semibold">Application Closes</h2>
        <p className="text-base text-blue-500 font-medium">Tomorrow</p>
        <p className="text-slate-500 text-sm">
          Get free demo access by filling up this application form.
        </p>
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-lg font-semibold">Eligibility Criteria</h1>
        <p className="text-slate-500 text-sm">
          Bachelor's degree with a minimum of 50% aggregate marks or equivalent.
        </p>
      </div>

      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-lg font-semibold">Contact Us</h1>
        <p className="text-slate-500 text-sm">
          Contact Us at <span className="text-blue-400">080-6947-4555</span> or
          mail{" "}
        </p>
        <p className="text-blue-400 text-sm">pgpdsba@greatlearning.in</p>
        <p className="text-slate-500 text-sm">in case of any queries.</p>
      </div>
      <div className="absolute -bottom-10  -z-[1]">
        <img src={StreetImage} alt="" className="opacity-70" />
      </div>
    </div>
  );
};

export default Application;
