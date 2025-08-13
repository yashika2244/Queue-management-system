// import React, { useState, useMemo } from "react";
// import {
//   Search,
//   Download,
//   Columns as ColumnsIcon,
//   ChevronUp,
//   ChevronDown,
// } from "lucide-react";

// // Demo Data with all columns
// const demoData = [
//   {
//     id: 1,
//     visitor: "Madison Carter",
//     clerk: "Sophia Powell",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "VIP, Priority",
//     dob: "1990-06-15",
//     plan: "Premium",
//   },
//   {
//     id: 2,
//     visitor: "Daniel Foster",
//     clerk: "Sophia Powell",
//     service: "Consultation",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:03:31",
//     serviceTime: "0:18:19",
//     status: "Served",
//     language: "English",
//     labels: "Regular",
//     dob: "1985-11-20",
//     plan: "Basic",
//   },
//   {
//     id: 3,
//     visitor: "Michael Foster",
//     clerk: "Sophia Powell",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "VIP",
//     dob: "1992-04-10",
//     plan: "Standard",
//   },
//   {
//     id: 4,
//     visitor: "Alexander Jordan",
//     clerk: "Anna Nguyen",
//     service: "Consultation",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:03:31",
//     serviceTime: "0:18:19",
//     status: "Served",
//     language: "English",
//     labels: "Regular",
//     dob: "1988-12-05",
//     plan: "Basic",
//   },
//   {
//     id: 5,
//     visitor: "Oliver Wallace",
//     clerk: "Carlos Rodriguez",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "Priority",
//     dob: "1995-07-25",
//     plan: "Premium",
//   },
// ];

// const pageSize = 5;

// export default function DataInsights() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   // Sorting logic
//   const sortedData = useMemo(() => {
//     let sortable = [...demoData];
//     if (sortConfig.key) {
//       sortable.sort((a, b) => {
//         const aVal = a[sortConfig.key];
//         const bVal = b[sortConfig.key];
//         if (aVal == null) return 1;
//         if (bVal == null) return -1;

//         if (sortConfig.key === "dob") {
//           return sortConfig.direction === "asc"
//             ? new Date(aVal) - new Date(bVal)
//             : new Date(bVal) - new Date(aVal);
//         }

//         if (typeof aVal === "string" && typeof bVal === "string") {
//           return sortConfig.direction === "asc"
//             ? aVal.localeCompare(bVal)
//             : bVal.localeCompare(aVal);
//         }

//         if (typeof aVal === "number" && typeof bVal === "number") {
//           return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
//         }

//         if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//         if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }
//     return sortable;
//   }, [sortConfig]);

//   // Search filter on visitor only
//   const filteredData = useMemo(() => {
//     return sortedData.filter((d) =>
//       d.visitor.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [sortedData, searchTerm]);

//   const totalPages = Math.ceil(filteredData.length / pageSize);
//   const currentData = filteredData.slice((page - 1) * pageSize, page * pageSize);

//   // Sort click handler
//   const requestSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
//     setSortConfig({ key, direction });
//   };

//   const renderSortIcon = (key) => {
//     if (sortConfig.key !== key) return null;
//     return sortConfig.direction === "asc" ? (
//       <ChevronUp size={14} className="inline-block ml-1" />
//     ) : (
//       <ChevronDown size={14} className="inline-block ml-1" />
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
//       {/* Tabs */}
//       <div className="flex space-x-6 border-b pb-2 mb-4 text-sm font-medium">
//         <button className="text-gray-600 hover:text-gray-900">Location performance</button>
//         <button className="text-gray-600 hover:text-gray-900">Team performance</button>
//         <button className="text-cyan-600 border-b-2 border-cyan-600">Visitor history</button>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {[
//           "This month",
//           "Clerks",
//           "Services",
//           "Status",
//           "Wait time",
//           "Service time",
//           "Labels",
//         ].map((label) => (
//           <button
//             key={label}
//             className="px-3 py-1 rounded-full border border-gray-300 bg-white text-sm hover:bg-gray-100 transition"
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Search & Actions */}
//       <div className="flex flex-wrap justify-between items-center mb-3 gap-3">
//         <div className="relative w-full sm:w-auto">
//           <Search size={16} className="absolute left-3 top-3 text-gray-400" />
//           <input
//             type="search"
//             placeholder="Search visitor"
//             className="border rounded px-3 py-2 pl-9 w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-200"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-4 text-sm">
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//             <ColumnsIcon size={16} /> Columns
//           </button>
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//             <Download size={16} /> Download Excel
//           </button>
//         </div>
//       </div>

