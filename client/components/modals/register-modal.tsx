'use client'

import React from 'react'
import {Modal} from './modal'
import useRegisterModal from '@/hooks/use-register-modal'
import Heading from '../ui/heading'
import * as z from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'

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
import toast from 'react-hot-toast'
import useLoginModal from '@/hooks/use-login-modal'
import userServices from '@/api/services/user-services'

const formSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
  phone: z.string().min(1),
})

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      phone: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await userServices.register(data)
      if (result.status === 200) {
        toast.success('Register successfully!')
        registerModal.onClose()
        form.reset()
        loginModal.onOpen()
      }
    } catch (error) {
      toast.error('Register failed!')
    }
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
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Phone"
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
