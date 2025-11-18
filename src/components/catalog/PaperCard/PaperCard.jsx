import FavoriteButton from '../../../FavoriteButton'

export function PaperCard({ image, title, description, cost }) {
    return (
        <article className="group relative w-full sm:w-[280px] md:w-[300px] h-[320px] sm:h-[340px] rounded-2xl overflow-hidden 
        bg-[#FFFCF6] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                <div className="flex justify-end">
                    <FavoriteButton />
                </div>

                <div className="text-white drop-shadow-md space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                            {title}
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}

