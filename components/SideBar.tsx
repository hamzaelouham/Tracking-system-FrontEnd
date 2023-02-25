import { forwardRef } from "react";
import Vehicles from "./Vehicles";

const SideBar = forwardRef(({}, ref) => {
  return (
    // @ts-ignore
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14 h-3" />
      <div className="flex flex-col bg-white">
        <Vehicles />
      </div>
    </div>
  );
});

export default SideBar;
