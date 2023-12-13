import React from "react";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CampaignIcon from '@mui/icons-material/Campaign';
import TimelineIcon from '@mui/icons-material/Timeline';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

const Services = () => {
  return (
    <div className="font-display w-5/6 mx-auto flex flex-col justify-center text-center items-center pt-6 md:pt-20 lg:pt-20">
      <div>
        <h1 className=" font-bold md:text-3xl lg:text-5xl text-gray-800">
          How we can help you?
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-16 lg:gap-16 mt-8 md:mt-20 lg:mt-20">
        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-violet-400 duration-500">
          <div className=" bg-violet-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img className=' w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16' src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/editing.png" alt="" /> */}
            <ArchitectureIcon style={{ color: "#cca3ff", fontSize: "4rem"}} />
          </div>
          <h1 className=" text-violet-400 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500 ">
            ERP Services
          </h1>
          <p className=" text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            Universal ERP solutions that empower you and your business to
            acclimatize instantly and beneficially.
          </p>
        </div>
        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-green-400 duration-500">
        <div className=" bg-green-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img
              className="w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
              src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/coding-1-1.png"
              alt=""
            /> */}
            <DeveloperModeIcon style={{ color: "#32CD32", fontSize: "3rem"}}/>
          </div>
          <h1 className="text-green-400 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500">
            Development
          </h1>
          <p className="text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            Software development is the process of conceiving, specifying,
            designing, programming, documenting, testing, and bug fixing
            involved in creating and maintaining applications, frameworks, or
            other software components.
          </p>
        </div>

        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-cyan-400 duration-500">
          <div className=" bg-cyan-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img
              className=" w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
              src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/marketing-1.png"
              alt=""
            /> */}
            <CampaignIcon style={{ color: "#00CED1", fontSize: "4rem"}}/>
          </div>
          <h1 className="text-cyan-400 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500">
            Marketing
          </h1>
          <p className="text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            Digital marketing is the component of marketing that utilizes
            internet and online based digital technologies such as desktop
            computers, mobile phones and other digital media and platforms to
            promote products and services.
          </p>
        </div>
        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-orange-400 duration-500">
          <div className=" bg-orange-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img
              className=" w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
              src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/share.png"
              alt=""
            /> */}
            <TimelineIcon style={{ color: "#FF7518", fontSize: "4rem"}}/>
          </div>
          <h1 className="text-orange-400 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500">
            Enterprise Mobility
          </h1>
          <p className="text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            Our far-reaching span of assistance is designed to provide
            enterprises with mobile application solutions and the groundwork to
            aid these products.
          </p>
        </div>
        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-blue-500 duration-500">
          <div className=" bg-blue-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img
              className=" w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
              src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/cart.png"
              alt=""
            /> */}
            <SupportAgentTwoToneIcon style={{ color: "#4169E1", fontSize: "4rem"}}/>
          </div>
          <h1 className="text-blue-500 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500">
            Consultancy
          </h1>
          <p className="text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            We look into Customized Solutions, IT review & Audit, Information &
            Data management, Software development and maintenance, etc.
          </p>
        </div>
        <div className="group flex flex-col border-2 rounded-3xl justify-center items-center px-2 py-5 md:px-16 md:py-10 lg:px-16 lg:py-14 hover:bg-gray-500 duration-500">
        <div className=" bg-gray-100 rounded-2xl relative h-16 w-16 md:w-28 md:h-28 lg:h-28 lg:w-28 flex justify-center items-center">
            {/* <img
              className=" w-10 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16"
              src="https://websitedemos.net/astra-lite-demo-1/wp-content/uploads/sites/30/2017/06/support.png"
              alt=""
            /> */}
            <SettingsSuggestRoundedIcon style={{ color: "#818589", fontSize: "4rem"}}/>
          </div>
          <h1 className="text-gray-500 py-4 md:py-7 lg:py-7 font-bold text-base md:text-xl lg:text-xl group-hover:text-white duration-500">
            Help & Support
          </h1>
          <p className="text-gray-600 text-xs md:text-base lg:text-base group-hover:text-white duration-500">
            Our Technical support services help your Business. We provide Online
            help desk support / technical support through phone call, email and
            chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
