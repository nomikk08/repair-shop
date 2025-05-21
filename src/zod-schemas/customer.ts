import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.min(1, "First Name is required"),
    lastName: (schema) => schema.min(1, "Last Name is required"),
    address1: (schema) => schema.min(1, "Address is required"),
    city: (schema) => schema.min(1, "City is required"),
    state: (schema) => schema.length(2, "State must be exactly 2 characters"),
    email: (schema) => schema.email("Invalid Email"),
    zip: (schema) => schema.regex(/^\d{5}(-\d{4})?$/, "Invalid zip format. Use XXXXX or XXXXX-XXXX"),
    phone: (schema) => schema.regex(/^\d{3}-\d{3}-\d{5}$/, "Invalid phone number format. Use XXX-XXX-XXXX")
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type