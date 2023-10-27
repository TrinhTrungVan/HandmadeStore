import Container from '@/components/container'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-4">
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="aspect-square rounded-lg">
                ProductCard
              </div>
            ))}
        </div>
      </div>
    </Container>
  )
}
