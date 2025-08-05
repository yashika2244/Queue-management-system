// // import React, { useState, useEffect, useContext } from "react";
// // import {
// //   Calendar,
// //   BarChart2,
// //   Layers,
// //   Wifi,
// //   Rocket,
// //   HelpCircle,
// //   User,
// //   Plus,
// //   Search,
// //   Eye,
// //   MapPin,
// //   Clock,
// //   Menu,
// //   X,
// // } from "lucide-react";
// // import { IoIosMenu } from "react-icons/io";
// // import { LuSlidersHorizontal } from "react-icons/lu";
// // import { GoHome } from "react-icons/go";
// // import axios from "axios";
// // import { AuthContext } from "../context/AuthContext";
// // // Custom SVG Icon Component for the new icon
// // const DataIcon = () => (
// //   <svg
// //     width="24"
// //     height="24"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <g clipPath="url(#data-icon)">
// //       <path
// //         fill="currentColor"
// //         fillRule="evenodd"
// //         clipRule="evenodd"
// //         d="M9.30461 5.16489C9.53785 5.66966 9.31773 6.26794 8.81295 6.50117C7.84388 6.94895 6.99905 7.627 6.35214 8.47619C5.70523 9.32538 5.27588 10.3199 5.10152 11.3731C4.92717 12.4263 5.0131 13.5062 5.35183 14.5185C5.69056 15.5309 6.27181 16.445 7.04488 17.1812C7.81796 17.9174 8.75939 18.4533 9.78709 18.7422C10.8148 19.031 11.8976 19.0641 12.941 18.8385C13.9844 18.6129 14.9568 18.1355 15.7734 17.4479C16.5899 16.7603 17.2259 15.8833 17.6258 14.8935C17.8341 14.378 18.4209 14.1289 18.9365 14.3372C19.452 14.5455 19.7011 15.1323 19.4928 15.6479C18.9699 16.9422 18.1382 18.089 17.0704 18.9882C16.0026 19.8874 14.731 20.5117 13.3665 20.8067C12.002 21.1017 10.5861 21.0584 9.24219 20.6807C7.89828 20.3029 6.66718 19.6021 5.65623 18.6394C4.64529 17.6767 3.8852 16.4813 3.44225 15.1575C2.99929 13.8336 2.88691 12.4215 3.11492 11.0442C3.34292 9.66699 3.90438 8.36642 4.75034 7.25594C5.5963 6.14546 6.70107 5.25879 7.96833 4.67323C8.4731 4.44 9.07137 4.66012 9.30461 5.16489Z"
// //       />
// //       <path
// //         fill="currentColor"
// //         fillRule="evenodd"
// //         clipRule="evenodd"
// //         d="M11.558 5.39426C11.558 4.07379 12.6848 2.72748 14.265 3.0478C14.8029 3.15683 15.3303 3.31761 15.8398 3.52864C16.8781 3.95872 17.8215 4.5891 18.6162 5.38378C19.4109 6.17847 20.0413 7.12189 20.4714 8.16019C20.6824 8.66968 20.8432 9.19711 20.9522 9.73498C21.2725 11.3152 19.9262 12.442 18.6057 12.442L14.075 12.442C12.6849 12.442 11.558 11.3151 11.558 9.92496V5.39426ZM13.6978 5.07324C13.6318 5.13522 13.5716 5.24909 13.5716 5.39426V9.92496C13.5716 10.203 13.797 10.4284 14.075 10.4284L18.6057 10.4284C18.7509 10.4284 18.8648 10.3682 18.9268 10.3022C18.9793 10.2463 18.9912 10.1966 18.9787 10.135C18.8953 9.72371 18.7724 9.32039 18.611 8.93078C18.2821 8.13679 17.8001 7.41534 17.1924 6.80764C16.5847 6.19995 15.8632 5.71789 15.0692 5.38901C14.6796 5.22763 14.2763 5.10468 13.865 5.0213C13.8034 5.00882 13.7537 5.02071 13.6978 5.07324Z"
// //       />
// //     </g>
// //     <defs>
// //       <clipPath id="data-icon">
// //         <rect width="24" height="24" />
// //       </clipPath>
// //     </defs>
// //   </svg>
// // );

