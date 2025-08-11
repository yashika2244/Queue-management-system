// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import QminderDashboard from "../modules/user/pages/dashboard/Dashboard";

// // // function AppRouter() {
// // //   return (
// // //     <> 
// // //       {/* Include all user routes */}
// // // {/* <Route path="/" element={<Navigate to="/login" />} />
// // //       <Route path="/login" element={<LoginPage />} />
// // //       <Route path="/signup" element={<SignupPage />} />
// // //       <Route path="/setup/trial" element={<SetupForm/>} />
// // //       <Route path="/getstarted/firstvisit=true" element={<WelcomeScreen/>} />
// // //       <Route path="/welcome" element={<GetStarted/>} /> */}

// // //     <Routes>
// // //       {/* Dashboard route */}
// // //       <Route path="/dashboard" element={<QminderDashboard />} />
// // //     </Routes>
// // //     </>
// // //   );
// // // }

// // // export default AppRouter;

// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// // import LoginPage from "../pages/LoginPage";
// // import AdminDashboard from "../pages/dashboard/AdminDashboard";
// // import StaffDashboard from "../pages/dashboard/StaffDashboard";

// // const ProtectedRoute = ({ children, role }) => {
// //   const { user } = useAuth();
// //   if (!user) return <Navigate to="/" />;
// //   if (role && user.role !== role) return <Navigate to="/" />;
// //   return children;
// // };

// // const AppRouter = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public Route */}
// //         <Route path="/" element={<LoginPage />} />

// //         {/* Admin Protected */}
// //         <Route
// //           path="/admin/*"
// //           element={
// //             <ProtectedRoute role="admin">
// //               <AdminDashboard/>
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* Staff Protected */}
// //         <Route
// //           path="/staff/*"
// //           element={
// //             <ProtectedRoute role="staff">
// //               <StaffDashboard/>
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default AppRouter;
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "../pages/LoginPage";
// import StaffDashboardPage from "../pages/StaffDashboardPage";
// import VisitorCheckInPage from "../pages/VisitorCheckInPage";
// import AdminPanelPage from "../pages/AdminPanelPage";
// import NotFound from "../pages/NotFound";

// const AppRoutes = () => {
//   return (
//     <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/queues" element={<QueueManagement />} />
//           <Route path="/staff" element={<StaffManagement />} />
//           <Route path="/feedback" element={<FeedbackPage />} />
//           <Route path="/appointments" element={<AppointmentPage />} />
//           <Route path="/analytics" element={<AnalyticsPage />} />
//         </Routes>
//   );
// };

// export default AppRoutes;


// src/appRouter.jsx
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
import SignUpForm from "../pages/SignupPage";
import StaffCreateForm from "../pages/SignupPage";
import StartTrial from "../pages/SignupPage";
import SetupForm from "../components/setUp/SetupForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {/* Public route */}
      <Route path="/signup" element={<StartTrial/>} />
      <Route path="/start-trial" element={<SetupForm/>} />

      <Route path="/login" element={<LoginPage/>} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/queue"
        element={
          <ProtectedRoute>
            <QueuePage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointment"
        element={
          <ProtectedRoute>
            <AppointmentPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/feedback"
        element={
          <ProtectedRoute>
            <FeedbackPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/staff"
        element={
          <ProtectedRoute adminOnly>
            <StaffPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/display"
        element={
          <ProtectedRoute>
            <DisplayScreen/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/setup"
        element={
          <ProtectedRoute adminOnly>
            <SetupPage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <AnalyticsPage/>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