//       {/* Table container with horizontal scroll */}
//       <div className="overflow-x-auto bg-white rounded shadow border">
//         <table className="min-w-[900px] border-collapse text-sm">
//           <thead className="bg-gray-50 sticky top-0 z-10">
//             <tr>
//               {[
//                 { key: "visitor", label: "Visitor", minWidth: "140px" },
//                 { key: "clerk", label: "Clerk", minWidth: "130px" },
//                 { key: "service", label: "Service", minWidth: "120px" },
//                 { key: "beganWaiting", label: "Began waiting", minWidth: "150px" },
//                 { key: "waitTime", label: "Wait time", minWidth: "100px" },
//                 { key: "serviceTime", label: "Service time", minWidth: "110px" },
//                 { key: "status", label: "Status", minWidth: "100px" },
//                 { key: "language", label: "Language", minWidth: "100px" },
//                 { key: "labels", label: "Labels", minWidth: "150px" },
//                 { key: "dob", label: "Date of Birth", minWidth: "130px" },
//                 { key: "plan", label: "Plan", minWidth: "100px" },
//               ].map(({ key, label, minWidth }) => (
//                 <th
//                   key={key}
//                   onClick={() => requestSort(key)}
//                   className="border px-4 py-2 text-left cursor-pointer hover:bg-gray-100 select-none"
//                   style={{ minWidth }}
//                 >
//                   <div className="flex items-center">
//                     {label}
//                     {renderSortIcon(key)}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan={11} className="text-center p-4 text-gray-500">
//                   No results found
//                 </td>
//               </tr>
//             ) : (
//               currentData.map((row, idx) => (
//                 <tr
//                   key={row.id}
//                   className={`transition ${
//                     idx % 2 === 0 ? "bg-white" : "bg-cyan-50"
//                   } hover:bg-cyan-100`}
//                 >
//                   <td className="border px-4 py-2 text-cyan-700 hover:underline cursor-pointer min-w-[140px]">
//                     {row.visitor}
//                   </td>
//                   <td className="border px-4 py-2 min-w-[130px]">{row.clerk}</td>
//                   <td className="border px-4 py-2 min-w-[120px]">{row.service}</td>
//                   <td className="border px-4 py-2 min-w-[150px]">{row.beganWaiting}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.waitTime}</td>
//                   <td className="border px-4 py-2 min-w-[110px]">{row.serviceTime}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.status}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.language}</td>
//                   <td className="border px-4 py-2 min-w-[150px]">{row.labels}</td>
//                   <td className="border px-4 py-2 min-w-[130px]">{row.dob}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.plan}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-4 flex flex-wrap justify-between items-center gap-3 text-sm">
//         <div>
//           {filteredData.length === 0
//             ? "0 - 0 of 0 items"
//             : `${pageSize * (page - 1) + 1} - ${Math.min(
//                 pageSize * page,
//                 filteredData.length
//               )} of ${filteredData.length} items`}
//         </div>
//         <div className="flex items-center gap-1 flex-wrap">
//           <button
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             disabled={page === 1}
//             className="px-2 py-1 border rounded disabled:opacity-50"
//           >
//             &lt;
//           </button>
//           {Array.from({ length: totalPages }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setPage(idx + 1)}
//               className={`px-2 py-1 border rounded ${
//                 page === idx + 1 ? "bg-cyan-600 text-white" : "hover:bg-cyan-100"
//               }`}
//             >
//               {idx + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             disabled={page === totalPages}
//             className="px-2 py-1 border rounded disabled:opacity-50"
//           >
//             &gt;
//           </button>
//           <div className="flex items-center gap-1 ml-2">
//             <span>Jump to</span>
//             <input
//               type="number"
//               min="1"
//               max={totalPages}
//               value={page}
//               onChange={(e) => {
//                 let val = Number(e.target.value);
//                 if (val >= 1 && val <= totalPages) setPage(val);
//               }}
//               className="w-12 border rounded px-1 py-0.5"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useMemo } from "react";
// import {
//   Search,
//   Download,
//   Columns as ColumnsIcon,
//   ChevronUp,
//   ChevronDown,
// } from "lucide-react";

