import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Catalog } from './components/sections/Catalog'
import { Masterclass } from './components/sections/Masterclass'
import { Contacts } from './components/sections/Contacts'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FFFCF6]">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Masterclass />
      <Contacts />
    </div>
  )
}

export default App