// // const ServiceIcon = () => (
// //   <svg
// //     width="24"
// //     height="24"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <g clipPath="url(#service-icon)">
// //       <path
// //         fill="currentColor"
// //         d="M19.7503 18.4723C20.314 17.7166 20.7009 16.844 20.8823 15.9188C21.0637 14.9937 21.0351 14.0396 20.7985 13.127C20.562 12.2143 20.1235 11.3665 19.5155 10.646C18.9075 9.92547 18.1455 9.35069 17.2857 8.96406C17.0984 7.88649 16.668 6.86579 16.0271 5.97951C15.3863 5.09323 14.5519 4.3647 13.5873 3.84926C12.6227 3.33382 11.5533 3.04504 10.4603 3.00486C9.36742 2.96468 8.27971 3.17416 7.27988 3.61738C6.28004 4.0606 5.39438 4.7259 4.69018 5.56273C3.98599 6.39956 3.48179 7.38591 3.2159 8.44681C2.95001 9.50772 2.92943 10.6153 3.15571 11.6853C3.38199 12.7554 3.84919 13.7598 4.5218 14.6222L3.2715 15.8636C3.14668 15.9901 3.06214 16.1507 3.02852 16.3252C2.9949 16.4997 3.01372 16.6803 3.0826 16.8441C3.15008 17.0084 3.26468 17.149 3.41194 17.2482C3.55921 17.3475 3.73256 17.4009 3.91014 17.4018H9.02829C9.53799 18.4764 10.3416 19.3847 11.3461 20.0215C12.3506 20.6583 13.5148 20.9975 14.7041 21H20.1011C20.2787 20.9991 20.4521 20.9457 20.5993 20.8464C20.7466 20.7472 20.8612 20.6066 20.9287 20.4423C20.9975 20.2785 21.0164 20.0979 20.9827 19.9234C20.9491 19.7489 20.8646 19.5883 20.7398 19.4618L19.7503 18.4723ZM8.40764 14.7032C8.40887 15.0044 8.43293 15.3051 8.4796 15.6027H6.07793L6.39276 15.2969C6.47707 15.2132 6.54398 15.1138 6.58965 15.0041C6.63532 14.8945 6.65883 14.7769 6.65883 14.6582C6.65883 14.5394 6.63532 14.4219 6.58965 14.3122C6.54398 14.2026 6.47707 14.1031 6.39276 14.0195C5.88864 13.5209 5.48899 12.9268 5.21716 12.2719C4.94534 11.617 4.8068 10.9145 4.80964 10.2054C4.80964 8.77398 5.37825 7.40116 6.39038 6.38897C7.40252 5.37679 8.77526 4.80815 10.2066 4.80815C11.3235 4.80143 12.4144 5.14492 13.326 5.79033C14.2376 6.43574 14.924 7.35061 15.2888 8.40634C15.0909 8.40634 14.902 8.40634 14.7041 8.40634C13.0342 8.40634 11.4327 9.06975 10.2518 10.2506C9.07102 11.4315 8.40764 13.0331 8.40764 14.7032ZM17.8884 19.2009L17.9333 19.2459H14.7041C13.6637 19.244 12.6561 18.8815 11.853 18.22C11.0499 17.5586 10.5009 16.6391 10.2996 15.6183C10.0984 14.5975 10.2572 13.5385 10.7491 12.6216C11.241 11.7048 12.0356 10.9869 12.9974 10.5902C13.9592 10.1935 15.0288 10.1425 16.024 10.446C17.0192 10.7495 17.8783 11.3886 18.4552 12.2546C19.032 13.1205 19.2908 14.1596 19.1874 15.1949C19.0841 16.2303 18.625 17.1977 17.8884 17.9325C17.7189 18.0986 17.6219 18.325 17.6185 18.5622C17.619 18.6812 17.6431 18.799 17.6894 18.9086C17.7357 19.0182 17.8034 19.1176 17.8884 19.2009Z"
// //       />
// //     </g>
// //     <defs>
// //       <clipPath id="service-icon">
// //         <rect width="24" height="24" />
// //       </clipPath>
// //     </defs>
// //   </svg>
// // );

