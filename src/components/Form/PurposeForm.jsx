import React from "react";
import Input from "./Input";
import Button from "./Button";
import Label from "./Label";
import FromDropdown from "./FromDropdown";
import FromTitle from "./FromTitle";

const PurposeForm = () => {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-white text-xl">
          Which of the below best describes your aspiration towards Data Science
          domain / learning Data Science?
        </h1>
      </div>

      <div className="h-3/4  w-full">
        <form action="#" className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <input type="radio" id="growth" name="radio" />
              <Label id="growth" name="Growth in current role/organization" />
            </div>

            <div className="flex items-center gap-1">
              {" "}
              <input type="radio" id="inhance" name="radio" />
              <Label id="inhance" name="Enhance my knowledge" />
            </div>

            <div className="flex items-center gap-1">
              {" "}
              <input type="radio" id="transition" name="radio" />
              <Label id="transition" name="Transition my career" />
            </div>

            <div className="flex items-center gap-1">
              {" "}
              <input type="radio" id="seeking" name="radio" />
              <Label id="seeking" name="Seeking a Leadership role" />
            </div>

            <div className="flex items-center gap-1">
              {" "}
              <input type="radio" id="fresh" name="radio" />
              <Label
                id="fresh"
                name="Fresh graduate seeking to start a career"
              />
            </div>

            <div className="flex items-center gap-1">
              {" "}
              <input type="radio" id="other" name="radio" />
              <Label id="other" name="Other" />
            </div>
          </div>
          <div>
            <div className="mb-8 flex flex-col gap-4">
              <FromTitle
                title="Statement of Purpose"
                subTitle="Help the admissions committee evaluate your candidature. Please answer the following question."
              />
            </div>

            <div className="flex w-full flex-col gap-1.5">
              {" "}
              <Label
                id="textarea"
                name="Why do you want to learn Data Science?"
              />
              <textarea
                id="textarea"
                className=" resize-y border-slate-300 text-white p-1.5 text-sm min-h-[100px] outline-none bg-transparent h-full border "
              ></textarea>
            </div>
          </div>

          <div className="mt-4">
            <Button text="Submit Application" icon="send" />
          </div>
        </form>
      </div>
    </>
  );
};

export default PurposeForm;
