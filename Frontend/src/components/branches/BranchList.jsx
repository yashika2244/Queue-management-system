// src/components/branches/BranchList.jsx
import React, { useEffect, useState } from "react";
import { getBranches } from "../../api/setupApi";

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await getBranches();
        setBranches(res);
      } catch (err) {
        console.error("Failed to fetch branches", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  if (loading) return <p className="text-center p-4">Loading branches...</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Branches</h2>
      <ul className="space-y-3">
        {branches.length > 0 ? (
          branches.map((branch, idx) => (
            <li key={idx} className="border p-4 rounded bg-gray-50">
              <p className="font-semibold">{branch.name}</p>
              <p className="text-sm text-gray-600">Location: {branch.location}</p>
            </li>
          ))
        ) : (
          <p>No branches found.</p>
        )}
      </ul>
    </div>
  );
};

export default BranchList;
