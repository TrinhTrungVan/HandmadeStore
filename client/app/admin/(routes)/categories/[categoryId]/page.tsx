import getCategory from '@/actions/get-category'
import CategoryForm from './components/category-form'

const CategoryPage = async ({params}: {params: {categoryId: string}}) => {
  let category: any
  if (params.categoryId === 'new') {
    category = null
  } else {
    category = await getCategory(params.categoryId)
  }

  return (
    <div className="flex-1 p-8 pt-6">
      <CategoryForm initialData={category} />
    </div>
  )
}

export default CategoryPage
