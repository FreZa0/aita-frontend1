import { PAPERS } from '../../../Papers.data'
import { PaperCard } from '../../catalog/PaperCard'

export function Catalog() {
  return (
    <section id="catalog" className="py-8 sm:py-12 md:py-16 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto p-4">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
            КАТАЛОГ
          </h1>
        </header>
      </div> 
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 mx-4 md:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        {
          PAPERS.map(({ name, ...paper }) => (
            <PaperCard
              key={name}
              {...paper}
            />
          ))
        }
      </div>
    </section>
  )
}

