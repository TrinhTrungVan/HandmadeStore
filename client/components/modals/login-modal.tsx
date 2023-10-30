'use client'

import React from 'react'
import {Modal} from './modal'
import useLoginModal from '@/hooks/use-login-modal'
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
import toast from 'react-hot-toast'
import useUser from '@/hooks/use-user'
import userServices from '@/api/services/user-services'

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

const LoginModal = () => {
  const loginModal = useLoginModal()
  const {setUserLogged} = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await userServices.login(data)
      if (result.status === 200) {
        toast.success('Login successfully!')
        setUserLogged(result.data.result)
        loginModal.onClose()
        form.reset()
      }
    } catch (error) {
      toast.error('Login failed!')
    }
  }

  return (
    <Modal open={loginModal.isOpen} onClose={loginModal.onClose}>
      <div className="flex flex-col w-full">
        <Heading title="Welcome back" description="Login to your account!" />
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
            <div className="flex justify-end mt-4">
              <Button type="submit" disabled={isLoading} className="self-end">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  )
}

export default LoginModal
