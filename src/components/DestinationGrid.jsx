import Card from "./DestinationCard";
import Destinations from "../data/destinations";
import { useState } from "react";

function DestinationGrid({ onEnquire }) {
  const [searchDestination, setSearchDestination] = useState("");
  const [all, setAll] = useState(false);

  const searchedDestination = Destinations.filter(
    (Destination) =>
      Destination.name
        .toLowerCase()
        .includes(searchDestination.toLowerCase()) ||
      Destination.category
        .toLowerCase()
        .includes(searchDestination.toLowerCase()) ||
      Destination.country
        .toLowerCase()
        .includes(searchDestination.toLowerCase())
  );

  const filteredDestination = all
    ? searchedDestination
    : searchedDestination.slice(0, 6);

  function Clear() {
    setAll(!all);
  }

  const [selectedDestination, setSelectedDestination] = useState(null)

  return (
    <section id="destination" className="bg-[#F0F8FF] dark:bg-[#101B2B]">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#17324D] dark:text-[#F4F4F0] text-center">
            Destinations
          </h2>
          <p className="text-center text-xl text-black dark:text-[#F4F4F0]  mb-4">
            Discover popular attractions from around the globe
          </p>
          <input
            className="w-72 min-[360px]:w-80 p-3 mb-5 ring-2 ring-[#1769AA] rounded-lg focus:outline-none focus:ring-black"
            type="search"
            name=""
            placeholder="search by name, category or location"
            id=""
            onChange={(e) => setSearchDestination(e.target.value)}
          />
        </div>

        <>
          {searchedDestination.length === 0 ? (
            <p className="text-center text-red-600">
              No result for {searchDestination}. Try another search
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4">
              {filteredDestination.map((Destination) => {
                const {description, ...cardProps} = Destination;
                return (
                  <Card key={Destination.id} {...cardProps} viewDetails = {() => setSelectedDestination(Destination)}/>
                )
                })}
            </div>
          )}

          {selectedDestination && (
            <div onClick={() => setSelectedDestination(null)} className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
              <div onClick={(e) => e.stopPropagation()} className="bg-white dark:bg-[#142338] rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl">
                <button onClick={() => setSelectedDestination(null)} className="absolute top-3 right-3 bg-white text-gray-800 rounded-full w-9 h-9 text-2xl font-bold shadow-md">
                  &times;
                </button>
                <img src={selectedDestination.src} alt={selectedDestination.name} className="w-full h-32 md:h-48 lg:h-64 object-cover"/>
                <div className="p-3 md:p-6">
                  <h2 className="text-2xl font-bold  text-[#17324D] dark:text-[#1769AA]">{selectedDestination.name}</h2>
                  <p className="text-gray-600 dark:text-[#F4F4F0] mt-2">{selectedDestination.country}</p>
                  <p className="text-[#1769AA] mt-2 font-medium">{selectedDestination.category}</p>
                  <p className="text-gray-700 dark:text-[#F4F4F0] mt-2 md:mt-4 leading-relaxed">{selectedDestination.description}</p>
                  <p className="font-bold text-[#17324D] dark:text-[#1769AA] mt-2 md:mt-4">Entrance Fee: {selectedDestination.entranceFee}</p>
                  <button onClick={() => {onEnquire(selectedDestination.name);
                    setSelectedDestination(null)
                  }} 
                    className="mt-4 w-full rounded-lg bg-[#1769AA] text-white py-3 hover:bg-[#12558A]">
                    Enquire About This Destination
                  </button>
                </div>
              </div>
            </div>
          )}

          {searchedDestination.length > 6 && (
            <div className="flex justify-center mt-3">
              <button
                onClick={Clear}
                className="bg-[#1769AA] hover:bg-[#17324D] active:scale-75 transition-all duration-200 text-white font-semibold px-6 py-2 rounded-xl my-3 flex items-center gap-1"
              >
                <span>
                  {all ? "See Less Destinations" : "See All Destinations"}
                </span>
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    all ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      </div>
    </section>
  );
}

export default DestinationGrid;
