import React from "react";
import { Button } from "@lemonsqueezy/wedges";

const ApplicationDet: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 border-b border-gray-200">
        <h1 className="text-xl font-bold">Application Details</h1>
        <h3 className="text-md font-medium">Cover Letter</h3>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor
          viverra at in ultrices. Velit elementum pharetra vel morbi. Cras ut
          mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus
          consequat in sem fringilla tellus. Sit risus egestas turpis lacus
          porta imperdiet tincidunt nullam nunc. Vitae risus varius proin in
          pellentesque lorem eget ultrices.Lorem ipsum dolor sit amet
          consectetur. Tristique et integer tortor viverra at in ultrices. Velit
          elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum
          convallis. Vestibulum posuere sed cursus consequat in sem fringilla
          tellus. Sit risus egestas turpis lacus porta imperdiet tincidunt
          nullam nunc. Vitae risus varius proin in pellentesque lorem eget
          ultrices.Lorem ipsum dolor sit amet consectetur. Tristique et integer
          tortor viverra at in ultrices. Velit elementum pharetra vel morbi.
          Cras ut mauris eu tincidunt at dictum convallis. Vestibulum posuere
          sed cursus consequat in sem fringilla tellus. Sit risus egestas turpis
          lacus porta imperdiet tincidunt nullam nunc. Vitae risus varius proin
          in pellentesque lorem eget ultrices.Lorem ipsum dolor sit amet
          consectetur. Tristique et integer tortor viverra at in ultrices. Velit
          elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum
          convallis. Vestibulum posuere sed cursus consequat in sem fringilla
          tellus. Sit risus egestas turpis lacus porta imperdiet tincidunt
          nullam nunc. Vitae risus varius proin in pellentesque lorem eget
          ultrices.Lorem ipsum dolor sit amet consectetur. Tristique et integer
          tortor viverra at in ultrices. Velit elementum pharetra vel morbi.
          Cras ut mauris eu tincidunt at dictum convallis. Vestibulum posuere
          sed cursus consequat in sem fringilla tellus. Sit risus egestas turpis
          lacus porta imperdiet tincidunt nullam nunc. Vitae risus varius proin
          in pellentesque lorem eget ultrices.Lorem ipsum dolor sit amet
          consectetur. Tristique et integer tortor viverra at in ultrices. Velit
          elementum pharetra vel morbi. Cras ut mauris eu tincidunt at dictum
          convallis.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-b border-gray-200">
        <h2 className="text-md font-medium">
          Question 1 Question 1 Question 1 Question 1 Question 1?
        </h2>
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor
          viverra at in ultrices. Velit elementum pharetra vel morbi. Cras ut
          mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus
          consequat in sem fringilla tellus. Sit risus egestas turpis lacus
          porta imperdiet tincidunt nullam nunc. Vitae risus varius proin in
          pellentesque lorem eget ultrices.
        </p>
      </div>
      <div className="flex flex-col gap-4 border-b border-black">
        <h2 className="text-md font-medium">
          Question 2 Question 2 Question 2 Question 2 Question 2?
        </h2>
        <p className=" pb-3">
          Lorem ipsum dolor sit amet consectetur. Tristique et integer tortor
          viverra at in ultrices. Velit elementum pharetra vel morbi. Cras ut
          mauris eu tincidunt at dictum convallis. Vestibulum posuere sed cursus
          consequat in sem fringilla tellus. Sit risus egestas turpis lacus
          porta imperdiet tincidunt nullam nunc. Vitae risus varius proin in
          pellentesque lorem eget ultrices.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="border border-gray-200 p-4 rounded-md resize-none outline-none focus:border-purple-500 focus:border-2"
          placeholder="Send an update to applicant"
        ></textarea>
        <div className="flex justify-end mb-4">
          <Button className="bg-purple-500 text-white p-2 rounded-full w-1/2 sm:w-1/3 lg:w-1/4 hover:bg-purple-600  transition-all">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDet;
