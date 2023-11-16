import ProductForm from './components/product-form'
import getProduct from '@/actions/get-product'
import getCategories from '@/actions/get-categories'
import getColors from '@/actions/get-colors'
import getSizes from '@/actions/get-sizes'

const ProductPage = async ({params}: {params: {productId: string}}) => {
  let product: any
  if (params.productId === 'new') {
    product = null
  } else {
    product = await getProduct(params.productId)
  }

  const categories = await getCategories()
  const colors = await getColors()
  const sizes = await getSizes()

  return (
    <div className="flex-1 p-16 pt-6">
      <ProductForm
        initialData={product}
        categories={categories || []}
        colors={colors || []}
        sizes={sizes || []}
      />
    </div>
  )
}

export default ProductPage
