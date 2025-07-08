"use client";
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { LoginSchema } from '@/schemas';

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // redirect setelah login



const LoginForm = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      token: "",
    },
  })

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      verification_token: values.token, // sesuai dengan API
      redirect: false,
    });

    console.log(res)
  
    if (res?.ok) {
      router.push("/dashboard");
    } else {
      console.error("Login gagal:", res?.error);
      form.setError("email", {
        type: "manual",
        message: "Email/Password/Token salah",
      });
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full px-8">

        {/* Username */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
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
                <Input type="password" autoComplete="off" placeholder="******" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Token */}
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Token</FormLabel>
              <FormControl>
                <Input type="password" autoComplete="off" placeholder="Masukkan token yang diberikan" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.token?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full'>Masuk</Button>
      </form>
    </FormProvider>
  )
}

export default LoginForm