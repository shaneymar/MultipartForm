import {z} from 'zod';

export const personalInfoSchema = z.object({
    firstName : z.string().min(1, "First Name is Required"),
    lastName: z.string().min(1, "Last Name is Required"),
    email: z.string().email("Please Enter Valid Email address"),
    phone : z.string().min(10, "Invalid Phone Number")
});


export const professionalInfoSchema = z.object({
    company : z.string().min(1,"Company Name is Required"),
    position : z.string().min(1, "Position is Required"),
    experience : z.enum(['0-2', '3-5', '6-10', '10+'] ),
    industry : z.string().min(1, "Industry is Required"),
})

export const billingInfoSchema = z.object({
    cardNumber : z.string().min(16, "Card Must be 16 digits").max(16,"Card Must be 16 digits"),
    cardHolderName : z.string().min(1, "Card Holder Name is Required"),
    expiryDate : z.string().min(4, "Invalid Expiry date"),
    cvv: z.string().min(3, "Invalid CVV").max(4),
})

export type personalInfo = z.infer<typeof personalInfoSchema>
export type professionalInfo = z.infer<typeof professionalInfoSchema>
export type billingInfo = z.infer<typeof billingInfoSchema>