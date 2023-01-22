import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [toggleColor, setToggleColor] = useState("red");

  return (
    <div className="p-4 relative flex flex-col justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer" // sr-only hides the vanilla checkbox. peer allows for styling of sibling
            checked={isToggled}
            readOnly
          />
          <div
            onClick={() => {
              setIsToggled(!isToggled);
            }}
            // after:* is the state of the slider after it's toggled
            className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-${toggleColor}-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-${toggleColor}-600`}
          ></div>
          <span className="ml-2 text-sm font-medium">
            {isToggled ? "ON" : "OFF"}
          </span>
        </label>
      </div>
      <div className="pt-2">
        Change toggle color
        <div className="flex rounded-lg" role="group">
          <button
            onClick={() => setToggleColor("red")}
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"
          >
            Red
          </button>
          <button
            onClick={() => setToggleColor("green")}
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline"
          >
            Green
          </button>
          <button
            onClick={() => setToggleColor("blue")}
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Toggle;
