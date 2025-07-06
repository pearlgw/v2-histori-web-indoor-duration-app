import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
  token: z.string().min(4, "Token must be at least 4 characters"),
})

export const RegisterSchema = z.object({
  nim: z.string().min(6, "NIM must be at least 6 characters"),
  username: z.string().min(6, "Username must be at least 6 characters"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(6, "Address must be at least 6 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  token: z.string().min(6, "Token must be at least 6 characters"),
  role: z.enum(["admin", "user"], { required_error: "Role is required" }),
  image: z
  .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
    message: "Image is required",
  })
  .refine((files) => files[0]?.type.startsWith("image/"), {
    message: "Only image files are allowed",
  }),
})