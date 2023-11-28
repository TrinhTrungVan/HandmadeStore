'use client'

import AvatarUpload from '@/components/avatar-upload'
import Container from '@/components/container'
import {Button} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import useUser from '@/hooks/use-user'
import {zodResolver} from '@hookform/resolvers/zod'
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().min(1),
  phone: z.string(),
  imageUrl: z.string(),
})

const ProfilePage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const {user} = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username,
      phone: user?.phone,
      email: user?.email,
      imageUrl: user?.imageUrl,
    },
  })

  const isLoading = form.formState.isLoading

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const onSubmit = async () => {
    console.log('value')
  }

  return (
    <Container>
      <div className="flex flex-col gap-y-8 px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
        <h3 className="font-bold text-2xl">My Profile</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-5 gap-8 mt-4 w-full">
            <div className="col-start-1 col-end-4 space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Product name"
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
                        placeholder="Product name"
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
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-start-5 col-end-6 space-y-8">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <AvatarUpload
                        disabled={isLoading}
                        value={field.value}
                        onChange={url => field.onChange(url)}
                        onRemove={() => field.onChange('')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !form.formState.isValid}>
              Save
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  )
}

export default ProfilePage
