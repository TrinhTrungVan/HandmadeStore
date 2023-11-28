import getProducts from '@/actions/get-products'
import Container from '@/components/container'
import ProductList from '@/components/product/product-list'

// import Loadmore from '@/components/store/loadmore'

const FavouritePage = async () => {
  const products = await getProducts({isFeatured: true})
  return (
    <Container>
      <h3 className="font-bold text-2xl ml-8 mt-8">My Favourites</h3>
      <div className="flex flex-col mt-4 px-4 sm:px-6 lg:px-8">
        <ProductList items={products} />
        {/* <Loadmore /> */}
      </div>
    </Container>
  )
}

export default FavouritePage
