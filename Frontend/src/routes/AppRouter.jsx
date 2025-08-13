// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import LoginPage from "../pages/LoginPage";
// import DashboardPage from "../pages/DashboardPage";
// import QueuePage from "../pages/QueuePage";
// import AppointmentPage from "../pages/AppointmentPage";
// import FeedbackPage from "../pages/FeedbackPage";
// import StaffPage from "../pages/StaffPage";
// import DisplayScreen from "../pages/DisplayScreen";
// import SetupPage from "../pages/SetupPage";
// import AnalyticsPage from "../pages/AnalyticsPage";
// import ProtectedRoute from "../components/common/ProtectedRoute";
// import HomePage from "../pages/Home";
// import SignUpForm from "../pages/SignupPage";
// import StaffCreateForm from "../pages/SignupPage";
// import StartTrial from "../pages/SignupPage";
// import SetupForm from "../components/setUp/SetupForm";
// import WelcomePage from "../pages/WelcomePage";
// import GetStarted from "../pages/Rocket";
// import LocationSettings from "../components/analytics/LocationSettings";
// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       {/* Public route */}
//       <Route path="/signup" element={<StartTrial />} />
//       <Route path="/start-trial" element={<SetupForm />} />
//       <Route path="/get-started" element={<GetStarted />} />

//       <Route path="/login" element={<LoginPage />} />

//       {/* Protected routes */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <DashboardPage />
//           </ProtectedRoute>
//         }
//       />

//       <Route
//         path="/queue"
//         element={
//           <ProtectedRoute>
//             <QueuePage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/appointment"
//         element={
//           <ProtectedRoute>
//             <AppointmentPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/feedback"
//         element={
//           <ProtectedRoute>
//             <FeedbackPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/staff"
//         element={
//           <ProtectedRoute adminOnly>
//             <StaffPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/display"
//         element={
//           <ProtectedRoute>
//             <DisplayScreen />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/setup"
//         element={
//           <ProtectedRoute adminOnly>
//             <SetupPage />
//           </ProtectedRoute>
//         }
//       />
//       {/* <Route
//         path="/location"
//         element={
//           <ProtectedRoute>
//             <AnalyticsPage />
            
//           </ProtectedRoute>
//         }
//       /> */}
// <Route
//   path="/location"
//   element={
//     <ProtectedRoute>
//       <AnalyticsPage />
//     </ProtectedRoute>
//   }
// >
//   {/* Default content when /location is visited */}
//   <Route index element={<LocationSettings />} /> 

//   <Route path="general" element={<div>General Content</div>} />
//   <Route path="opening-hours" element={<div>Opening Hours Content</div>} />
//   <Route path="services" element={<div>Services Content</div>} />
//   <Route path="languages" element={<div>Languages Content</div>} />
//   <Route path="desks" element={<div>Desks Content</div>} />
//   <Route path="appointments" element={<div>Appointments Content</div>} />
//   <Route path="input-fields-labels" element={<div>Input Fields Content</div>} />
//   <Route path="ipad" element={<div>iPad Content</div>} />
//   <Route path="tv-screen" element={<div>TV Screen Content</div>} />
//   <Route path="visitor-website" element={<div>Visitor Website Content</div>} />
// </Route>


//     </Routes>
//   );
// };

// export default AppRouter;
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import QueuePage from "../pages/QueuePage";
import AppointmentPage from "../pages/AppointmentPage";
import FeedbackPage from "../pages/FeedbackPage";
import StaffPage from "../pages/StaffPage";
import DisplayScreen from "../pages/DisplayScreen";
import SetupPage from "../pages/SetupPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import HomePage from "../pages/Home";
import StartTrial from "../pages/SignupPage";
import SetupForm from "../components/setUp/SetupForm";
import GetStarted from "../pages/Rocket";
import LocationSettings from "../components/analytics/LocationSettings";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<StartTrial />} />
      <Route path="/start-trial" element={<SetupForm />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/queue"
        element={
          <ProtectedRoute>
            <QueuePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointment"
        element={
          <ProtectedRoute>
            <AppointmentPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/feedback"
        element={
          <ProtectedRoute>
            <FeedbackPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff"
        element={
          <ProtectedRoute adminOnly>
            <StaffPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/display"
        element={
          <ProtectedRoute>
            <DisplayScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/setup"
        element={
          <ProtectedRoute adminOnly>
            <SetupPage />
          </ProtectedRoute>
        }
      />

      {/* Location Settings routes */}
      <Route
        path="/location"
        element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        }
      >
        {/* Default tab */}
        <Route index element={<LocationSettings />} />

        {/* Dynamic tab route */}
        <Route path=":tab" element={<LocationSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
