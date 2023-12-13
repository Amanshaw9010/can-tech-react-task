import React from "react";
import FormLayout from "./FormLayout";
import GenrealForm from "./GenrealForm";
import Input from "./Input";
import OrganizationDetailForm from "./OrganizationDetailForm";
import PurposeForm from "./PurposeForm";

const AllForm = () => {
  return (
    <div className="container m-auto px-2 pt-10 lg:w-[1124px]  flex flex-col gap-16">
      <FormLayout FormComponent={GenrealForm} />
      <FormLayout FormComponent={OrganizationDetailForm} />
      <FormLayout FormComponent={PurposeForm} />
      <Input />
    </div>
  );
};

export default AllForm;
