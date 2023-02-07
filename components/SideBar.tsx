import { forwardRef } from "react";
import Vehicles from "./Vehicles";

const SideBar = forwardRef(({ showNav }: { showNav: boolean }, ref) => {
  return (
    // @ts-ignore
    <div ref={ref} className="fixed w-56 h-full bg-slight shadow-sm">
      <div className="flex justify-center mt-6 mb-14 ">
        <picture>
          <img
            className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
            src="/logo.webp"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col bg-white">
        <Vehicles />
      </div>
    </div>
  );
});

export default SideBar;
