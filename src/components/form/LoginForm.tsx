"use client";
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { LoginSchema } from '@/schemas';

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      token: "",
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values)
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
                <Input placeholder="******" {...field} />
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
                <Input placeholder="Masukkan token yang diberikan" {...field} />
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