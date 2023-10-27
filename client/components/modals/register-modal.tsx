'use client'

import React from 'react'
import {Modal} from './modal'
import useRegisterModal from '@/hooks/use-register-modal'
import Heading from '../ui/heading'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '../ui/input'
import {Button} from '../ui/button'

const formSchema = z.object({
  username: z.string().min(8),
  email: z.string().min(8),
  password: z.string().min(8),
})

const RegisterModal = () => {
  const registerModal = useRegisterModal()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Modal open={registerModal.isOpen} onClose={registerModal.onClose}>
      <div className="flex flex-col w-full">
        <Heading
          title="Welcome to KiriStore"
          description="Create an account!"
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading} className="self-end">
                Register
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  )
}

export default RegisterModal
