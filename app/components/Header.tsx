export default function Header() {
    return (
        <div className="flex lg:justify-center justify-around lg:gap-32 p-2 mt-2 lg:p-5">
            <h1 className="lg:text-4xl text-2xl">
                PromoLink
            </h1>
            <input
                type="text"
                placeholder="Buscar Promoções..."
                className="rounded-lg p-1 px-3 lg:w-1/3 bg-[#EFEAE4] placeholder-[#8B8B8B] border-none outline-[#e9d6c0]"
            />

            <div className="lg:flex hidden text-xl gap-7 my-auto font-normal text-[#2e2e2e]">
                <a href="#">Home</a>
                <a href="#">Categorias</a>
                <a href="#">Sobre nós</a>
            </div>
        </div>
    )
}