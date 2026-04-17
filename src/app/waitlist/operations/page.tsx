"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "@carbon/icons-react";
import { useWaitlist } from "@/context/WaitlistContext";

const wasteTypeOptions = ["Solid", "Liquid", "Recyclable", "Hazardous", "E-Waste", "Organic"];

const capacityOptions = [
  "Less than 1 ton",
  "1–5 tons",
  "5–10 tons",
  "10–20 tons",
  "20+ tons",
];

interface Step3Fields {
  numberOfVehicles: string;
  dailyWeeklyCapacity: string;
}

export default function WaitlistStep3() {
  const router = useRouter();
  const { formData, updateFormData } = useWaitlist();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Fields>({
    defaultValues: {
      numberOfVehicles: formData.numberOfVehicles,
      dailyWeeklyCapacity: formData.dailyWeeklyCapacity,
    },
  });

  const [selectedWasteTypes, setSelectedWasteTypes] = useState<string[]>(formData.wasteTypes);
  const [ownsVehicles, setOwnsVehicles] = useState<"yes" | "no" | "">(formData.ownsVehicles);
  const [availability, setAvailability] = useState<"full-time" | "part-time" | "">(formData.availability);
  const [wasteError, setWasteError] = useState("");
  const [vehicleError, setVehicleError] = useState("");

  const toggleWasteType = (type: string) => {
    setWasteError("");
    setSelectedWasteTypes([type]);
  };

  const onSubmit = (data: Step3Fields) => {
    let hasError = false;

    if (selectedWasteTypes.length === 0) {
      setWasteError("Select a waste type");
      hasError = true;
    }
    if (!ownsVehicles) {
      setVehicleError("Select an option");
      hasError = true;
    }

    if (hasError) return;

    updateFormData({
      ...data,
      wasteTypes: selectedWasteTypes,
      ownsVehicles,
      availability,
    });
    router.push("/waitlist/banking");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[24px] p-6 sm:p-8 lg:py-10 lg:px-8"
      whileHover={{ boxShadow: "0px 16px 32px -8px rgba(0, 0, 0, 0.1)" }}
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.05), 0px 4px 6px -4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Card Header */}
      <div className="flex flex-col gap-0 mb-6">
        <h2 className="text-[20px] font-bold leading-[28px] text-[#171C1A] dark:text-white">
          Operations
        </h2>
        <p className="text-[14px] leading-[20px] text-[#6D7873]">
          What you handle
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-5 pb-2">
        {/* Type of Waste Handled — pill single-select */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
            Type of Waste Handled <span>*</span>
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0 -mx-1 px-1">
            {wasteTypeOptions.map((type) => {
              const isSelected = selectedWasteTypes.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleWasteType(type)}
                  className={`h-[44px] px-4 rounded-full text-[14px] font-medium border transition-all shrink-0 whitespace-nowrap ${
                    isSelected
                      ? "bg-[#09B309] border-[#09B309] text-white"
                      : "bg-white dark:bg-[#0F1210] border-[#E3E8E3] dark:border-[#2A352A] text-[#6D7873]"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          {wasteError && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] text-red-500"
            >
              {wasteError}
            </motion.span>
          )}
        </div>

        {/* Do you own waste collection vehicles? — Yes/No toggle */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
            Do you own waste collection vehicles? <span>*</span>
          </label>
          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              onClick={() => { setOwnsVehicles("yes"); setVehicleError(""); }}
              className={`h-[44px] rounded-[12px] text-[14px] font-medium text-center transition-all ${
                ownsVehicles === "yes"
                  ? "bg-[#09B309] text-white"
                  : "bg-white dark:bg-[#0F1210] border border-[#E3E8E3] dark:border-[#2A352A] text-[#6D7873]"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => { setOwnsVehicles("no"); setVehicleError(""); }}
              className={`h-[44px] rounded-[12px] text-[14px] font-medium text-center transition-all ${
                ownsVehicles === "no"
                  ? "bg-[#09B309] text-white"
                  : "bg-white dark:bg-[#0F1210] border border-[#E3E8E3] dark:border-[#2A352A] text-[#6D7873]"
              }`}
            >
              No
            </button>
          </div>
          {vehicleError && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] text-red-500"
            >
              {vehicleError}
            </motion.span>
          )}
        </div>

        {/* Number of collection vehicles — full width, only if owns vehicles */}
        {ownsVehicles === "yes" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex flex-col gap-1.5"
          >
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
              Number of collection vehicles? <span>*</span>
            </label>
            <input
              {...register("numberOfVehicles", {
                required: ownsVehicles === "yes" ? "Enter number of vehicles" : false,
              })}
              type="number"
              placeholder="Enter no. here"
              className={`h-[44px] px-4 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white placeholder:text-[#6D7873] outline-none transition-all ${
                errors.numberOfVehicles
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.numberOfVehicles && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] text-red-500"
              >
                {errors.numberOfVehicles.message}
              </motion.span>
            )}
          </motion.div>
        )}

        {/* Daily/Weekly Capacity + Availability — side by side */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
          {/* Daily/Weekly Capacity */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
              Daily/Weekly Capacity <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("dailyWeeklyCapacity", { required: "Select capacity" })}
                className={`w-full h-[44px] px-4 pr-10 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white outline-none appearance-none cursor-pointer transition-all ${
                  errors.dailyWeeklyCapacity
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${formData.dailyWeeklyCapacity ? "text-[#171C1A] dark:text-white" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>Select</option>
                {capacityOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.dailyWeeklyCapacity && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[12px] text-red-500"
              >
                {errors.dailyWeeklyCapacity.message}
              </motion.span>
            )}
          </div>

          {/* Availability — Full Time / Part-time pills */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
              Availability <span>*</span>
            </label>
            <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-6">
              <button
                type="button"
                onClick={() => setAvailability("full-time")}
                className={`h-[44px] sm:w-[144px] px-4 rounded-full text-[14px] font-medium border transition-all ${
                  availability === "full-time"
                    ? "bg-[#09B309] border-[#09B309] text-white"
                    : "bg-white dark:bg-[#0F1210] border-[#E3E8E3] dark:border-[#2A352A] text-[#6D7873]"
                }`}
              >
                Full Time
              </button>
              <button
                type="button"
                onClick={() => setAvailability("part-time")}
                className={`h-[44px] sm:w-[144px] px-4 rounded-full text-[14px] font-medium border transition-all ${
                  availability === "part-time"
                    ? "bg-[#09B309] border-[#09B309] text-white"
                    : "bg-white dark:bg-[#0F1210] border-[#E3E8E3] dark:border-[#2A352A] text-[#6D7873]"
                }`}
              >
                Part-time
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-3 pt-6 mt-6 border-t border-[#E3E8E3] dark:border-[#2A352A]">
        <motion.button
          type="submit"
          className="flex items-center justify-center gap-4 h-[44px] w-full sm:w-auto px-8 rounded-full bg-[#09B309] text-[14px] font-semibold text-white cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Continue
          <ArrowRight size={16} />
        </motion.button>

        <motion.button
          type="button"
          onClick={() => router.push("/waitlist/business")}
          className="flex items-center justify-center gap-4 h-[44px] w-full sm:w-auto px-6 rounded-full border border-[#E3E8E3] dark:border-[#2A352A] text-[14px] font-semibold text-[#171C1A] dark:text-white cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-white/5"
          style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>
      </div>
    </motion.form>
  );
}
