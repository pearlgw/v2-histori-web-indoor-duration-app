import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
  token: z.string().min(4, "Token must be at least 4 characters"),
})

export const RegisterSchema = z.object({
  nim: z.string().min(6, "NIM must be at least 6 characters"),
  fullname: z.string().min(1, "Fullname is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(6, "Address must be at least 6 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  image: z
    .any()
    .refine((file) => file?.length === 1, "Foto wajib diunggah.")
    .refine(
      (file) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        return allowedTypes.includes(file?.[0]?.type);
      },
      "Format foto harus JPG, JPEG, atau PNG."
    )
    .refine(
      (file) => file?.[0]?.size <= 5 * 1024 * 1024,
      "Ukuran foto tidak boleh lebih dari 5 MB."
    ),
})