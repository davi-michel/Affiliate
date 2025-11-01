export default function Header() {
    return (
        <div className="flex justify-center gap-32 p-5">
            <h1 className="text-4xl">
                PromoLink
            </h1>
            <input type="text" placeholder="Buscar Promoções..." className="rounded-lg p-1 px-3 w-1/3 bg-[#EFEAE4] placeholder-[#8B8B8B]" />
            <div className="flex text-xl gap-7 my-auto font-normal text-[#2e2e2e]">
                <h2>Home</h2>
                <h2>Categorias</h2>
                <h2>Sobre nós</h2>
            </div>
        </div>
    )
}