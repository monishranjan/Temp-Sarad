export interface HealthPlan {
  id: string;
  name: string;
  tagline: string;
  image: string;
  sumInsured: string;
  sumInsuredOptions: string[];
  hospitalization: string;
  prePostHosp: string;
  modernDayCare: string;
  restoration: string;
  superCredit?: string;
  specialFeatures: string[];
  waitingPeriods: {
    initial: string;
    specific?: string;
    ped: string;
    maternity?: string;
  };
  uniqueHighlights: string[];
  eligibility: {
    entryAgeAdult: string;
    entryAgeChild: string;
    exitAge: string;
    tenure: string;
    coverType: string;
    zones?: string[];
  };
  relationshipsCovered: string[];
  optionalBenefits: string[];
  discounts: string[];
  disclaimers: string[];
}

export const healthPlans: HealthPlan[] = [
  {
    id: "activ-one-max",
    name: "Aditya Birla Activ One MAX+",
    tagline: "Modern health insurance with wellness ecosystem and chronic care support.",
    image: "/plan_activ_one_max.png",
    sumInsured: "2 Lacs to 6 Crores",
    sumInsuredOptions: ["2L", "3L", "4L", "5L", "7L", "10L", "15L", "20L", "25L", "50L", "75L", "1Cr", "2Cr", "3Cr", "4Cr", "5Cr", "6Cr"],
    hospitalization: "Actuals up to Sum Insured (Room Rent, ICU, Ambulance)",
    prePostHosp: "90 days Pre / 180 days Post",
    modernDayCare: "Fully Covered",
    restoration: "Super Reload (Unlimited refill from 2nd claim onwards)",
    superCredit: "100% of Base SI per year (Max 500% increase, max 3 Cr)",
    specialFeatures: [
      "Claim Protect - Non-medical expenses covered",
      "Durable Equipment Cover - Ventilators, wheelchairs, prosthetics, oxygen concentrators",
      "HealthReturns™ - Applicable up to 100% of premium",
      "Chronic Care Cover - Covers Diabetes, Hypertension, Asthma, Obesity from Day 1",
      "Advanced Health Check-up - CTA, PET Scan",
      "Home Health Care & Domiciliary Hospitalization covered",
      "HIV/AIDS & Mental Illness covered"
    ],
    waitingPeriods: {
      initial: "30 Days",
      specific: "2 years",
      ped: "3 years"
    },
    uniqueHighlights: ["Durable Equipment Cover", "Earn 100% Premium Back", "Chronic Care Day 1"],
    eligibility: {
      entryAgeAdult: "Minimum 18 years",
      entryAgeChild: "91 days to 25 years",
      exitAge: "No capping",
      tenure: "1 / 2 / 3 years",
      coverType: "Individual (Min 5 yrs) & Floater (Up to 2 Adults + 4 Children)",
      zones: ["Zone 1", "Zone 2", "Zone 3"]
    },
    relationshipsCovered: [
      "Self", "Spouse", "Live-in Partner", "Dependent Children", "Parents", "Parents-in-law", 
      "Brother", "Sister", "Grandson", "Granddaughter", "Son-in-law", "Daughter-in-law", "Nephew", "Niece"
    ],
    optionalBenefits: [
      "Reduction in Specific Disease Waiting: 2 years to 1 year",
      "Reduction in PED Waiting: 3 years to 2 years OR 1 year",
      "Room Rent Options: Single Private Room / Shared Accommodation",
      "Deductible: ₹15,000 or ₹25,000",
      "Preferred Provider Network Discount: 10%",
      "Critical Illness Cover: 10L / 15L / 20L / 25L",
      "Personal Accident Cover: Up to 50L"
    ],
    discounts: ["HealthReturns up to 100%", "PPN Discount 10%"],
    disclaimers: ["Insurance is a subject matter of solicitation.", "Read all terms before purchase."]
  },
  {
    id: "care-supreme",
    name: "Care Supreme",
    tagline: "Get up to 7 times coverage with unlimited recharge and wellness renewals.",
    image: "/plan_care_supreme.png",
    sumInsured: "5 Lacs to 1 Crore",
    sumInsuredOptions: ["5L", "7L", "10L", "15L", "25L", "50L", "100L"],
    hospitalization: "Up to Sum Insured (No sub-limits on modern or conventional treatments)",
    prePostHosp: "60 days Pre / 180 days Post",
    modernDayCare: "All Day Care & Modern Treatments Covered",
    restoration: "Unlimited Automatic Recharge for related & unrelated illnesses",
    superCredit: "Cumulative Bonus: 50% per year (Max 100%). Super Bonus: 100% per year (Max 500%)",
    specialFeatures: [
      "Claim Shield - Coverage for 68 non-payable hospitalization items",
      "Unlimited E-Consultation with General Physicians",
      "Air Ambulance up to 5 lakh per year",
      "AYUSH treatment up to 100% of Sum Insured",
      "Domiciliary hospitalization covered up to 100% of Sum Insured",
      "Organ Donor Cover up to Sum Insured",
      "Annual Health Check-up: Once per insured per year"
    ],
    waitingPeriods: {
      initial: "30 days",
      specific: "24 months",
      ped: "36 months"
    },
    uniqueHighlights: ["Up to 30% Wellness Discount", "Claim Shield Covers Consumables", "Unlimited Consultations"],
    eligibility: {
      entryAgeAdult: "18 years",
      entryAgeChild: "90 days",
      exitAge: "Lifelong (Child exit at 25 years)",
      tenure: "1 / 2 / 3 years",
      coverType: "Individual (up to 6 persons) & Floater (up to 2 Adults + 2 Children)",
      zones: ["Zone 1: Delhi NCR, Surat", "Zone 2: Mumbai, Gujarat", "Zone 3: Pune, Indore, Telangana", "Zone 4: Rest of India"]
    },
    relationshipsCovered: [
      "Self", "Spouse", "Live-in partner", "Same sex partner", "Son", "Daughter", "Father", "Mother", 
      "Father-in-law", "Mother-in-law", "Grandfather", "Grandmother"
    ],
    optionalBenefits: [
      "Care OPD Add-on: 4 GP + 4 Specialist consultations per year (₹500/consult)",
      "Instant Cover: For Hypertension, Diabetes, Hyperlipidemia, Asthma",
      "PED Wait Period Modification: Reduce to 1 or 2 years",
      "Be-Fit: Unlimited gym access (above age 12)"
    ],
    discounts: [
      "Wellness Discount based on Healthy Days: 270 days = 30%, 240 days = 20%, 180 days = 15%, 120 days = 10%"
    ],
    disclaimers: ["Insurance is a subject matter of solicitation.", "Read brochure carefully before purchase."]
  },
  {
    id: "medicare-premier",
    name: "TATA AIG MediCare Premier",
    tagline: "Premium luxury family health insurance with wellness ecosystem and global hospitalization.",
    image: "/plan_tata_medicare_premier.png",
    sumInsured: "Premium Custom Limits",
    sumInsuredOptions: ["Contact Advisor for specific premium limits"],
    hospitalization: "Up to Sum Insured",
    prePostHosp: "60 days Pre / 90 to 200 days Post",
    modernDayCare: "Covered up to Sum Insured",
    restoration: "Automatic restoration of Sum Insured",
    superCredit: "No Claim Bonus: 50% bonus OR 1% renewal discount",
    specialFeatures: [
      "Global Cover - Planned hospitalization outside India",
      "Emergency Air Ambulance - 5 Lakh to Sum Insured",
      "Maternity - 50k to 1L cover + Vaccinations (10k to 15k)",
      "Consumables Benefit - Specified consumables covered",
      "Dental OPD - Root canal, filling, tooth extraction",
      "Home Care Treatment - Dialysis, Chemotherapy, Pandemic care at home",
      "High End Diagnostics - 25k to 50k covered on OPD basis",
      "Compassionate Travel - 20k to 50k support"
    ],
    waitingPeriods: {
      initial: "30 days",
      specific: "24 months",
      ped: "24 months",
      maternity: "36 months"
    },
    uniqueHighlights: ["Global Hospitalization Cover", "Dental & OPD Benefits", "Maternity & Newborn Care"],
    eligibility: {
      entryAgeAdult: "Minimum 18 years",
      entryAgeChild: "91 days",
      exitAge: "Maximum 65 years",
      tenure: "1 / 2 / 3 years",
      coverType: "Family Coverage up to 7 members",
    },
    relationshipsCovered: [
      "Self", "Spouse", "Dependent Children", "Parents", "Parents-in-law"
    ],
    optionalBenefits: [
      "Pre-Policy Check-up (50% cost borne by TATA AIG if accepted)"
    ],
    discounts: [
      "Global Cover Discount: 2%",
      "Long Term Discount: 2 years = 5%, 3 years = 7.5%",
      "Family Floater Discount: Up to 32%",
      "TATA Employee Discount: 10%"
    ],
    disclaimers: [
      "Insurance is a subject matter of solicitation.", 
      "Please read policy wording carefully before purchase."
    ]
  }
];

