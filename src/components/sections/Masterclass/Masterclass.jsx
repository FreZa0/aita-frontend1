export function Masterclass() {
  return (
    <section id="masterclass" className="py-10 mb-8 sm:mb-12 md:mb-16">
      <div className="bg-[#FFFCF6] min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full h-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl py-8 font-bold mb-4 text-center text-black">
            МАСТЕР КЛАСС
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 
          justify-center items-center lg:items-start">
            {/* Изображение */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end 
            px-4 sm:px-6 md:px-8 lg:px-0">
              <div className="transform rotate-[-8deg] hover:rotate-[-6deg] 
              transition-transform duration-300 shadow-2xl hover:shadow-3xl">
                <img
                  src="MK.jpg"
                  alt="Мастер-класс"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] 
                  lg:max-w-[400px] h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Текстовый блок */}
            <div className="relative w-full lg:w-1/2 px-4 sm:px-6 md:px-8 lg:px-0">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg 
              shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="relative z-10"> 
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 
                  leading-relaxed mb-6 sm:mb-8 font-medium">
                    Для нас важно не просто делать красивое, а делать осознанное. 
                    Поэтому мы проводим мастер-классы индивидуальные, групповые и выездные.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 
                  leading-relaxed mb-8 sm:mb-10 font-medium">
                    Особое место занимают встречи со школьниками и детьми с ограниченными 
                    возможностями ведь экология начинается с малого с участия, заботы и вдохновения.
                  </p>
                  <a 
                      href="https://wa.me/+79627354190" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block px-6 sm:px-8 py-3 sm:py-4 font-semibold 
                      text-sm sm:text-base uppercase rounded-lg shadow-lg bg-white 
                      text-gray-800 hover:bg-gray-50 hover:shadow-xl 
                      focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-300
                      active:bg-gray-100 transition-all duration-200 ease-in-out
                      transform hover:scale-105"
                  >
                      ЗАПИСАТЬСЯ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

