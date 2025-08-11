import React, { useEffect, useState } from "react";
import { getAllBranches, getServicesByBranch } from "../../api/branchApi";

const SetupBranchService = () => {
  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchSetupData = async () => {
      try {
        const branchRes = await getAllBranches();
        setBranches(branchRes);

        // ✅ Get services for the first branch (if available)
        if (branchRes.length > 0) {
          const serviceRes = await getServicesByBranch(branchRes[0]._id);
          setServices(serviceRes);
        }
      } catch (error) {
        console.error("Error fetching setup data", error);
      }
    };

    fetchSetupData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Branch & Service Setup</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Branches</h3>
          <ul className="bg-white rounded-lg shadow p-4 space-y-2">
            {branches.map((b) => (
              <li key={b._id} className="p-2 border rounded">{b.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="bg-white rounded-lg shadow p-4 space-y-2">
            {services.map((s) => (
              <li key={s._id} className="p-2 border rounded">{s.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetupBranchService;