// // const QminderDashboard = () => {
// //   const [activeIcon, setActiveIcon] = useState("home");
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [activeTab, setActiveTab] = useState("Today");
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isClerk, setClerk] = useState(false);
// //   const [clerks, setClerks] = useState([]);
// //   const [showServingList, setShowServingList] = useState(false);
// //   const baseUrl = import.meta.env.VITE_API_BASE_URL;
// //   const [servedVisitors, setServedVisitors] = useState([]);
// //   const [totalVisitors, setTotalVisitors] = useState([]);
// //   const [visitors, setVisitors] = useState([]);
// //   const [showServedDetails, setShowServedDetails] = useState(false);
// //   const [servingVisitors, setServingVisitors] = useState([]);
// // const {user} = useContext(AuthContext)
// // console.log("user is", user)
// //   useEffect(() => {
// //     const fetchVisitors = async () => {
// //       try {
// //         const res = await axios.get(`${baseUrl}/api/visitors`);
// //         const allVisitors = res.data;

// //         setTotalVisitors(allVisitors);
// //         setServedVisitors(allVisitors.filter((v) => v.status === "served"));
// //         setVisitors(allVisitors); // no need for res.data again, you already used it
// //       } catch (err) {
// //         console.error("Failed to fetch visitors:", err);
// //       }
// //     };

// //     fetchVisitors();

// //     const interval = setInterval(fetchVisitors, 10000); // refresh every 10s
// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     axios
// //       .get(`${baseUrl}/api/clerks`)
// //       .then((res) => setClerks(res.data))
// //       .catch((err) => console.error(err));
// //   }, []);

// //   const serveVisitor = async (visitorId) => {
// //     try {
// //       console.log("Trying to serve visitor:", visitorId);
// //       await axios.put(`${baseUrl}/api/visitors/serve/${visitorId}`);
// //       setServingVisitors(res.data);
// //       aa;
// //       // Optional: refresh list
// //     } catch (err) {
// //       console.error("Error serving visitor:", err);
// //     }
// //   };

// //   const getDuration = (startTime) => {
// //     const start = new Date(startTime);
// //     const now = new Date();
// //     const diffMs = now - start;

// //     const mins = Math.floor(diffMs / 60000);
// //     const hrs = Math.floor(mins / 60);

// //     return `${hrs}h ${mins % 60}min`;
// //   };

// //   // Count services dynamically from live data
// //   const serviceCounts = {
// //     Support: visitors.filter((v) => v.service === "Support").length,
// //     Consultation: visitors.filter((v) => v.service === "Consultation").length,
// //     Information: visitors.filter((v) => v.service === "Information").length,
// //   };

// //   return (
// //     <div className="min-h-screen  font-sans">
// //       {/* Seeing Sample Data Banner */}
// //       <div className="fixed top-0 left-[0px] right-0 z-30 bg-gray-200 px-5.5 py-2 md:flex justify-between hidden border-b border-gray-300">
// //         <div className=" flex items-center gap-3">
// //           <button className="bg-white text-purple-800 px-1 py-[1px] text-[11px] font-[700] rounded-sm">
// //             DEMO LOCATION
// //           </button>
// //           <span className="text-md font-sans text-gray-800">
// //             Seeing sample data. When you’re ready, create your own location.
// //           </span>
// //         </div>

// //         <button className="flex items-center text-sm font-semibold space-x-1 p-[5px] rounded-md hover:bg-gray-300 ">
// //           <span>ADD LOCATION</span>
// //         </button>
// //       </div>

// //       {/* Main Layout with Sidebar and Content */}
// //       <div className="h-[44px] hidden md:block" />
// //       <div className="flex flex-raw">
// //         {/* Sidebar - Desktop */}

// //      <aside className="hidden h-screen fixed sm:flex w-14 left-0 bg-[#034241] text-[#027474] flex-col items-center py-2 space-y-4">
// //   {[
// //     { id: "home", icon: GoHome },
// //     { id: "service", icon: ServiceIcon },
// //     { id: "calendar", icon: Calendar },
// //     { id: "data", icon: DataIcon },
// //     { id: "sliders", icon: LuSlidersHorizontal },
// //     { id: "wifi", icon: Wifi },
// //     { id: "rocket", icon: Rocket },
// //     { id: "help", icon: HelpCircle },
// //     { id: "user" }, // no icon, show initial
// //   ].map(({ id, icon: Icon }) => (
// //     <div
// //       key={id}
// //       onClick={() => setActiveIcon(id)}
// //       className={`p-3.5 rounded-lg cursor-pointer ${
// //         activeIcon === id
// //           ? "bg-[#065755] text-white"
// //           : "hover:bg-[#065755] hover:text-white transition"
// //       }`}
// //     >
// //       {id === "user" ? (
// //         <div className="w-6 h-6 rounded-full bg-[#027474]  text-[#034241] flex items-center justify-center font-semibold text-sm uppercase">
// //           {user?.firstName?.charAt(0) || "z"}
// //         </div>
// //       ) : (
// //         <Icon className="w-5.5 h-5.5 font-bold" />
// //       )}
// //     </div>
// //   ))}
// // </aside>

