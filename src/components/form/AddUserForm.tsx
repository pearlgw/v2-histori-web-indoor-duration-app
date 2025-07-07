"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { RegisterSchema } from "@/schemas"
import { Button } from "../ui/button"
import { createAssistant } from '@/lib/adminService'
import { useSession } from 'next-auth/react'
import toast from "react-hot-toast"

const AddUserForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nim: "",
      fullname: "",
      email: "",
      address: "",
      password: "",
      image: [],
    },
  })

  const { data: session } = useSession()
  const [preview, setPreview] = React.useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      form.setValue("image", [file])
      setPreview(URL.createObjectURL(file))
    }
  }

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      if (!session?.accessToken) {
        console.error("Token tidak tersedia")
        return
      }

      const response = await createAssistant(values, session.accessToken)

      if (response?.meta?.status_code === 201) {
        toast.success(`Asisten '${response.data.fullname}' berhasil ditambahkan`);
        form.reset();
        setPreview(null);
      } else {
        toast.error(response.meta.message_error || "Gagal menambahkan asisten.");
      }
    } catch (err: any) {
      console.error("Gagal submit:", err);
    
      const errorMsg =
        err?.response?.data?.meta?.message_error ||
        err?.message ||
        "Terjadi kesalahan saat menambahkan asisten.";
    
      toast.error(errorMsg);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-6 py-8'>
        {/* NIM */}
        <FormField control={form.control} name="nim" render={({ field }) => (
          <FormItem>
            <FormLabel className='font-bold'>NIM</FormLabel>
            <FormControl><Input className="h-12" placeholder="NIM Mahasiswa" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Fullname */}
        <FormField control={form.control} name="fullname" render={({ field }) => (
          <FormItem>
            <FormLabel className='font-bold'>Fullname</FormLabel>
            <FormControl><Input className="h-12" placeholder="Fullname" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Email */}
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel className='font-bold'>Email</FormLabel>
            <FormControl><Input className="h-12" placeholder="Email" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Address */}
        <FormField control={form.control} name="address" render={({ field }) => (
          <FormItem>
            <FormLabel className='font-bold'>Address</FormLabel>
            <FormControl><Input className="h-12" placeholder="Address" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        {/* Password */}
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem>
            <FormLabel className='font-bold'>Password</FormLabel>
            <FormControl><Input className="h-12" type="password" placeholder="******" autoComplete="off" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        {/* Image Upload */}
          <FormField control={form.control} name="image" render={() => (
            <FormItem>
              <FormLabel className="font-bold">Upload Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleFileChange}
                  className="hover:cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />


        {/* Upload Notes & Submit */}
        <div className="flex flex-col gap-1 text-gray-500">
          <p className="font-semibold text-md text-gray-700">Ketentuan Upload</p>
          <p className="text-xs italic">1. Foto yang diupload harus jelas dan memiliki pencahayaan yang baik.</p>
          <p className="text-xs italic">2. Foto berukuran tidak lebih dari 5 mb!</p>
          <p className="text-xs italic">3. Format photo yang harus diupload adalah JPG, PNG, JPEG</p>

          <Button type="submit" className='w-full mt-4'>Tambah</Button>
        </div>
          {/* Image Preview */}
          {preview && (
            <div className="">
              <p className="font-bold">Image Preview:</p>
              <img src={preview} alt="Preview" className="w-32 h-32 rounded-lg border" />
            </div>
          )}
      </form>
    </FormProvider>
  )
}

export default AddUserForm;
