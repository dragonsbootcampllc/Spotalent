function FillApplication() {
  return (
    <div className=" p-8 w-11/12 md:w-5/6 lg:w-4/6 mx-auto my-7 flex flex-col gap-4">
      <div className="border-b pb-4 border-gray-200">
        <h3 className="font-medium md:text-xl">Job post title</h3>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between py-2">
          <p className="text-gray-600 text-sm">Posted 3 hours ago</p>
          <p className="text-gray-500">79 Applied</p>
        </div>
        <p>3 Candidates</p>
      </div>
      <div>
        <h2 className="font-medium py-2 md:text-xl">
          What where when which How?
        </h2>
        <textarea
          type="text"
          placeholder="Answer here"
          className="px-4 pt-2 pb-8 w-full border resize-none rounded focus:border-gray-300"
        />
      </div>
      <div>
        <h2 className="font-medium py-2 md:text-xl">
          What where when which How?
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="question"
              value="option1"
              id="option1"
              className=" accent-gray-600 h-6 w-6"
            />
            <label htmlFor="option1" className="text-gray-700 cursor-pointer">
              Lorem ipsum dolor sit, amet consectetur. Justo facilisis sed massa
              molestie valutpat purus orci.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="question"
              value="option2"
              id="option2"
              className=" accent-gray-600 h-6 w-6"
            />
            <label htmlFor="option2" className="text-gray-700 cursor-pointer">
              Lorem ipsum dolor sit, amet consectetur. Justo facilisis sed massa
              molestie valutpat purus orci.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="question"
              value="option3"
              id="option3"
              className=" accent-gray-600 h-6 w-6"
            />
            <label htmlFor="option3" className="text-gray-700 cursor-pointer ">
              Lorem ipsum dolor sit, amet consectetur. Justo facilisis sed massa
              molestie valutpat purus orci.
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="question"
              value="option4"
              id="option4"
              className=" accent-gray-600 h-6 w-6"
            />
            <label htmlFor="option4" className="text-gray-700 cursor-pointer">
              Lorem ipsum dolor sit, amet consectetur. Justo facilisis sed massa
              molestie valutpat purus orci.
            </label>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-medium py-2 md:text-xl">
          Write a python code that represents what where when which How?
        </h2>
        <textarea
          className="px-4 pt-2 pb-8 w-full border rounded resize-none"
          type="text"
          placeholder="write your code here"
        />
      </div>
      <div className="flex justify-center md:justify-end">
        <button className="bg-gray-600 hover:bg-gray-800 px-24 text-white py-2 rounded-full">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default FillApplication;
