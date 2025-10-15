export default function Header(){
    return(
        <div className="flex justify-between px-5 py-5">
            <h1 className="text-3xl">
                PromoLink
            </h1>
            <input type="text" placeholder="Buscar Promoções..." className="rounded-lg p-1 px-3 w-2/5 bg-[#EFEAE4] placeholder-[#8B8B8B]"/>
            <div className="flex text-sm gap-7 my-auto font-normal">
                <h2>Home</h2>
                <h2>Categorias</h2>
                <h2>Sobre nós</h2>
            </div>
        </div>
    )
}