// //         {/* Sidebar - Mobile Drawer */}
// //         <div
// //           className={`fixed top-0 left-0 h-full w-52 bg-[#034241] text-[#027474] p-4 transform transition-transform z-50 sm:hidden ${
// //             isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
// //           }`}
// //         >
// //           <div className="flex justify-end mb-6">
// //             <X
// //               className="text-white w-6 h-6 cursor-pointer"
// //               onClick={() => setIsMobileMenuOpen(false)}
// //             />
// //           </div>
// //           <div className="flex flex-col space-y-5">
// //             {[
// //               { id: "home", icon: GoHome },
// //               { id: "service", icon: ServiceIcon },
// //               { id: "calendar", icon: Calendar },
// //               { id: "data", icon: DataIcon },
// //               { id: "sliders", icon: LuSlidersHorizontal },
// //               { id: "wifi", icon: Wifi },
// //               { id: "rocket", icon: Rocket },
// //               { id: "help", icon: HelpCircle },
// //               { id: "user", icon: User },
// //             ].map(({ id, icon: Icon }) => (
// //               <div
// //                 key={id}
// //                 onClick={() => {
// //                   setActiveIcon(id);
// //                   setIsMobileMenuOpen(false);
// //                 }}
// //                 className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
// //                   activeIcon === id
// //                     ? "bg-[#065755] text-white"
// //                     : "hover:bg-[#065755] hover:text-white transition"
// //                 }`}
// //               >
// //                 <Icon className="w-5 h-5" />
// //                 <span className="text-sm font-medium capitalize">{id}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <main className="flex-1 lg:pl-[58px] lg:overflow-y-auto max-h-[calc(100vh-44px)]">
// //           {/* Header */}

// //           <div className="flex justify-between items-center md:px-5.5 md:pt-2 border-b border-gray-300">
// //             <div className="flex md:gap-8 gap-3">
// //               <div className="flex justify-center items-center  gap-4  px-4 py-2 md:p-0">
// //                 <IoIosMenu
// //                   className="w-6 h-6 sm:hidden  text-black cursor-pointer"
// //                   onClick={() => setIsMobileMenuOpen(true)}
// //                 />

// //                 <h1 className="text-xl font-semibold text-gray-950 mb-1 ">
// //                   Overview
// //                 </h1>
// //               </div>
// //               <div className="flex space-x-7 pt-1  text-sm text-gray-600">
// //                 {["Today", "Daily Report", "Weekly Report"].map((tab) => (
// //                   <button
// //                     key={tab}
// //                     onClick={() => setActiveTab(tab)}
// //                     className={`lg:pb-4 lg:pt-1 border-b-2 transition duration-200 text-sm cursor-pointer ${
// //                       activeTab === tab
// //                         ? "border-teal-800  text-teal-800 "
// //                         : "border-transparent  hover:text-teal-800"
// //                     }`}
// //                   >
// //                     {tab}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="relative md:flex items-center hidden">
// //               <Search className="absolute left-3 w-4 h-4 text-gray-700" />
// //               <input
// //                 type="search"
// //                 className="px-12 py-1 mb-1 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500"
// //               />
// //             </div>
// //           </div>

// //           <div className="md:py-5 py-4 border-b border-gray-300 px-7">
// //             <button className="flex items-center gap-1  text-sm text-gray-900 font-[400] bg-[rgba(5,105,72,0.06)] py-1 px-2 rounded-lg border border-[rgba(15,95,75,0.1)]">
// //               <MapPin className="w-4 h-4 text-gray-700" />
// //               DEMO Service Center
// //             </button>
// //           </div>

