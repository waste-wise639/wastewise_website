import axios from "axios";
import { WaitlistFormData } from "@/context/WaitlistContext";

const API_URL = "https://wastewise-api-idho.onrender.com/api";

// Extract first number from a string like "1–2 years" → 1, "5–10 years" → 5
function extractNumber(str: string): string {
  const match = str.match(/\d+/);
  return match ? match[0] : "0";
}

export async function submitWaitlist(formData: WaitlistFormData) {
  const fd = new FormData();

  // Step 1 — Personal Info
  fd.append("fullname", formData.fullName);
  fd.append("email", formData.email);
  // Strip spaces and +234 prefix, send as local Nigerian format 0XXXXXXXXXX
  const rawPhone = formData.phone.replace(/\s/g, "").replace(/^\+234/, "").replace(/^234/, "").replace(/^0+/, "");
  const phone = `0${rawPhone}`;
  fd.append("phone", phone);
  fd.append("business_name", formData.businessName);
  fd.append("business_type", formData.businessType);
  fd.append("country", "Nigeria");
  fd.append("state", formData.state);
  fd.append("lga", formData.lga);
  fd.append("referral_code", "RIWAMA_Rivers");

  // Step 2 — Business Details
  fd.append("business_reg_status", formData.registrationStatus);
  fd.append("cac_number", formData.cacNumber || "");
  fd.append("years_of_experience", extractNumber(formData.yearsOfExperience));
  fd.append("number_of_drivers", extractNumber(formData.numberOfStaff));
  fd.append("operation_coverage_area", formData.operationalCoverageArea);

  if (formData.idDocument) {
    fd.append("id_avatar", formData.idDocument);
  }
  // business_upload_doc is required — send file or empty
  if (formData.businessDocument) {
    fd.append("business_upload_doc", formData.businessDocument);
  }

  // Step 3 — Operations
  // Backend expects a single waste type value, normalize special cases
  const normalizeWasteType = (w: string) => {
    const lower = w.toLowerCase();
    if (lower === "e-waste") return "ewaste";
    return lower;
  };
  const firstWasteType = formData.wasteTypes[0] ? normalizeWasteType(formData.wasteTypes[0]) : "";
  fd.append("type_of_waste", firstWasteType);
  fd.append("collection_vehicle", formData.ownsVehicles === "yes" ? "1" : "0");
  fd.append("number_of_collection_vehicle", formData.numberOfVehicles || "0");
  // capacity expects: daily, weekly, or monthly
  const capacityMap: Record<string, string> = {
    "Less than 1 ton": "daily",
    "1–5 tons": "daily",
    "5–10 tons": "weekly",
    "10–20 tons": "weekly",
    "20+ tons": "monthly",
  };
  fd.append("capacity", capacityMap[formData.dailyWeeklyCapacity] || formData.dailyWeeklyCapacity.toLowerCase());
  fd.append("availability", formData.availability);

  // Step 4 — Banking & Agreement
  fd.append("bank_name", formData.bankName);
  fd.append("account_number", formData.accountNumber);
  fd.append("account_name", formData.accountName);
  fd.append("preferred_payment_mode", formData.preferredPaymentMethod);
  fd.append("agree_to_terms_and_conditions", formData.agreedToTerms ? "1" : "0");

  const response = await axios.post(`${API_URL}/joinwaitlist`, fd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
