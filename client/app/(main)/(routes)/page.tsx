import getProducts from '@/actions/get-products'
import Container from '@/components/container'
import ProductList from '@/components/product/product-list'

// import Loadmore from '@/components/store/loadmore'

const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  return (
    <Container>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8">
        <ProductList items={products} />
        {/* <Loadmore /> */}
      </div>
    </Container>
  )
}

export default HomePage