// //           {/* Dashboard Grid */}
// //           <div className="md:px-5.5 py-6 grid grid-cols-1 lg:grid-cols-3  bg-gray-50">
// //             {/* Visitors Waiting */}

// //             <div className="bg-white p-4 border border-gray-200">
// //               <h2 className="text-xl font-bold text-gray-700 mb-1 flex items-center gap-2 justify-between md:justify-normal">
// //                 Visitors waiting
// //                 <span className="text-5xl font-semibold text-[#40d48d] md:flex hidden">
// //                   {visitors.length}
// //                 </span>
// //                 {/* Mobile dropdown (hidden on sm and up) */}
// //                 <div
// //                   className="flex items-center justify-end  sm:justify-normal sm:w-auto sm:hidden cursor-pointer"
// //                   onClick={() => setIsOpen(!isOpen)}
// //                 >
// //                   <span className="text-5xl font-semibold text-[#40d48d]">
// //                     {visitors.length}
// //                   </span>
// //                   <svg
// //                     className={`w-6 h-6 text-gray-300 ml-1 transform transition-transform ${
// //                       isOpen ? "rotate-180" : "rotate-0"
// //                     }`}
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </div>
// //               </h2>

// //               <p className="text-sm text-gray-500 mb-2">
// //                 {visitors.length} visitor{visitors.length !== 1 ? "s" : ""}{" "}
// //                 waiting
// //               </p>
// //               {/* Collapsible Section: hidden on mobile unless open, always visible on sm+ */}
// //               <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
// //                 <div className="-mx-4 border-t border-b border-gray-200 py-2 bg-gray-50 font-sans">
// //                   <div className="flex gap-3 text-sm px-3">
// //                     {["All", "Support", "Consultation", "Information"].map(
// //                       (filter) => (
// //                         <button
// //                           key={filter}
// //                           onClick={() => setActiveFilter(filter)}
// //                           className={`flex gap-1 items-center px-2 py-[2px] rounded-lg transition cursor-pointer ${
// //                             activeFilter === filter
// //                               ? "bg-[rgba(5,105,72,0.06)] text-gray-900 font-semibold"
// //                               : "text-gray-800 hover:bg-[rgba(5,105,72,0.06)] hover:text-gray-900"
// //                           }`}
// //                         >
// //                           {filter}
// //                           <span className="font-bold">
// //                             {filter === "All"
// //                               ? visitors.length
// //                               : serviceCounts[filter] || 0}
// //                           </span>
// //                         </button>
// //                       )
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   {visitors.map((v, i) => (
// //                     <div
// //                       key={i}
// //                       className="-mx-4 border-b border-gray-200 py-2 font-sans p-3 flex justify-between"
// //                     >
// //                       <div>
// //                         <p className="text-teal-800 font-[700]">{v.name}</p>
// //                         <p className="text-sm text-gray-600">
// //                           in {v.service}{" "}
// //                           {v.assignedTo && (
// //                             <span className="text-xs text-gray-300 font-[600]">
// //                               <br /> Assigned to{" "}
// //                               <span className="text-teal-800 text-sm font-[700] font-sans">
// //                                 {v.assignedTo}
// //                               </span>
// //                             </span>
// //                           )}
// //                         </p>
// //                       </div>
// //                       <p className="text-sm text-gray-500 flex flex-col gap-1 justify-center items-center">
// //                         <Clock className="w-3.5 h-3.5 text-center text-gray-300" />
// //                       {getDuration(v.startedAt || v.createdAt)}
// //                       </p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Clerks Busy */}
// //             <div className="bg-white p-4 border border-gray-200">
// //               <h2 className="text-xl font-bold text-gray-700 mb-1 flex items-center justify-between md:justify-normal gap-2">
// //                 Clerks busy
// //                 {/* Mobile toggle: 1/1 + arrow */}
// //                 <div
// //                   className="flex items-center sm:hidden cursor-pointer"
// //                   onClick={() => setClerk(!isClerk)}
// //                 >
// //                   <span className="text-[#40d48d] text-5xl">
// //                     {" "}
// //                     {clerks.filter((clerk) => !clerk.isAvailable).length}
// //                   </span>
// //                   <span className="font-bold">/{clerks.length}</span>
// //                   <svg
// //                     className={`w-6 h-6 text-gray-300 ml-1 transform transition-transform ${
// //                       isClerk ? "rotate-180" : "rotate-0"
// //                     }`}
// //                     fill="none"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M19 9l-7 7-7-7"
// //                     />
// //                   </svg>
// //                 </div>
// //                 {/* Desktop only: show 1/1 normally */}
// //                 <div className="hidden sm:flex">
// //                   <span className="text-[#40d48d] text-5xl">1</span>
// //                   <span className="font-bold">/1</span>
// //                 </div>
// //               </h2>

// //               <p className="text-sm text-gray-500 mb-2">
// //                 {/* 1 clerk out of 1 serving visitors */}
// //                 {clerks.filter((clerk) => !clerk.isAvailable).length} clerk out
// //                 of {clerks.length} serving visitors
// //               </p>

// //               {/* Toggle section: hidden on mobile unless open, always visible on sm+ */}
// //               <div className={`${isClerk ? "block" : "hidden"} sm:block`}>
// //                 <p className="text-md text-center text-teal-700 mb-2 border-t border-gray-200 pt-3 -mx-4">
// //                   3 desks are available
// //                 </p>

// //                 <div className="space-y-3 -mx-2 mb-4">
// //                   {[1, 2, 3].map((desk) => (
// //                     <div
// //                       key={desk}
// //                       className="border border-gray-300 shadow-sm rounded-md h-24 p-4"
// //                     >
// //                       <p className="text-gray-500 text-sm">DESK {desk}</p>
// //                       <p className="text-xs text-center text-gray-300 font-bold">
// //                         Desk is available
// //                       </p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <div className="border-t border-gray-200 mt-4">
// //                   {servingVisitors.length === 0 ? (
// //                     <p className="text-gray-500 text-sm text-center py-4">
// //                       No one is currently being served
// //                     </p>
// //                   ) : (
// //                     servingVisitors.map((item, i) => (
// //                       <div
// //                         key={i}
// //                         className="py-3 px-2 flex justify-between items-start text-sm font-sans border-b border-gray-100"
// //                       >
// //                         {/* Left side */}
// //                         <div className="flex items-start gap-2">
// //                           <div className="w-5 h-5 rounded-full bg-gray-300 mt-0.5" />
// //                           <div>
// //                             <p className="text-gray-700">
// //                               <span className="font-semibold text-teal-800">
// //                                 {item.assignedTo}
// //                               </span>{" "}
// //                               is serving{" "}
// //                               <span className="font-semibold text-teal-800">
// //                                 {item.name}
// //                               </span>
// //                             </p>
// //                             <p className="text-[13px] text-teal-700 font-semibold leading-tight">
// //                               in {item.service}
// //                             </p>
// //                           </div>
// //                         </div>

// //                         {/* Right side duration */}
// //                         <p className="text-gray-600 text-right text-sm whitespace-nowrap mt-1 font-medium">
// //                           {getDuration(item.startedAt)}
// //                         </p>
// //                       </div>
// //                     ))
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Visitors Served */}
// //             <div className="bg-white p-5 border border-gray-200">
// //               <h2 className="text-xl font-bold text-gray-700 mb-1">
// //                 <div className="flex justify-between sm:justify-normal items-start sm:items-center md:gap-2">
// //                   <span className="text-gray-700">Visitors Served</span>

// //                   {/* Desktop View */}
// //                   <div className="hidden sm:flex items-center">
// //                     <span className="text-[#40d48d] text-5xl">
// //                       {servedVisitors.length}
// //                     </span>
// //                     <span className="font-bold">/{totalVisitors.length}</span>
// //                   </div>

// //                   {/* Mobile View */}
// //                   <div
// //                     className="flex items-center sm:hidden cursor-pointer"
// //                     onClick={() => setShowServedDetails((prev) => !prev)}
// //                   >
// //                     <span className="text-[#40d48d] text-4xl leading-none">
// //                       {servedVisitors.length}
// //                     </span>
// //                     <span className="font-bold text-lg ml-1">
// //                       /{totalVisitors.length}
// //                     </span>
// //                     <svg
// //                       className={`w-4 h-4 text-gray-400 ml-2 transition-transform ${
// //                         showServedDetails ? "rotate-180" : ""
// //                       }`}
// //                       fill="none"
// //                       stroke="currentColor"
// //                       strokeWidth="2"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         d="M19 9l-7 7-7-7"
// //                       />
// //                     </svg>
// //                   </div>
// //                 </div>
// //               </h2>

// //               {/* Common text, always visible */}
// //               <p className="text-sm text-gray-500 mb-1">
// //                 {servedVisitors.length} visitors out of {totalVisitors.length}{" "}
// //                 sign-ins served
// //               </p>

// //               {/* This should only be visible on mobile when toggled */}
// //               {(showServedDetails || window.innerWidth >= 640) && (
// //                 <p className="text-md text-gray-800 text-center p-10 border-t border-gray-200 -mx-5 sm:block">
// //                   {servedVisitors.length === 0
// //                     ? "No visitors have been served today"
// //                     : `${servedVisitors.length} visitor${
// //                         servedVisitors.length !== 1 ? "s" : ""
// //                       } served today`}
// //                 </p>
// //               )}
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QminderDashboard;

// import React from "react";
// import {
//   Home,
//   CalendarDays,
//   MessageSquare,
//   SlidersHorizontal,
//   Wifi,
//   Settings,
//   UserCircle2,
// } from "lucide-react";

// const navItems = [
//   { icon: Home, label: "Home" },
//   { icon: CalendarDays, label: "Appointments" },
//   { icon: MessageSquare, label: "Messages" },
//   { icon: SlidersHorizontal, label: "Controls" },
//   { icon: Wifi, label: "Network" },
//   { icon: Settings, label: "Settings" },
// ];

// const QminderDashboard = () => {
//   return (
//     <aside className="h-screen w-20 hover:w-60 bg-emerald-950/90 backdrop-blur-md text-white flex flex-col justify-between items-center py-6 shadow-xl transition-all duration-300 group">
//       {/* Top Brand */}
//       <div className="mb-6 flex flex-col items-center gap-2">
//         <div className="w-12 h-12 bg-emerald-700 rounded-2xl flex items-center justify-center text-xl font-extrabold shadow-lg hover:scale-105 transition">
//           QP
//         </div>
//         <span className="hidden group-hover:block text-xs font-light">QueuePilot</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex flex-col gap-3 w-full px-2">
//         {navItems.map(({ icon: Icon, label }, i) => (
//           <div
//             key={i}
//             className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-emerald-800/80 transition-colors cursor-pointer relative"
//           >
//             <Icon size={22} />
//             <span className="hidden group-hover:block text-sm font-medium transition duration-300">
//               {label}
//             </span>
//             {/* active indicator example on Home */}
//             {label === "Home" && (
//               <span className="absolute left-0 h-full w-1 bg-rose-500 rounded-r-full"></span>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Profile */}
//       <div className="relative group mb-2 flex flex-col items-center">
//         <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center hover:ring-2 ring-rose-400 cursor-pointer transition">
//           <UserCircle2 size={22} />
//         </div>
//         <span className="hidden group-hover:block text-xs mt-1">My Profile</span>
//       </div>
//     </aside>
//   );
// };

// export default QminderDashboard;

// import React, { useState } from "react";
// import HomePage from "../components/Home/HomeDashboard";
// import {
//   Home,
//   CalendarDays,
//   MessageCircle,
//   SlidersHorizontal,
//   Wifi,
//   Settings,
//   UserCircle,
//   Menu,
//   X,
//   Rocket,
// } from "lucide-react";

// const sidebarItems = [
//   { icon: Home, label: "Home" },
//   { icon: CalendarDays, label: "Appointments" },
//   { icon: MessageCircle, label: "Messages" },
//   { icon: SlidersHorizontal, label: "Controls" },
//   { icon: Wifi, label: "Network" },
//   { icon: Rocket, label: "Get Started" },

//   { icon: Settings, label: "Settings" },
// ];

// export default function QminderDashboard() {
//   const [open, setOpen] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
// <aside
//   className={`
//     fixed md:relative z-40 top-0 left-0
//     h-screen w-full md:w-16
//     bg-cyan-800 border-b md:border-r border-[#e2e8f0] shadow-sm
//     px-6 py-8 md:px-1 md:py-2
//     font-sans flex flex-col justify-between
//     transition-transform duration-300 ease-in-out
//     ${open ? "translate-y-0" : "-translate-y-full"}
//     md:translate-y-0
//   `}
// >

//         {/* Logo */}
//         <div>
//           <h2 className="text-2xl font-bold text-[#e0f7fa] mb-10 tracking-wide md:hidden">
//             QueuePilot
//           </h2>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-2 md:space-y-8">
//             {sidebarItems.map(({ icon: Icon, label }, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200   ease-in-out cursor-pointer
//             ${
//               activeIndex === idx
//                 ? "bg-[#f7fafc] text-cyan-800"
//                 : " hover:bg-[#f7fafc] hover:text-cyan-800 text-white"
//             }
//           `}
//               >
//                 <Icon size={20} />
//                 <span className="text-sm md:hidden ">{label}</span>
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Profile */}
//         <div className="flex items-center gap-3 p-3 bg-[#f1f5f9] rounded-full hover:bg-[#e2e8f0] transition duration-200">
//           <div className="w-6 h-6 rounded-full bg-[#cbd5e0] flex items-center justify-center text-[#1a202c] font-semibold">
//             U
//           </div>
//           <div>
//             <p className="text-sm font-semibold text-[#1a202c] md:hidden">
//               Yashu Chauhan
//             </p>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
// <div className="flex-1 flex flex-col overflow-y-auto">
//   {/* Show Header Only When Home is Active */}
//   {activeIndex === 0 && (
//     <div className="flex items-center justify-between bg-white border-b px-4 py-2 shadow-sm relative">
//       {/* Header Title */}
//       <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>

//       {/* Mobile Toggle Button (Inside Header) */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="md:hidden p-2 bg-cyan-700 text-[#e0f7fa] rounded-full shadow-md"
//       >
//         {open ? <X size={22} /> : <Menu size={22} />}
//       </button>
//     </div>
//   )}

//   {/* Page Content */}
//   <main className="flex-1 p-4 md:p-6 overflow-y-auto">
//     {activeIndex === 0 && <HomePage />}
//     {/* Baaki tabs ke liye conditional components yaha add karo */}
//   </main>
// </div>

//     </div>
//   );
// }

import React, { useState } from "react";
import HomePage from "../components/Home/HomeDashboard";
import {
  Home,
  CalendarDays,
  MessageCircle,
  SlidersHorizontal,
  Wifi,
  Settings,
  Menu,
  X,
  Rocket,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: CalendarDays, label: "Appointments" },
  { icon: MessageCircle, label: "Messages" },
  { icon: SlidersHorizontal, label: "Controls" },
  { icon: Wifi, label: "Network" },
  { icon: Rocket, label: "Get Started" },
  { icon: Settings, label: "Settings" },
];

