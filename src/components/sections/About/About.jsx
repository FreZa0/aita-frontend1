import img from "./../../../../public/paperbg1.png"
export function About() {
  return (
    <section id="about" className="py-10 mb-8 sm:mb-12 md:mb-16">
      <div className="bg-[#FFFCF6] flex items-center min-h-screen p-4 mt-10 sm:mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 md:py-12">
          <div className={`relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px] bg-center bg-no-repeat bg-cover sm:bg-cover 
          md:bg-cover flex items-center`} style={{backgroundImage:`url(${img})`}}>
            <div className="relative p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 
            w-full h-full flex flex-col justify-center"> 
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl 
              mark mb-2 sm:mb-3 md:mb-4 leading-tight sm:leading-normal">
                Мы — Аина и Настя
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl 
              mark mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight sm:leading-normal">
                Наше производство полностью ручное и экологичное: 
                каждый лист наполняется теплом и заботой о природе. 
                Перерабатывая макулатуру, создаём уникальные 
                полиграфические изделия, наполненные смыслом и душой.
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl 
              mark leading-tight sm:leading-normal">
                Мы верим, что даже самый обычный лист бумаги может 
                начать новую историю И в каждом человеке есть сила 
                превращать простое в настоящее чудо.
              </p>
            </div>
          </div>

          <div className="relative md:-mt-24 min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 
          items-center justify-items-center md:items-start md:justify-items-start">
            <div className="md:absolute top-0 md:left-1/4 transform rotate-[-6deg] shadow-2xl 
            w-48 sm:w-56 md:w-64 mx-auto md:mx-0">
              <img src="rrr.jpg" 
              alt="Мастерская" 
              className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:absolute top-40 md:right-1/4 transform rotate-[6deg] shadow-2xl 
            w-48 sm:w-56 md:w-64 mx-auto md:mx-0">
              <img src="sss.jpg" 
              alt="Процесс" 
              className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="md:absolute top-80 md:right-0 transform rotate-[-8deg] shadow-2xl 
            w-48 sm:w-56 md:w-64 sm:col-span-2 md:col-span-1 mx-auto md:mx-0">
              <img src="wedding.jpg" 
              alt="Процесс" 
              className="w-full h-auto object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

