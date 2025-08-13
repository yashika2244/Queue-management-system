// import { MapPin } from "lucide-react";

// export default function GeneralTab() {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
//       {/* Location */}
//       <div>
//         <h2 className="text-lg font-semibold mb-4">Location</h2>
//         <input
//           type="text"
//           value="DEMO Service Center"
//           disabled
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed mb-4"
//         />
//         <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm px-4 py-3 rounded mb-6">
//           This is a DEMO location and can't be renamed. Please create a new
//           location if you would like to add your own location name.
//         </div>
//         <div className="border rounded-lg overflow-hidden h-64 relative shadow-sm">
//           <iframe
//             title="Map"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB9lE3BUhQe278TN76OR509wAGvSrKTiEI&callback=initMap`}
//             allowFullScreen
//           ></iframe>
//           <div className="absolute top-2 left-2 bg-white p-1 rounded shadow">
//             <MapPin className="w-5 h-5 text-red-500" />
//           </div>
//         </div>
//       </div>

//       {/* Desks */}
//   <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//   <h2 className="text-lg font-semibold mb-4">Desks</h2>

//   <div className="space-y-5">
//     {/* No desks */}
//     <label className="flex items-start gap-3 cursor-pointer group">
//       <input
//         type="radio"
//         name="deskType"
//         className="mt-1 accent-blue-500 "
//       />
//       <div>
//         <p className="font-medium text-gray-800 group-hover:text-blue-600">
//           No desks
//         </p>
//         <p className="text-sm text-gray-500">
//           You are not using numbered or named desks.
//         </p>
//       </div>
//     </label>

//     {/* Numbered desks */}
//     <label className="flex items-start gap-3 cursor-pointer group">
//       <input
//         type="radio"
//         name="deskType"
//         defaultChecked
//         className="mt-1 accent-blue-500"
//       />
//       <div className="space-y-3">
//         <div>
//           <p className="font-medium text-gray-800 group-hover:text-blue-600">
//             Numbered desks
//           </p>
//           <p className="text-sm text-gray-500">
//             Your desks or workstations have numbers. Desk numbers will
//             appear on TV screens for visitors for easier navigation.
//           </p>
//         </div>

//         {/* Number of desks input */}
//         <div className="flex items-center gap-2">
//           <label className="text-sm text-gray-700">Number of desks</label>
//           <input
//             type="number"
//             defaultValue={3}
//             className="w-20 border border-gray-300 rounded-lg px-3 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Mandatory checkbox */}
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input type="checkbox" className="accent-blue-500" />
//           <span className="text-sm text-gray-700">
//             Selecting a desk is mandatory
//           </span>
//         </label>
//       </div>
//     </label>

//     {/* Named desks */}
//     <label className="flex items-start gap-3 cursor-pointer group">
//       <input
//         type="radio"
//         name="deskType"
//         className="mt-1 accent-blue-500"
//       />
//       <div>
//         <p className="font-medium text-gray-800 group-hover:text-blue-600">
//           Named desks
//         </p>
//         <p className="text-sm text-gray-500">
//           Your desks or rooms are named. Names will appear on TV screens
//           for visitors for easier navigation.
//         </p>
//       </div>
//     </label>
//   </div>
// </div>


//       {/* Delete location */}
//     <div className="p-4">
//   <h2 className="text-lg font-semibold mb-2">Delete Location</h2>
//   <p className="text-sm text-gray-600 mb-4">
//     There's no going back once you delete your location!
//   </p>

//   <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm px-4 py-3 rounded-lg mb-4">
//     To delete this location, please create a new location first.
//   </div>

//   <button
//     disabled
//     className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-400 rounded-lg bg-gray-100 cursor-not-allowed transition"
//   >
//     Delete Location
//   </button>
// </div>

//     </div>
//   );
// }


import { MapPin } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GeneralTab() {
  const center = { lat: 28.6139, lng: 77.2090 }; // Delhi coordinates

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
      {/* Location */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Location</h2>
        <input
          type="text"
          value="DEMO Service Center"
          disabled
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed mb-4"
        />
        <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm px-4 py-3 rounded mb-6">
          This is a DEMO location and can't be renamed. Please create a new
          location if you would like to add your own location name.
        </div>
        <div className="border rounded-lg overflow-hidden h-64 relative shadow-sm">
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={{ height: "100%", width: "100%" }}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          <div className="absolute top-2 left-2 bg-white p-1 rounded shadow">
            <MapPin className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      {/* Desks */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Desks</h2>
        <div className="space-y-5">
          {/* No desks */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="radio" name="deskType" className="mt-1 accent-blue-500" />
            <div>
              <p className="font-medium text-gray-800 group-hover:text-blue-600">No desks</p>
              <p className="text-sm text-gray-500">
                You are not using numbered or named desks.
              </p>
            </div>
          </label>

          {/* Numbered desks */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="radio"
              name="deskType"
              defaultChecked
              className="mt-1 accent-blue-500"
            />
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-800 group-hover:text-blue-600">Numbered desks</p>
                <p className="text-sm text-gray-500">
                  Your desks or workstations have numbers. Desk numbers will appear on TV
                  screens for visitors for easier navigation.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700">Number of desks</label>
                <input
                  type="number"
                  defaultValue={3}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-blue-500" />
                <span className="text-sm text-gray-700">
                  Selecting a desk is mandatory
                </span>
              </label>
            </div>
          </label>

          {/* Named desks */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="radio" name="deskType" className="mt-1 accent-blue-500" />
            <div>
              <p className="font-medium text-gray-800 group-hover:text-blue-600">Named desks</p>
              <p className="text-sm text-gray-500">
                Your desks or rooms are named. Names will appear on TV screens for visitors
                for easier navigation.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Delete location */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Delete Location</h2>
        <p className="text-sm text-gray-600 mb-4">
          There's no going back once you delete your location!
        </p>
        <div className="bg-orange-50 border border-orange-200 text-orange-800 text-sm px-4 py-3 rounded-lg mb-4">
          To delete this location, please create a new location first.
        </div>
        <button
          disabled
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-400 rounded-lg bg-gray-100 cursor-not-allowed transition"
        >
          Delete Location
        </button>
      </div>
    </div>
  );
}