export default function QminderDashboard() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative z-40 top-0 left-0 
          h-screen w-full md:w-16 
          bg-cyan-800 border-b md:border-r border-[#e2e8f0] shadow-sm 
          px-6 py-8 md:px-1 md:py-2  
          font-sans flex flex-col justify-between 
          transition-transform duration-300 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"} 
          md:translate-y-0
        `}
      >
        {/*  Close Button (Right Corner) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 md:hidden bg-[#e0f7fa] p-2 text-cyan-700 rounded-full"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-[#e0f7fa] mb-10 tracking-wide md:hidden">
            QueuePilot
          </h2>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 md:space-y-8">
            {sidebarItems.map(({ icon: Icon, label }, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeIndex === idx
                      ? "bg-[#f7fafc] text-cyan-800"
                      : "hover:bg-[#f7fafc] hover:text-cyan-800 text-white"
                  }
                `}
              >
                <Icon size={20} />
                <span className="text-sm md:hidden">{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 p-3 bg-[#f1f5f9] rounded-full hover:bg-[#e2e8f0] transition duration-200">
          <div className="w-6 h-6 rounded-full bg-[#cbd5e0] flex items-center justify-center text-[#1a202c] font-semibold">
            U
          </div>
          <p className="text-sm font-semibold text-[#1a202c] md:hidden">
            Yashu Chauhan
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header Only When Home Active */}
        {activeIndex === 0 && (
          <div className="flex items-center justify-between bg-white border-b border-gray-300 px-4 py-2 shadow-sm relative md:hidden">
            <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
            {/* Menu Button (Opens Sidebar) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 bg-cyan-700 text-[#e0f7fa] rounded-full shadow-md"
            >
              <Menu size={22} />
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {activeIndex === 0 && <HomePage />}
        </main>
      </div>
    </div>
  );
}
