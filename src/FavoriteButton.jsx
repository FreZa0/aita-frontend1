// Объявление функционального компонента FavoriteButton
function FavoriteButton() {
    // Ссылка на WhatsApp для связи с клиентом
    const whatsAppUrl = "https://wa.me/+79627354190" ; 

    // Возвращаем JSX разметку кнопки
    return (
        <>
            {/* React Fragment для группировки элементов без дополнительного DOM-узла */}
            {/* 
                Кнопка "КУПИТЬ" с адаптивными стилями для мобильных устройств
                
                Атрибуты:
                - target="_blank": открывает ссылку в новой вкладке
                - rel="noopener noreferrer": безопасность - предотвращает доступ новой вкладки к window.opener
                
                Базовые стили отображения:
                - inline-block: отображается как блочный элемент, но в строке (можно задать ширину/высоту)
                
                Адаптивные отступы (padding):
                - px-4 py-2: горизонтальный отступ 16px, вертикальный 8px на мобильных
                
                Адаптивные размеры текста:
                - text-xs: размер текста 12px на мобильных
                - sm:text-sm: размер текста 14px на планшетах (от 640px)
                - md:text-base: размер текста 16px на десктопах (от 768px)
                
                Стили текста:
                - font-semibold: полужирный шрифт для акцента
                - uppercase: все буквы заглавные
                - text-center: выравнивание текста по центру
                - whitespace-nowrap: текст не переносится на новую строку
                
                Форма и скругление:
                - rounded-lg: скругление углов для современного вида
                
                Фон и прозрачность:
                - bg-white/90: белый фон с прозрачностью 90% (видно изображение под кнопкой)
                - hover:bg-white: при наведении фон становится полностью белым
                - active:bg-gray-50: при нажатии фон становится светло-серым (визуальная обратная связь)
                
                Цвет текста:
                - text-gray-800: темно-серый цвет текста для хорошей читаемости
                
                Тени для эффекта глубины:
                - shadow-md: средняя тень по умолчанию
                - hover:shadow-lg: большая тень при наведении (эффект поднятия)
                - focus:shadow-lg: большая тень при фокусе (для доступности)
                
                Фокус для доступности (клавиатурная навигация):
                - focus:outline-none: убирает стандартный outline браузера
                - focus:ring-2: добавляет кольцо толщиной 2px при фокусе
                - focus:ring-gray-300: серое кольцо при фокусе
                
                Адаптивная минимальная ширина для удобного нажатия:
                - min-w-[80px]: минимальная ширина 80px на мобильных (достаточно для нажатия пальцем)
                - sm:min-w-[100px]: минимальная ширина 100px на планшетах
                - md:min-w-[120px]: минимальная ширина 120px на десктопах
                
                Анимации и трансформации:
                - transform: включает возможность трансформации
                - hover:scale-105: увеличение на 5% при наведении (интерактивность)
                - transition-all: плавный переход для всех свойств
                - duration-200: длительность анимации 200ms (быстрая реакция)
                - ease-in-out: плавное ускорение и замедление анимации
            */}
            {/* Тег ссылки (anchor) для перехода на WhatsApp
                href={whatsAppUrl} - URL ссылки на WhatsApp, хранится в переменной whatsAppUrl
                target="_blank" - открывает ссылку в новой вкладке браузера
                rel="noopener noreferrer" - безопасность: предотвращает доступ новой вкладки к window.opener и не передает referrer
                className содержит множество адаптивных стилей Tailwind CSS (см. комментарий выше) */}
            <a 
                href={whatsAppUrl} 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2
                font-semibold text-xs sm:text-sm md:text-base uppercase rounded-lg 
                shadow-md bg-white/90 hover:bg-white hover:shadow-lg text-gray-800
                focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300
                active:bg-gray-50 transition-all duration-200 ease-in-out
                whitespace-nowrap min-w-[80px] sm:min-w-[100px] md:min-w-[120px]
                text-center transform hover:scale-105"
            >
                {/* Текст кнопки, отображаемый пользователю */}
                ЗАКАЗАТЬ
            </a>
        {/* Закрывающий тег React Fragment */}
        </>
    );    
}
// Экспорт компонента по умолчанию для использования в других файлах
export default FavoriteButton
