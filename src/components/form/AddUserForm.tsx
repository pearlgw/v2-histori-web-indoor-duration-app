"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { RegisterSchema } from "@/schemas"
import { Button } from "../ui/button"

const AddUserForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nim: "",
      username: "",
      email: "",
      address: "",
      password: "",
      token: "",
      role: "user",
      image: undefined,
    },
  })

  const [preview, setPreview] = React.useState<string | null>(null);

  // Watch for changes in the image field
  const selectedFile = form.watch("image");

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      form.setValue("image", event.target.files as FileList); // Set file to react-hook-form
      setPreview(URL.createObjectURL(file)); // Create preview URL
    }
  };


  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log(values)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-6 py-8'>

        {/* NIM */}
        <FormField
          control={form.control}
          name="nim"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>NIM</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="NIM Mahasiswa" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Username</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Email</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.token?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Address</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="Address" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.token?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Password</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="******" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.token?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Role */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Role</FormLabel>
              <FormControl className="border-none">
                <div className="flex gap-4">
                  <FormLabel htmlFor="role-admin" className="flex items-center gap-2">
                    <Input
                      type="radio"
                      {...field}
                      value="admin"
                      id="role-admin"
                      checked={field.value === "admin"}
                    />
                    Admin
                  </FormLabel>

                  <FormLabel htmlFor="role-user" className="flex items-center gap-2">
                    <Input
                      type="radio"
                      {...field}
                      value="user"
                      id="role-user"
                      checked={field.value === "user"}
                    />
                    User
                  </FormLabel>
                </div>
              </FormControl>
              <FormMessage>{form.formState.errors.role?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Image Upload */}
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel className="font-bold">Upload Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hover:cursor-pointer"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Preview */}
          {preview && (
            <div className="mt-4">
              <p className="font-bold">Image Preview:</p>
              <img src={preview} alt="Preview" className="w-32 h-32 rounded-lg border" />
            </div>
          )}
        </div>

        {/* Ketentuan Upload */}
        <div className="flex flex-col gap-1 text-gray-500">
          <p className="font-semibold text-md text-gray-700">Ketentuan Upload</p>
          <p className="text-xs italic">1. Foto yang diupload harus jelas dan memiliki pencahayaan yang baik, supaya
          supaya model bisa merekognisi dengan baik</p>
          <p className="text-xs italic">2. Foto berukuran tidak lebih dari 5 mb!</p>
          <p className="text-xs italic">3. Format photo yang harus diupload adalah JPG, PNG, JPEG</p>

          <Button type="submit" className='w-full'>Tambah</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default AddUserForm