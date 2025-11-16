import FavoriteButton from '../../../FavoriteButton'

export function PaperCard({image, cost}) {
    return (
        <div className="relative w-full sm:w-[280px] md:w-[300px] h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden 
        bg-[#FFFCF6] shadow-lg transition-transform 
        will-change-transform duration-300 hover:scale-105">
            <img
                src={image}
                alt="Papers"
                className="w-full h-full object-cover"
            />

            {/* Градиент и информация внизу */}
            <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4">
                <div className="flex items-center justify-end">
                    <div className="z-10"> 
                        <FavoriteButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

