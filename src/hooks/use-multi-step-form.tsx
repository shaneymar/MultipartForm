// import { billingInfoSchema, personalInfoSchema, professionalInfoSchema, StepFormData, type Step } from "@/types";
// import { Briefcase, CreditCard, User } from "lucide-react";
// import { useState } from "react";

// const stepSchemas = [
//     personalInfoSchema,
//     professionalInfoSchema,
//     billingInfoSchema
// ];

// export const steps:Step[] = [
//     {
//         id:'personal',
//         name: 'Personal Info',
//         icon: User,
//     },
//       {
//         id:'professional',
//         name: 'Professional Info',
//         icon: Briefcase,
//     },
//       {
//         id:'billing',
//         name: 'Billing Info',
//         icon: CreditCard,
//     },

// ]
// export function useMultiStepForm (){

//     const [currentStep, setCurrentStep] = useState(0);
//     const [formData, setFormData] = useState<Partial<StepFormData>>({});
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const isFirstStep = currentStep === 0;
//     const isLastStep = currentStep === steps.length -1;

//     const getCurrentStepSchema  = () => stepSchemas[currentStep];
// }