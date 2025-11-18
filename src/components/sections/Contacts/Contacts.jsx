import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
export function Contacts() {
  return (
    <footer id="contacts" className="bg-[#FFFCF6] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Основной контент футера */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="logooo.png"
                alt="Logo"
                className="h-5 w-auto mb-4"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Мы не фабрика, а мастерская смыслов. 
              Создаём уникальные полиграфические изделия с душой.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
              Навигация
            </h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 
                transition duration-150"
              >
                О нас
              </a>
              <a 
                href="#catalog" 
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 
                transition duration-150"
              >
                Каталог
              </a>
              <a 
                href="#masterclass" 
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 
                transition duration-150"
              >
                Мастер-класс
              </a>
              <a 
                href="#contacts" 
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 
                transition duration-150"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
              Контакты
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-gray-600">
              <div>
                <p className="font-medium text-gray-800 mb-1">Адрес:</p>
                <p>г. Якутск, ул. Проспект Михаила Николаева, 25</p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">Время работы:</p>
                <p>Ежедневно с 9:00 до 18:00</p>
              </div>
            </div>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
              Свяжитесь с нами
            </h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/+79627354190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition duration-150 hover:opacity-75 hover:scale-110 
                transform"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={27}/>
              </a>
              <a 
                href="https://t.me/Aitusssik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition duration-150 hover:opacity-75 hover:scale-110 
                transform"
                aria-label="Telegram"
              >
                <RiTelegramLine size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-200 pt-8 sm:pt-10">
          {/* Копирайт */}
          <div className="flex flex-col sm:flex-row justify-between items-center 
          gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Мастерская смыслов. Все права защищены.
            </p>
            <p className="text-xs sm:text-sm">
              Сделано с ❤️ и заботой о природе
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