// // Demo Data with all columns
// const demoData = [
//   {
//     id: 1,
//     visitor: "Madison Carter",
//     clerk: "Sophia Powell",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "VIP, Priority",
//     dob: "1990-06-15",
//     plan: "Premium",
//   },
//   {
//     id: 2,
//     visitor: "Daniel Foster",
//     clerk: "Sophia Powell",
//     service: "Consultation",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:03:31",
//     serviceTime: "0:18:19",
//     status: "Served",
//     language: "English",
//     labels: "Regular",
//     dob: "1985-11-20",
//     plan: "Basic",
//   },
//   {
//     id: 3,
//     visitor: "Michael Foster",
//     clerk: "Sophia Powell",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "VIP",
//     dob: "1992-04-10",
//     plan: "Standard",
//   },
//   {
//     id: 4,
//     visitor: "Alexander Jordan",
//     clerk: "Anna Nguyen",
//     service: "Consultation",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:03:31",
//     serviceTime: "0:18:19",
//     status: "Served",
//     language: "English",
//     labels: "Regular",
//     dob: "1988-12-05",
//     plan: "Basic",
//   },
//   {
//     id: 5,
//     visitor: "Oliver Wallace",
//     clerk: "Carlos Rodriguez",
//     service: "Information",
//     beganWaiting: "9:00am 8/1/2025",
//     waitTime: "0:13:44",
//     serviceTime: "0:11:10",
//     status: "Served",
//     language: "English",
//     labels: "Priority",
//     dob: "1995-07-25",
//     plan: "Premium",
//   },
// ];

// const pageSize = 5;

// export default function DataInsights() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   // Sorting logic
//   const sortedData = useMemo(() => {
//     let sortable = [...demoData];
//     if (sortConfig.key) {
//       sortable.sort((a, b) => {
//         const aVal = a[sortConfig.key];
//         const bVal = b[sortConfig.key];
//         if (aVal == null) return 1;
//         if (bVal == null) return -1;

//         if (sortConfig.key === "dob") {
//           return sortConfig.direction === "asc"
//             ? new Date(aVal) - new Date(bVal)
//             : new Date(bVal) - new Date(aVal);
//         }

//         if (typeof aVal === "string" && typeof bVal === "string") {
//           return sortConfig.direction === "asc"
//             ? aVal.localeCompare(bVal)
//             : bVal.localeCompare(aVal);
//         }

//         if (typeof aVal === "number" && typeof bVal === "number") {
//           return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
//         }

//         if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
//         if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
//         return 0;
//       });
//     }
//     return sortable;
//   }, [sortConfig]);

//   // Search filter on visitor only
//   const filteredData = useMemo(() => {
//     return sortedData.filter((d) =>
//       d.visitor.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [sortedData, searchTerm]);

//   const totalPages = Math.ceil(filteredData.length / pageSize);
//   const currentData = filteredData.slice((page - 1) * pageSize, page * pageSize);

//   // Sort click handler
//   const requestSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
//     setSortConfig({ key, direction });
//   };

//   const renderSortIcon = (key) => {
//     if (sortConfig.key !== key) return null;
//     return sortConfig.direction === "asc" ? (
//       <ChevronUp size={14} className="inline-block ml-1" />
//     ) : (
//       <ChevronDown size={14} className="inline-block ml-1" />
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
//       {/* Tabs */}
//       <div className="flex space-x-6 border-b pb-2 mb-4 text-sm font-medium">
//         <button className="text-gray-600 hover:text-gray-900">Location performance</button>
//         <button className="text-gray-600 hover:text-gray-900">Team performance</button>
//         <button className="text-cyan-600 border-b-2 border-cyan-600">Visitor history</button>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {[
//           "This month",
//           "Clerks",
//           "Services",
//           "Status",
//           "Wait time",
//           "Service time",
//           "Labels",
//         ].map((label) => (
//           <button
//             key={label}
//             className="px-3 py-1 rounded-full border border-gray-300 bg-white text-sm hover:bg-gray-100 transition"
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Search & Actions */}
//       <div className="flex flex-wrap justify-between items-center mb-3 gap-3">
//         <div className="relative w-full sm:w-auto">
//           <Search size={16} className="absolute left-3 top-3 text-gray-400" />
//           <input
//             type="search"
//             placeholder="Search visitor"
//             className="border rounded px-3 py-2 pl-9 w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-200"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="flex gap-4 text-sm">
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//             <ColumnsIcon size={16} /> Columns
//           </button>
//           <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//             <Download size={16} /> Download Excel
//           </button>
//         </div>
//       </div>

