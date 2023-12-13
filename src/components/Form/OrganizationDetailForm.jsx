import React from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import FromDropdown from "./FromDropdown";
import FromTitle from "./FromTitle";

const OrganizationDetailForm = () => {
  let dropDown1 = [
    { name: "Entry-level / Individual Contributor" },
    { name: "Experienced/Intermediate" },
    { name: "Team Lead/Manager" },
    { name: "Middle Management" },
    { name: "Senior Management - Executive & CXOs" },
  ];

  let dropDown2 = [
    { name: "Legal" },
    { name: "Consulting" },
    { name: "Finance" },
  ];

  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <FromTitle
          title="Professional Details"
          subTitle="Help us evaluate your work profile to see if this program is right for you."
        />

        <FromTitle
          title="Latest Organization"
          subTitle="Add your latest organization details."
        />
      </div>

      <div className="h-3/4  w-full">
        <form action="#" className="flex flex-col gap-4">
          <div className="flex items-start flex-col gap-2">
            <Label id="Organization" name="Organization Name" />

            <Input labelId="Organization" placeHolder="Name" />
          </div>

          <div className="flex items-start flex-col gap-2">
            {" "}
            <Label id="work" name="Job Function" />
            <FromDropdown data={dropDown2} />
          </div>
          <div className="flex items-start flex-col gap-2">
            {" "}
            <Label id="Intersted" name="Job Level" />
            <FromDropdown data={dropDown1} />
          </div>

          <div className="mt-4">
            <Button text="Next" icon="next" />
          </div>
        </form>
      </div>
    </>
  );
};

export default OrganizationDetailForm;
