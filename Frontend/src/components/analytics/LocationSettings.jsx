
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { MapPin, Plus, List, Search } from "lucide-react";
// import { Calendar } from "lucide-react";
// const LocationSettings = () => {
//   const { tab } = useParams(); // get tab from URL
//   const navigate = useNavigate();

//   const tabSlugs = {
//     general: "General",
//     "opening-hours": "Opening hours",
//     services: "Services",
//     languages: "Languages",
//     desks: "Desks",
//     "appointment-settings": "Appointments",
//     "input-fields-labels": "Input Fields & Labels",
//     ipad: "iPad",
//     "tv-screen": "TV screen",
//     "visitor-website": "Visitor website",
//   };

//   // Default to tab from URL, fallback to "General"
//   const [activeTab, setActiveTab] = useState(tab ? tab : "General");

//   // Update active tab if URL changes
//   useEffect(() => {
//     if (tab && tabSlugs[tab]) {
//       setActiveTab(tabSlugs[tab]);
//     } else {
//       setActiveTab("General");
//     }
//   }, [tab]);

//   const handleTabClick = (tabName) => {
//     const slug = Object.keys(tabSlugs).find((key) => tabSlugs[key] === tabName);
//     if (slug) {
//       navigate(`/location/${slug}`);
//     }
//   };

//   return (
//     <div className="flex flex-col w-full h-screen bg-gray-50 py-8">
//       {/* Purple Bar */}
//       <div className="bg-purple-100 text-purple-800 text-sm px-6 py-3 flex justify-between items-center border-b border-purple-300">
//         <span className="font-medium">
//           DEMO LOCATION – Seeing sample data. When you’re ready, create your own
//           location.
//         </span>
//         <div className="flex gap-2 items-center">
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-lg pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
//             />
//           </div>
//           <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-700 cursor-pointer">
//             <Plus size={16} /> New Location
//           </button>
//           <button className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 cursor-pointer">
//             <List size={16} /> All Locations
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-1 mt-8 border-t border-gray-200">
//         {/* Tabs */}
//         <div className="w-64 border-r border-gray-200 bg-white">
//           {Object.values(tabSlugs).map((tabItem) => (
//             <button
//               key={tabItem}
//               onClick={() => handleTabClick(tabItem)}
//               className={`block w-full text-left px-5 py-3 text-sm font-medium transition cursor-pointer ${
//                 activeTab === tabItem
//                   ? "bg-gray-100 text-black border-r-4 border-purple-500"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               {tabItem}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="flex-1 p-6 overflow-auto">
//           <h1 className="text-xl font-semibold mb-6">Location Settings</h1>

//           {activeTab === "General" && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <h2 className="text-lg font-semibold mb-4">Location</h2>
//               <input
//                 type="text"
//                 value="DEMO Service Center"
//                 disabled
//                 className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed mb-4"
//               />
//               <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm px-4 py-3 rounded mb-6">
//                 This is a DEMO location and can't be renamed. Please create a
//                 new location if you would like to add your own location name.
//               </div>
//               <div className="border rounded-lg overflow-hidden h-64 relative shadow-sm">
//                 <iframe
//                   title="Map"
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   src={`https://www.google.com/maps/embed/v1/place?key=PASTE_YOUR_KEY&q=Delhi,India`}
//                   allowFullScreen
//                 ></iframe>
//                 <div className="absolute top-2 left-2 bg-white p-1 rounded shadow">
//                   <MapPin className="w-5 h-5 text-red-500" />
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "Appointments" && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <h2 className="text-lg font-semibold mb-4">Appointments</h2>
//               <p className="text-gray-600 mb-4">
//                 Allow your visitors to book appointments. Get started with
//                 selecting services, team members, and schedules.
//               </p>
//               <div className="flex flex-col items-center justify-center py-10">
//                 <div className="text-4xl mb-4 bg-gray-200 animate-bounce rounded-full p-3">
//                   <Calendar className="w-12 h-12 text-cyan-800 " />
//                 </div>
//                 <p className="mb-2 font-semibold">
//                   Get started with appointments!
//                 </p>
//                <ol className="list-decimal list-inside space-y-3">
//   <li className="flex items-start gap-3">
//     <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
//       1
//     </span>
//     <span>Select the services you want to offer for booking.</span>
//   </li>
//   <li className="flex items-start gap-3">
//     <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
//       2
//     </span>
//     <span>Select the team members who will provide services.</span>
//   </li>
//   <li className="flex items-start gap-3">
//     <span className="flex-shrink-0 w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center font-semibold">
//       3
//     </span>
//     <span>Set up schedules for your team members.</span>
//   </li>
// </ol>

