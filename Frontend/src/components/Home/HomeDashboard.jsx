import React, { useState } from "react";
import VisitorsWaiting from "./VisitorsWaiting";
import ClerksBusy from "./ClerksBusy";
import VisitorsServed from "./VisitorsServed";
import Header from "./Header";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dashboard Sections */}
      <main className="flex-1 px-4 sm:px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Visitors Waiting */}
          <Card title="Visitors Waiting">
            <VisitorsWaiting />
          </Card>

          {/* Clerks Busy */}
          <Card title="Clerks Busy">
            <ClerksBusy />
          </Card>

          {/* Visitors Served */}
          <Card title="Visitors Served">
            <VisitorsServed />
          </Card>
        </div>
      </main>
    </div>
  );
};

// 🧩 Reusable Card component for all sections
const Card = ({ title, children }) => (
  <section className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
      {title}
    </h3>
    {children}
  </section>
);

export default HomePage;
