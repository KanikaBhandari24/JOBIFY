import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Chennai",
      "Kolkata",
      "Jaipur",
      "Ahmedabad",
      "Chandigarh",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "UI/UX Designer",
      "Data Scientist",
      "Machine Learning Engineer",
      "DevOps Engineer",
      "Cloud Engineer",
      "Mobile App Developer",
      "Cybersecurity Analyst",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-40k",
      "42k-1 Lakh",
      "1 Lakh - 5 Lakh",
      "5 Lakh - 10 Lakh",
      "10 Lakh - 20 Lakh",
      "20 Lakh+",
    ],
  },
  {
    filterType: "Job Type",
    array: [
      "Full Time",
      "Part Time",
      "Internship",
      "Freelance",
      "Remote",
      "Hybrid",
    ],
  },
  {
    filterType: "Experience",
    array: [
      "Fresher",
      "0-1 year",
      "1-3 years",
      "3-5 years",
      "5-8 years",
      "8+ years",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full md:w-72 bg-white shadow-md rounded-xl p-4 md:p-6 overflow-y-auto max-h-[85vh]">
      <h1 className="text-lg md:text-xl font-bold">Filter Jobs</h1>
      <hr className="mt-2 mb-3" />
      <RadioGroup className="space-y-4">
        {filterData.map((data, i) => (
          <div key={i}>
            <h1 className="mb-2 font-semibold text-base md:text-lg">
              {data.filterType}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-2 ml-1">
              {data.array.map((item, j) => (
                <div key={j} className="flex items-center gap-2">
                  <RadioGroupItem value={item} id={`${data.filterType}-${j}`} />
                  <Label htmlFor={`${data.filterType}-${j}`} className="text-sm sm:text-sm">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