//                 <button className="bg-cyan-700 hover:bg-cyan-900 font-semibold text-white px-6 py-3  mt-5 cursor-pointer rounded-lg">
//                   Continue
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* {activeTab !== "General" && (
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <p className="text-gray-500">
//                 Content for "{activeTab}" will be displayed here.
//               </p>
//             </div>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationSettings;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, List, Search } from "lucide-react";
import AppointmentsTab from "../location-tabs/AppointmentsTab";
import GeneralTab from "../location-tabs/GeneralTab";
import OpeningHours from "../location-tabs/OpeningHours";
import ServicesList from "../location-tabs/ServiceTabs";

// Tab Components import

// aur baaki tabs yahi import kar lo...

const LocationSettings = () => {
  const { tab } = useParams();
  const navigate = useNavigate();

  const tabSlugs = {
    general: "General",
    "opening-hours": "Opening hours",
    services: "Services",
    languages: "Languages",
    desks: "Desks",
    "appointment-settings": "Appointments",
    "input-fields-labels": "Input Fields & Labels",
    ipad: "iPad",
    "tv-screen": "TV screen",
    "visitor-website": "Visitor website",
  };

  const [activeTab, setActiveTab] = useState(tab ? tab : "General");

  useEffect(() => {
    if (tab && tabSlugs[tab]) {
      setActiveTab(tabSlugs[tab]);
    } else {
      setActiveTab("General");
    }
  }, [tab]);

  const handleTabClick = (tabName) => {
    const slug = Object.keys(tabSlugs).find((key) => tabSlugs[key] === tabName);
    if (slug) {
      navigate(`/location/${slug}`);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 py-8">
      {/* Purple Bar */}
      <div className="bg-purple-100 text-purple-800 text-sm px-6 py-3 flex justify-between items-center border-b border-purple-300">
        <span className="font-medium">
          DEMO LOCATION – Seeing sample data. When you’re ready, create your own
          location.
        </span>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>
          <button className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-purple-700 cursor-pointer">
            <Plus size={16} /> New Location
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-100 cursor-pointer">
            <List size={16} /> All Locations
          </button>
        </div>
      </div>

      <div className="flex flex-1 mt-8 border-t border-gray-200">
        {/* Tabs */}
        <div className="w-64 border-r border-gray-200 bg-white">
          {Object.values(tabSlugs).map((tabItem) => (
            <button
              key={tabItem}
              onClick={() => handleTabClick(tabItem)}
              className={`block w-full text-left px-5 py-3 text-sm font-medium transition cursor-pointer ${
                activeTab === tabItem
                  ? "bg-gray-100 text-black border-r-4 border-purple-500"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tabItem}
            </button>
          ))}
        </div>

        {/* Content */}
  <div className="flex-1 p-6 overflow-auto">
  {activeTab === "General" && (
    <>
      <h1 className="text-xl font-semibold mb-6">Location Settings</h1>
      <GeneralTab />
    </>
  )}

  {activeTab === "Appointments" && (
    <>
      <h1 className="text-xl font-semibold mb-6">Location Settings</h1>
      <AppointmentsTab />
    </>
  )}

  {activeTab === "Opening hours" && <OpeningHours />}
  {activeTab ===  "Services" && <ServicesList/>}

</div>

      </div>
    </div>
  );
};

export default LocationSettings;
 