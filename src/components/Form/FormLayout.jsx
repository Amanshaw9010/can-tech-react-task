import React from "react";

import "./assets/CSS/FormLayout.css";
import Application from "./Application";

const FormLayout = ({ FormComponent }) => {
  return (
    <div className="form-Container flex  justify-center w-full">
      <div className="p-6 form-first-container bg-blue-700 w-2/4 flex flex-col ">
        <FormComponent />
      </div>

      <Application />
    </div>
  );
};

export default FormLayout;
