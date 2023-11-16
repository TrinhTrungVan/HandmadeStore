export type User = {
  id: string
  username: string
  isAdmin: boolean
  email: string
  phone: string
  imageUrl: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  isFeatured: boolean
  isArchived: boolean
  inStock: number
  sold: number
  images: string[]

  category: Category
  size: Size
  color: Color

  createdAt: any
}

export type Category = {
  id: string
  name: string
}

export type Size = {
  id: string
  name: string
  value: string
}

export type Color = {
  id: string
  name: string
  value: string
}

export type OrderItem = {
  product: Product
  quantity: number
}
