import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import ModalProvider from '@/components/providers/modal-provider'
import ToastProvider from '@/components/providers/toast-provider'
import './globals.css'
import {ScrollArea} from '@/components/ui/scroll-area'

const font = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'KiriStore',
  description: 'KiriStore',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <ScrollArea>{children}</ScrollArea>
      </body>
    </html>
  )
}