//       {/* Table container with horizontal scroll */}
//       <div className="overflow-x-auto bg-white rounded shadow border">
//         <table className="min-w-[1100px] border-collapse text-sm">
//           <thead className="bg-gray-50 sticky top-0 z-10">
//             <tr>
//               {[
//                 { key: "visitor", label: "Visitor", minWidth: "140px" },
//                 { key: "clerk", label: "Clerk", minWidth: "130px" },
//                 { key: "service", label: "Service", minWidth: "120px" },
//                 { key: "beganWaiting", label: "Began waiting", minWidth: "150px" },
//                 { key: "waitTime", label: "Wait time", minWidth: "100px" },
//                 { key: "serviceTime", label: "Service time", minWidth: "110px" },
//                 { key: "status", label: "Status", minWidth: "100px" },
//                 { key: "language", label: "Language", minWidth: "100px" },
//                 { key: "labels", label: "Labels", minWidth: "150px" },
//                 { key: "dob", label: "Date of Birth", minWidth: "130px" },
//                 { key: "plan", label: "Plan", minWidth: "100px" },
//               ].map(({ key, label, minWidth }) => (
//                 <th
//                   key={key}
//                   onClick={() => requestSort(key)}
//                   className="border px-4 py-2 text-left cursor-pointer hover:bg-gray-100 select-none"
//                   style={{ minWidth }}
//                 >
//                   <div className="flex items-center">
//                     {label}
//                     {renderSortIcon(key)}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan={11} className="text-center p-4 text-gray-500">
//                   No results found
//                 </td>
//               </tr>
//             ) : (
//               currentData.map((row, idx) => (
//                 <tr
//                   key={row.id}
//                   className={`transition ${
//                     idx % 2 === 0 ? "bg-white" : "bg-cyan-50"
//                   } hover:bg-cyan-100`}
//                 >
//                   <td className="border px-4 py-2 text-cyan-700 hover:underline cursor-pointer min-w-[140px]">
//                     {row.visitor}
//                   </td>
//                   <td className="border px-4 py-2 min-w-[130px]">{row.clerk}</td>
//                   <td className="border px-4 py-2 min-w-[120px]">{row.service}</td>
//                   <td className="border px-4 py-2 min-w-[150px]">{row.beganWaiting}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.waitTime}</td>
//                   <td className="border px-4 py-2 min-w-[110px]">{row.serviceTime}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.status}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.language}</td>
//                   <td className="border px-4 py-2 min-w-[150px]">{row.labels}</td>
//                   <td className="border px-4 py-2 min-w-[130px]">{row.dob}</td>
//                   <td className="border px-4 py-2 min-w-[100px]">{row.plan}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-4 flex flex-wrap justify-between items-center gap-3 text-sm">
//         <div>
//           {filteredData.length === 0
//             ? "0 - 0 of 0 items"
//             : `${pageSize * (page - 1) + 1} - ${Math.min(
//                 pageSize * page,
//                 filteredData.length
//               )} of ${filteredData.length} items`}
//         </div>
//         <div className="flex items-center gap-1 flex-wrap">
//           <button
//             onClick={() => setPage((p) => Math.max(1, p - 1))}
//             disabled={page === 1}
//             className="px-2 py-1 border rounded disabled:opacity-50"
//           >
//             &lt;
//           </button>
//           {Array.from({ length: totalPages }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setPage(idx + 1)}
//               className={`px-2 py-1 border rounded ${
//                 page === idx + 1 ? "bg-cyan-600 text-white" : "hover:bg-cyan-100"
//               }`}
//             >
//               {idx + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//             disabled={page === totalPages}
//             className="px-2 py-1 border rounded disabled:opacity-50"
//           >
//             &gt;
//           </button>
//           <div className="flex items-center gap-1 ml-2">
//             <span>Jump to</span>
//             <input
//               type="number"
//               min="1"
//               max={totalPages}
//               value={page}
//               onChange={(e) => {
//                 let val = Number(e.target.value);
//                 if (val >= 1 && val <= totalPages) setPage(val);
//               }}
//               className="w-12 border rounded px-1 py-0.5"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from "react";
import {
  Search,
  Download,
  Columns as ColumnsIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const demoData = [
  { id: 1, visitor: "Madison Carter", clerk: "Sophia Powell", service: "Information", beganWaiting: "9:00am 8/1/2025", waitTime: "0:13:44", serviceTime: "0:11:10", status: "Served", language: "English", labels: "VIP, Priority", dob: "1990-06-15", plan: "Premium" },
  { id: 2, visitor: "Daniel Foster", clerk: "Sophia Powell", service: "Consultation", beganWaiting: "9:00am 8/1/2025", waitTime: "0:03:31", serviceTime: "0:18:19", status: "Served", language: "English", labels: "Regular", dob: "1985-11-20", plan: "Basic" },
  { id: 3, visitor: "Michael Foster", clerk: "Sophia Powell", service: "Information", beganWaiting: "9:00am 8/1/2025", waitTime: "0:13:44", serviceTime: "0:11:10", status: "Served", language: "English", labels: "VIP", dob: "1992-04-10", plan: "Standard" },
  { id: 4, visitor: "Alexander Jordan", clerk: "Anna Nguyen", service: "Consultation", beganWaiting: "9:00am 8/1/2025", waitTime: "0:03:31", serviceTime: "0:18:19", status: "Served", language: "English", labels: "Regular", dob: "1988-12-05", plan: "Basic" },
  { id: 5, visitor: "Oliver Wallace", clerk: "Carlos Rodriguez", service: "Information", beganWaiting: "9:00am 8/1/2025", waitTime: "0:13:44", serviceTime: "0:11:10", status: "Served", language: "English", labels: "Priority", dob: "1995-07-25", plan: "Premium" },
];

const columns = [
  { key: "visitor", label: "Visitor", minWidth: "140px" },
  { key: "clerk", label: "Clerk", minWidth: "130px" },
  { key: "service", label: "Service", minWidth: "120px" },
  { key: "beganWaiting", label: "Began waiting", minWidth: "150px" },
  { key: "waitTime", label: "Wait time", minWidth: "100px" },
  { key: "serviceTime", label: "Service time", minWidth: "110px" },
  { key: "status", label: "Status", minWidth: "100px" },
  { key: "language", label: "Language", minWidth: "100px" },
  { key: "labels", label: "Labels", minWidth: "150px" },
  { key: "dob", label: "Date of Birth", minWidth: "130px" },
  { key: "plan", label: "Plan", minWidth: "100px" },
];

const pageSize = 5;

export default function DataInsights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    let sortable = [...demoData];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (sortConfig.key === "dob") {
          return sortConfig.direction === "asc"
            ? new Date(aVal) - new Date(bVal)
            : new Date(bVal) - new Date(aVal);
        }
        return sortConfig.direction === "asc"
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }
    return sortable;
  }, [sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((d) =>
      d.visitor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedData, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key) =>
    sortConfig.key === key &&
    (sortConfig.direction === "asc" ? (
      <ChevronUp size={14} className="ml-1" />
    ) : (
      <ChevronDown size={14} className="ml-1" />
    ));

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2 mb-4 text-sm font-medium">
        {["Location performance", "Team performance", "Visitor history"].map((tab, i) => (
          <button
            key={tab}
            className={`${
              i === 2 ? "text-cyan-600 border-b-2 border-cyan-600" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["This month", "Clerks", "Services", "Status", "Wait time", "Service time", "Labels"].map(
          (label) => (
            <button
              key={label}
              className="px-3 py-1 rounded-full border border-gray-300 bg-white text-sm hover:bg-gray-100"
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* Search & Actions */}
      <div className="flex flex-wrap justify-between items-center mb-3 gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="search"
            placeholder="Search visitor"
            className="border rounded pl-9 pr-3 py-2 w-64 text-sm focus:ring-2 focus:ring-cyan-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
            <ColumnsIcon size={16} /> Columns
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
            <Download size={16} /> Download Excel
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow border">
        <table className="min-w-[1100px] text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              {columns.map(({ key, label, minWidth }) => (
                <th
                  key={key}
                  style={{ minWidth }}
                  onClick={() => requestSort(key)}
                  className="border px-4 py-2 text-left cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    {label}
                    {renderSortIcon(key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center p-4 text-gray-500">
                  No results found
                </td>
              </tr>
            ) : (
              currentData.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-cyan-50"} hover:bg-cyan-100`}
                >
                  {columns.map(({ key, minWidth }) => (
                    <td key={key} style={{ minWidth }} className="border px-4 py-2">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap justify-between items-center text-sm gap-3">
        <div>
          {filteredData.length === 0
            ? "0 - 0 of 0 items"
            : `${(page - 1) * pageSize + 1} - ${Math.min(page * pageSize, filteredData.length)} of ${filteredData.length} items`}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-2 py-1 border rounded ${
                page === i + 1 ? "bg-cyan-600 text-white" : "hover:bg-cyan-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            &gt;
          </button>
          <div className="flex items-center gap-1 ml-2">
            <span>Jump to</span>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={page}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 1 && val <= totalPages) setPage(val);
              }}
              className="w-12 border rounded px-1 py-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
