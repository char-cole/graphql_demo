const _db = {
    plans: [
        {
            id: "F",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom: "No charge",
            labXRay: "No charge",
            outpatientSurgery: "No charge",
            hospitalization:
                "No charge for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient: "No charge",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge",
            urgentCare: "No charge",
            skilledNursingFacility:
                "No charge for days 1-100;<br/>All costs for the 101st day and after",
            homeHealthCare: "No charge",
            hospice: "No charge",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge",
            specialistOfficeVisit: "No charge"
        },
        {
            id: "G",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom: "No charge after Part B deductible",
            labXRay: "No charge after Part B deductible",
            outpatientSurgery: "No charge after Part B deductible",
            hospitalization:
                "No charge for Days 1-60;</br>No charge for Days 61-90;</br>No charge for Days 91-150 (Lifetime Reserve);</br>No charge for Additional 365 days after reserve;</br>All costs beyond the additional 365 days",
            outpatient: "No charge after Part B deductible",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge after Part B deductible",
            urgentCare: "No charge after Part B deductible",
            skilledNursingFacility:
                "No charge for days 1-100; All costs for the 101st day and after",
            homeHealthCare: "$0 or $0 after Part B deductible",
            hospice: "No charge",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge after Part B deductible",
            specialistOfficeVisit: "No charge after Part B deductible"
        },
        {
            id: "N",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom:
                "After Part B deductible, up to $50 for emergency room visit. Emergency room copay is waived if admitted to hospital and visit is covered as Medicare Part A expense",
            labXRay: "No charge after Part B deductible",
            outpatientSurgery: "No charge after Part B deductible",
            hospitalization:
                "No charge for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient: "No charge after Part B deductible",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge after Part B deductible",
            urgentCare: "No charge after Part B deductible",
            skilledNursingFacility:
                "No charge for days 1-100; All costs for the 101st day and after",
            homeHealthCare: "No charge after Part B deductible",
            hospice: "No charge",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit:
                "After Part B Deductible, up to $20 for office visit",
            specialistOfficeVisit:
                "After Part B Deductible, up to $20 for office visit"
        },
        {
            id: "A",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom: "No charge after Part B deductible",
            labXRay: "No charge after Part B deductible",
            outpatientSurgery: "No charge after Part B deductible",
            hospitalization:
                "No charge after Part A Deductible per benefit period for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient: "No charge after Part B deductible",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge after Part B deductible",
            urgentCare: "No charge after Part B deductible",
            skilledNursingFacility:
                "No charge for days 1-20;<br/>Up to $176 a day for days 21-100;<br/>All costs for the 101st day and after",
            homeHealthCare: "No charge after Part B deductible",
            hospice: "No charge",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge after Part B deductible",
            specialistOfficeVisit: "No charge after Part B deductible"
        },
        {
            id: "B",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom: "No charge after Part B deductible",
            labXRay: "No charge after Part B deductible",
            outpatientSurgery: "No charge after Part B deductible",
            hospitalization:
                "No charge for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient: "No charge after Part B deductible",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge after Part B deductible",
            urgentCare: "No charge after Part B deductible",
            skilledNursingFacility:
                "No charge for days 1-20;<br/>Up to $176 a day for days 21-100;<br/>All costs for the 101st day and after",
            homeHealthCare: "No charge after Part B deductible",
            hospice: "No charge",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge after Part B deductible",
            specialistOfficeVisit: "No charge after Part B deductible"
        },
        {
            id: "FH",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom: "No charge after Plan Deductible",
            labXRay: "No charge after Plan Deductible",
            outpatientSurgery: "No charge after Plan Deductible",
            hospitalization:
                "No charge after plan deductible for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient: "No charge after Plan Deductible",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices: "No charge after Plan Deductible",
            urgentCare: "No charge after Plan Deductible",
            skilledNursingFacility:
                "No charge after plan deductible for days 1-100;<br/>All costs for the 101st day and after",
            homeHealthCare: "No charge after Plan Deductible",
            hospice: "No charge after Plan Deductible",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge after Plan Deductible",
            specialistOfficeVisit: "No charge after Plan Deductible"
        },
        {
            id: "GH",
            primaryDoctor:
                "Any Doctor or medical provider that accepts Medicare patients",
            specialist:
                "Any Doctor or medical provider that accepts Medicare patients",
            emergencyRoom:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            labXRay:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            outpatientSurgery:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            hospitalization:
                "No charge after plan deductible for Days 1-60; <br/>No charge for Days 61-90; <br/>No charge for Days 91-150 (Lifetime Reserve); <br/>No charge for Additional 365 days after reserve; <br/>All costs beyond the additional 365 days",
            outpatient:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            periodicExamCoverage: "$0 Copay",
            outOfPocketLimit: "No Limit",
            prescriptionDrugCoverage: "Not Covered",
            ambulanceServices:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            urgentCare:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            skilledNursingFacility:
                "No charge after plan deductible for days 1-100;<br/>All costs for the 101st day and after",
            homeHealthCare:
                "No charge after Plan Deductible unless Part B Deductible has been\nmet",
            hospice: "No charge after Plan Deductible",
            dentalServices: "Not covered",
            hearingServices: "Not covered",
            visionServices: "Not covered",
            primaryOfficeVisit: "No charge after Plan Deductible",
            specialistOfficeVisit: "No charge after Plan Deductible"
        }
    ]
};

module.exports = _db;
