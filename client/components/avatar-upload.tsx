import {useEffect, useState} from 'react'

import {ImagePlus, X} from 'lucide-react'
import {CldUploadWidget} from 'next-cloudinary'
import Image from 'next/image'

interface AvatarUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string
}

const AvatarUpload = ({
  value,
  onChange,
  onRemove,
  disabled,
}: AvatarUploadProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  if (!isMounted) return null

  return (
    <div className="flex mb-4 rounded-md h-[160px] border-dashed border-neutral-400">
      {value && (
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <div className="z-10 absolute top-2 right-2 bg-rose-500 rounded-sm cursor-pointer hover:opacity-80 transition">
            <X className="w-5 h-5 text-white" onClick={() => onRemove(value)} />
          </div>
          <Image fill className="object-cover" alt="Image" src={value} />
        </div>
      )}
      <CldUploadWidget onUpload={onUpload} uploadPreset="ecommerce">
        {({open}) => {
          if (value) return <></>
          return (
            <button
              className="flex flex-col w-full items-center justify-center border-dashed border border-neutral-400 rounded-md hover:opacity-70 transition"
              type="button"
              disabled={disabled}
              onClick={() => open()}>
              <ImagePlus className="h-5 w-5" />
              <p className="font-medium text-xs">Upload</p>
            </button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default AvatarUpload
