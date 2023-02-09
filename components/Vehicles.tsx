import { useGloble } from "../context/";
export default function () {
  // @ts-ignore
  const { online, speed } = useGloble();

  return (
    <div className="flex flex-col ml-1 mr-1">
      <div className="w-full mb-2 pb-2  shadow-sm text-left flex justify-between items-center p-1 text-xs font-bold text-gray-700 uppercase bg-gray-50">
        <p> Vehicle</p>
        <p> Speed</p>
        <p> Status</p>
      </div>
      {online ? (
        <div className="w-full font-medium text-sm text-gray-500 flex justify-between items-center p-1 ">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="/icon-vehcle.jpg"
              alt="Jese image"
            />
          </div>
          <div>
            <p>{speed} km/h</p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
              Online
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full font-medium text-sm text-gray-500 flex justify-between items-center p-1 ">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="/icon-vehcle.jpg"
              alt="Jese image"
            />
          </div>
          <div>
            <p> - - -</p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
              Offline
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
