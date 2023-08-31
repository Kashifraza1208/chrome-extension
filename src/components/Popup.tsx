import React, { useState } from "react";
import { getLocation } from "../utils/api";

const Popup: React.FC = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLocation = async () => {
    setLoading(true);
    try {
      const result: string = await getLocation();
      setLocation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-125 w-125 bg-[#2596be]">
      {location && (
        <p className="text-white font-bold text-lg">{`${location}`}</p>
      )}

      <button
        className={`bg-[#d9d9d9] py-5 px-8 mt-10 ${
          loading
            ? "bg-[#d9d9d9] text-black font-bold text-3xl"
            : "hover:bg-[#d9d9d9]"
        }`}
        onClick={fetchLocation}
      >
        {loading ? (
          "Loading..."
        ) : (
          <span className="text-black font-bold text-3xl">
            Show my location
          </span>
        )}
      </button>
    </div>
  );
};

export default Popup;
