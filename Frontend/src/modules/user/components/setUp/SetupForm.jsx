import React, { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SetupForm = () => {
  const [step, setStep] = useState(1);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    phone: "",
    industry: [],
    industryOther: "",
    visitors: "",
    visitType: "",
    problems: [],
    problemsOther: "",
    solutions: [],
    solutionsOther: "",
    referral: [],
    referralOther: "",
  });
  const [error, setError] = useState("");
  const totalSteps = 9;

  const toggleCheckbox = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  //  FETCH PRE-FILLED DATA
  useEffect(() => {
    const fetchSetupData = async () => {
      const userId = localStorage.getItem("signupUserId");
      const token = localStorage.getItem("token"); // Add token here
      if (!userId) return;

      try {
        const res = await fetch(`${baseURL}/api/setup/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        if (res.ok) {
          const { data } = await res.json();
          setFormData({
            companyName: data.companyName || "",
            country: data.country || "",
            phone: data.phone || "",
            industry: data.industry || [],
            industryOther: data.industryOther || "",
            visitors: data.visitors || "",
            visitType: data.visitType || "",
            problems: data.problems || [],
            problemsOther: data.problemsOther || "",
            solutions: data.solutions || [],
            solutionsOther: data.solutionsOther || "",
            referral: data.referral || [],
            referralOther: data.referralOther || "",
          });
        }
      } catch (err) {
        console.error("Failed to fetch setup data:", err);
      }
    };

    fetchSetupData();
  }, []);

  //  HANDLE NEXT WITH AUTO-SAVE
  const handleNext = async () => {
    // Validation per step
    if (step === 1 && !formData.companyName.trim())
      return setError("Please enter your company name");
    if (step === 2 && !formData.country)
      return setError("Please pick your country");
    if (step === 3 && !formData.phone.trim())
      return setError("Please enter your phone number");
    if (step === 4 && formData.industry.length < 1)
      return setError("Pick at least 1 industry");
    if (step === 5 && !formData.visitors)
      return setError("Please select visitors range");
    if (step === 6 && !formData.visitType)
      return setError("Please select visit type");
    if (step === 7 && formData.problems.length < 1)
      return setError("Pick at least 1 problem");
    if (step === 8 && formData.solutions.length < 1)
      return setError("Pick at least 1 solution");
    if (step === 9 && formData.referral.length < 1)
      return setError("Pick at least 1 referral source");

    // ✅ Final check when reaching the last step
    if (step === totalSteps) {
      if (
        !formData.companyName ||
        !formData.country ||
        !formData.phone ||
        !formData.visitors ||
        !formData.visitType
      ) {
        toast.error("Please fill all required fields before submission.");
        return;
      }
    }

    setError("");

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("signupUserId");

      if (!userId) {
        toast.error("User ID missing. Please signup again.");
        return;
      }

      const res = await fetch(`${baseURL}/api/setup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId, ...formData }),
      });

      const data = await res.json();
      if (res.ok) {
        if (step < totalSteps) {
          toast.success(`Step ${step} saved!`);
          setStep(step + 1);
        } else {
          toast.success("Setup completed successfully!");
            navigate("/getstarted/firstvisit=true"); 
        }
      } else {
        toast.error(data.message || "Failed to save setup");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error while saving setup");
    }
  };

  const handleBack = () => {
    setError("");
    if (step > 1) setStep(step - 1);
  };

  const stepAnim = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.4 },
  };

  const industries = [
    "Public sector / Government",
    "Healthcare",
    "Event Management",
    "Retail",
    "Education",
    "Other",
  ];
  const visitors = ["1-10", "11-50", "51-200", "201+"];
  const visitTypes = ["Scheduled Appointments", "Walk-ins", "Both"];
  const problems = [
    "Long wait times",
    "Poor scheduling",
    "Low customer satisfaction",
    "Manual queueing issues",
    "Other",
  ];
  const solutions = ["Pen & Paper", "Spreadsheets", "Manual Tickets", "Other"];
  const referralSources = [
    "Google Search",
    "Social Media",
    "Friend/Colleague",
    "Advertisement",
    "Other",
  ];
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-green-100">
      {/* BACKGROUND IMAGES */}
      <img
        src="/deals.svg"
        alt="Illustration"
        className="absolute left-10 bottom-10 w-72 opacity-30 hidden lg:block"
      />
      <img
        src="/deals.svg"
        alt="Illustration"
        className="absolute right-10 top-10 w-64 opacity-20 hidden lg:block"
      />

      {/* MAIN CARD */}
      <div className="backdrop-blur-lg bg-white/80 border border-white/30 shadow-2xl rounded-md p-10 w-[900px] flex gap-8">
        {/* LEFT PROGRESS */}
        <div className="hidden md:flex flex-col w-[280px] border-r border-gray-200 pr-6">
          <h2 className="text-3xl font-[600] text-gray-800 mb-6">
            Almost there!
          </h2>
          <ul className="space-y-4">
            {Array.from({ length: totalSteps }, (_, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 text-lg ${
                  step === i + 1
                    ? "text-teal-700 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    step === i + 1 ? "bg-teal-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </span>
                Step {i + 1}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 flex flex-col md:gap-18">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Step {step} of {totalSteps}
            </p>
            <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: COMPANY NAME */}
            {step === 1 && (
              <motion.div key="step1" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  1. Company name?
                </label>
                <input
                  type="text"
                  placeholder="Type your answere here..."
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className={`border ${
                    error ? "border-red-400" : "border-gray-300"
                  } rounded-lg p-2 px-3 w-full text-lg focus:ring-1 focus:ring-teal-600 outline-none placeholder:text-[15px] placeholder:text-gray-300 transition`}
                />
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}
            {/* STEP 2: COUNTRY */}
            {step === 2 && (
              <motion.div key="2" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  {" "}
                  2. Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className={`border ${
                    error ? "border-red-400" : "border-gray-300"
                  } rounded-lg p-2 px-3 w-full text-[15px] focus:ring-1 focus:ring-teal-600 outline-none text-gray-400 placeholder:text-[15px] placeholder:text-gray-300 transition`}
                >
                  <option value="">Select your country</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                  <option>Andorra</option>
                  <option>Angola</option>
                  <option>Argentina</option>
                  <option>Armenia</option>
                  <option>Australia</option>
                  <option>Austria</option>
                  <option>Azerbaijan</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Belarus</option>
                  <option>Belgium</option>
                  <option>Bhutan</option>
                  <option>Bolivia</option>
                  <option>Bosnia & Herzegovina</option>
                  <option>Brazil</option>
                  <option>Bulgaria</option>
                  <option>Cambodia</option>
                  <option>Cameroon</option>
                  <option>Canada</option>
                  <option>Chile</option>
                  <option>China</option>
                  <option>Colombia</option>
                  <option>Costa Rica</option>
                  <option>Croatia</option>
                  <option>Cuba</option>
                  <option>Cyprus</option>
                  <option>Czech Republic</option>
                  <option>Denmark</option>
                  <option>Dominican Republic</option>
                  <option>Ecuador</option>
                  <option>Egypt</option>
                  <option>Estonia</option>
                  <option>Ethiopia</option>
                  <option>Fiji</option>
                  <option>Finland</option>
                  <option>France</option>
                  <option>Germany</option>
                  <option>Ghana</option>
                  <option>Greece</option>
                  <option>Guatemala</option>
                  <option>Haiti</option>
                  <option>Honduras</option>
                  <option>Hungary</option>
                  <option>Iceland</option>
                  <option>India</option>
                  <option>Indonesia</option>
                  <option>Iran</option>
                  <option>Iraq</option>
                  <option>Ireland</option>
                  <option>Israel</option>
                  <option>Italy</option>
                  <option>Jamaica</option>
                  <option>Japan</option>
                  <option>Jordan</option>
                  <option>Kazakhstan</option>
                  <option>Kenya</option>
                  <option>Kuwait</option>
                  <option>Laos</option>
                  <option>Latvia</option>
                  <option>Lebanon</option>
                  <option>Lithuania</option>
                  <option>Luxembourg</option>
                  <option>Madagascar</option>
                  <option>Malaysia</option>
                  <option>Maldives</option>
                  <option>Mali</option>
                  <option>Malta</option>
                  <option>Mexico</option>
                  <option>Moldova</option>
                  <option>Monaco</option>
                  <option>Mongolia</option>
                  <option>Morocco</option>
                  <option>Nepal</option>
                  <option>Netherlands</option>
                  <option>New Zealand</option>
                  <option>Nigeria</option>
                  <option>North Korea</option>
                  <option>Norway</option>
                  <option>Oman</option>
                  <option>Pakistan</option>
                  <option>Palestine</option>
                  <option>Panama</option>
                  <option>Paraguay</option>
                  <option>Peru</option>
                  <option>Philippines</option>
                  <option>Poland</option>
                  <option>Portugal</option>
                  <option>Qatar</option>
                  <option>Romania</option>
                  <option>Russia</option>
                  <option>Saudi Arabia</option>
                  <option>Serbia</option>
                  <option>Singapore</option>
                  <option>Slovakia</option>
                  <option>Slovenia</option>
                  <option>South Africa</option>
                  <option>South Korea</option>
                  <option>Spain</option>
                  <option>Sri Lanka</option>
                  <option>Sudan</option>
                  <option>Sweden</option>
                  <option>Switzerland</option>
                  <option>Syria</option>
                  <option>Taiwan</option>
                  <option>Tanzania</option>
                  <option>Thailand</option>
                  <option>Tunisia</option>
                  <option>Turkey</option>
                  <option>Uganda</option>
                  <option>Ukraine</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Uruguay</option>
                  <option>Uzbekistan</option>
                  <option>Venezuela</option>
                  <option>Vietnam</option>
                  <option>Yemen</option>
                  <option>Zambia</option>
                  <option>Zimbabwe</option>
                </select>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 3: PHONE */}
            {step === 3 && (
              <motion.div key="3" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  {" "}
                  3. Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className={`border ${
                    error ? "border-red-400" : "border-gray-300"
                  } rounded-lg p-2 px-3 w-full text-lg focus:ring-1 focus:ring-teal-600 outline-none placeholder:text-[15px] placeholder:text-gray-400 transition`}
                />
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 4: INDUSTRY WITH OTHER */}
            {step === 4 && (
              <motion.div key="4" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  {" "}
                  4. Industry
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((item) => (
                    <div key={item}>
                      <label
                        className={`flex items-center gap-2 border p-3 rounded-md cursor-pointer ${
                          formData.industry.includes(item)
                            ? "bg-teal-50 border-teal-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.industry.includes(item)}
                          onChange={() => toggleCheckbox("industry", item)}
                        />
                        {item}
                      </label>
                      {item === "Other" &&
                        formData.industry.includes("Other") && (
                          <input
                            type="text"
                            placeholder="Please specify..."
                            value={formData.industryOther}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                industryOther: e.target.value,
                              })
                            }
                            className="w-full border border-gray-300 rounded-md p-2 mt-2 text-sm focus:ring-1 focus:ring-teal-400"
                            autoFocus
                          />
                        )}
                    </div>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 5: VISITORS */}
            {step === 5 && (
              <motion.div key="5" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  5. Number of Visitors
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {visitors.map((v) => (
                    <label
                      key={v}
                      className={`border p-3 rounded-md cursor-pointer text-center ${
                        formData.visitors === v
                          ? "bg-teal-50 border-teal-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFormData({ ...formData, visitors: v })}
                    >
                      {v}
                    </label>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 6: VISIT TYPE */}
            {step === 6 && (
              <motion.div key="6" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  6. Visit Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {visitTypes.map((v) => (
                    <label
                      key={v}
                      className={`border p-3 rounded-md cursor-pointer text-center ${
                        formData.visitType === v
                          ? "bg-teal-50 border-teal-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => setFormData({ ...formData, visitType: v })}
                    >
                      {v}
                    </label>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 7: PROBLEMS WITH OTHER */}
            {step === 7 && (
              <motion.div key="7" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  7. Problems
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {problems.map((p) => (
                    <div key={p}>
                      <label
                        className={`flex items-center gap-2 border p-3 rounded-md cursor-pointer ${
                          formData.problems.includes(p)
                            ? "bg-teal-50 border-teal-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.problems.includes(p)}
                          onChange={() => toggleCheckbox("problems", p)}
                        />
                        {p}
                      </label>
                      {p === "Other" && formData.problems.includes("Other") && (
                        <input
                          type="text"
                          placeholder="Please specify..."
                          value={formData.problemsOther}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              problemsOther: e.target.value,
                            })
                          }
                          className="w-full border rounded-md p-2 mt-2 text-sm focus:ring-2 focus:ring-teal-600"
                          autoFocus
                        />
                      )}
                    </div>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 8: SOLUTIONS WITH OTHER */}
            {step === 8 && (
              <motion.div key="8" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  8. Current Solutions
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {solutions.map((s) => (
                    <div key={s}>
                      <label
                        className={`flex items-center gap-2 border p-3 rounded-md cursor-pointer ${
                          formData.solutions.includes(s)
                            ? "bg-teal-50 border-teal-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.solutions.includes(s)}
                          onChange={() => toggleCheckbox("solutions", s)}
                        />
                        {s}
                      </label>
                      {s === "Other" &&
                        formData.solutions.includes("Other") && (
                          <input
                            type="text"
                            placeholder="Please specify..."
                            value={formData.solutionsOther}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                solutionsOther: e.target.value,
                              })
                            }
                            className="w-full border rounded-md p-2 mt-2 text-sm focus:ring-2 focus:ring-teal-600"
                            autoFocus
                          />
                        )}
                    </div>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}

            {/* STEP 9: REFERRAL WITH OTHER */}
            {step === 9 && (
              <motion.div key="9" {...stepAnim}>
                <label className="text-xl font-semibold mb-3 block text-gray-800">
                  9. How did you hear about us?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {referralSources.map((r) => (
                    <div key={r}>
                      <label
                        className={`flex items-center gap-2 border p-3 rounded-md cursor-pointer ${
                          formData.referral.includes(r)
                            ? "bg-teal-50 border-teal-500"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.referral.includes(r)}
                          onChange={() => toggleCheckbox("referral", r)}
                        />
                        {r}
                      </label>
                      {r === "Other" && formData.referral.includes("Other") && (
                        <input
                          type="text"
                          placeholder="Please specify..."
                          value={formData.referralOther}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              referralOther: e.target.value,
                            })
                          }
                          className="w-full border rounded-md border-gray-400 p-2 mt-2 text-sm focus:ring-1 focus:ring-teal-600"
                          autoFocus
                        />
                      )}
                    </div>
                  ))}
                </div>
                {error && (
                  <p className="bg-red-50 text-red-600 p-3 mt-3 rounded-md text-sm">
                    {error}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex justify-between mt-auto pt-6">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-teal-700 cursor-pointer hover:bg-gray-200 bg-gray-100 px-8 py-3 rounded-xl font-semibold"
              >
                <FiArrowLeft /> Back
              </button>
            ) : (
              <div />
            )}
            <button
              onClick={handleNext}

              className="bg-teal-700 hover:bg-teal-800 cursor-pointer text-white px-8 py-3 rounded-xl flex items-center gap-2 font-semibold"
            >
              {step === totalSteps ? "Submit" : "Next"} <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupForm;
